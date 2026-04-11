import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Консультация",
    text: "Обсуждаем ваши идеи, цели мероприятия и бюджет. Подбираем оптимальные материалы."
  },
  {
    number: "02",
    title: "Дизайн-макет",
    text: "Создаем визуализацию будущей награды. Бесплатно подготовим макет под ваши требования."
  },
  {
    number: "03",
    title: "Производство",
    text: "Изготавливаем изделия на собственном оборудовании с контролем качества на каждом этапе."
  },
  {
    number: "04",
    title: "Доставка",
    text: "Надежно упаковываем и доставляем ваш заказ в любую точку Узбекистана."
  }
];

export const Process = () => {
  return (
    <section id="process" className="section-padding bg-brand-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-8"
          >
            <div className="w-12 h-px bg-brand-red" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Путь к результату</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-none">
            ДЕТАЛИ <br />
            <span className="text-white/20 italic">СОТРУДНИЧЕСТВА</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-12 md:gap-24">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="text-6xl md:text-8xl font-display font-bold text-white/[0.03] mb-8">
                {step.number}
              </div>
              <h3 className="text-xl font-display font-bold mb-6 tracking-tight">{step.title}</h3>
              <p className="text-white/30 text-sm font-light leading-relaxed">
                {step.text}
              </p>
              
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-12 w-12 h-px bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
