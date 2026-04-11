import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Стандарт",
    price: "от 150 000 сум",
    description: "Оптимальное решение для массовых мероприятий и корпоративных подарков.",
    features: [
      "Материал: Акрил / 3D-полимер",
      "Лазерная гравировка",
      "Срок изготовления: 3-5 дней",
      "Типовая упаковка",
      "Доставка по Ташкенту"
    ]
  },
  {
    name: "Премиум",
    price: "от 450 000 сум",
    description: "Эксклюзивные награды для победителей и топ-менеджмента.",
    features: [
      "Материал: Композит / Металл",
      "3D гравировка / УФ-печать",
      "Срок изготовления: 5-7 дней",
      "Подарочный футляр",
      "Индивидуальный дизайн"
    ],
    highlight: true
  },
  {
    name: "VIP / Custom",
    price: "Индивидуально",
    description: "Уникальные изделия по вашему брифу без ограничений по сложности.",
    features: [
      "Любые премиум материалы",
      "Комбинированные техники",
      "Срок изготовления: от 10 дней",
      "VIP упаковка",
      "Персональный менеджер"
    ]
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-brand-black relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-8"
          >
            <div className="w-12 h-px bg-brand-red" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Стоимость</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-none">
            ИНВЕСТИЦИИ <br />
            <span className="text-white/20 italic">В ПРИЗНАНИЕ</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glow-card p-8 md:p-12 rounded-sm luxury-border flex flex-col ${plan.highlight ? 'bg-white/[0.03] border-brand-red/30' : 'bg-transparent'}`}
            >
              <div className="mb-8">
                <h3 className={`text-2xl font-display font-bold mb-2 ${plan.highlight ? 'text-brand-red' : 'text-white'}`}>{plan.name}</h3>
                <div className="text-3xl font-display font-bold text-premium mb-4">{plan.price}</div>
                <p className="text-white/40 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-white/60">
                    <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all duration-500 light-sweep ${plan.highlight ? 'bg-brand-red text-white' : 'bg-white text-black hover:bg-brand-red hover:text-white'}`}>
                Рассчитать проект
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 glass rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h4 className="text-xl font-display font-bold mb-2">Как мы считаем стоимость?</h4>
            <p className="text-white/40 text-sm">Цена зависит от тиража, сложности дизайна, выбранных материалов и срочности. При заказе от 50 единиц действуют специальные корпоративные условия.</p>
          </div>
          <div className="flex gap-4">
             <div className="text-center px-6 border-r border-white/10">
                <div className="text-2xl font-display font-bold text-brand-red">15%</div>
                <div className="text-[8px] uppercase tracking-widest text-white/30">Скидка от 100 шт</div>
             </div>
             <div className="text-center px-6">
                <div className="text-2xl font-display font-bold text-brand-red">24ч</div>
                <div className="text-[8px] uppercase tracking-widest text-white/30">Расчет сметы</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
