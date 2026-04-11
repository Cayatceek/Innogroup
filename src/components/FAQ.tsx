import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const faqs = [
  {
    question: "Каковы сроки изготовления наград?",
    answer: "Стандартный срок изготовления составляет от 3 до 7 рабочих дней в зависимости от сложности и тиража. Возможны срочные заказы за 24-48 часов."
  },
  {
    question: "Можно ли заказать одну статуэтку?",
    answer: "Да, мы работаем как с индивидуальными заказами от 1 единицы, так и с крупными тиражами для масштабных мероприятий."
  },
  {
    question: "Делаете ли вы бесплатный макет?",
    answer: "При оформлении заказа мы бесплатно разрабатываем дизайн-макет и визуализацию вашего будущего изделия."
  },
  {
    question: "Какие материалы вы используете?",
    answer: "Мы используем 3D-печать из высокотехнологичных полимеров, оптическое стекло, латунь, алюминий, ценные породы дерева и современные композитные материалы."
  },
  {
    question: "Осуществляете ли вы доставку в другие города?",
    answer: "Да, мы доставляем продукцию по всему Узбекистану через проверенные курьерские службы с гарантией сохранности изделий."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-brand-black">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-24">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-8"
          >
            <div className="w-12 h-px bg-brand-red" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Вопросы и ответы</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-none mb-12">
            ДЕТАЛИ <br />
            <span className="text-brand-red">СОТРУДНИЧЕСТВА</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-sm">
            Мы ценим ваше время и прозрачность в работе. Здесь собраны ответы на самые частые вопросы наших клиентов.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-8">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border-b border-white/[0.05] pb-8"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className={cn(
                  "text-xl md:text-2xl font-display font-bold transition-colors duration-500",
                  openIndex === idx ? "text-brand-red" : "text-white/60 group-hover:text-white"
                )}>
                  {faq.question}
                </span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 ml-8">
                  {openIndex === idx ? (
                    <Minus className="w-4 h-4 text-brand-red" />
                  ) : (
                    <Plus className="w-4 h-4 text-white/40" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="pt-8 text-white/40 leading-relaxed text-lg font-light max-w-2xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
