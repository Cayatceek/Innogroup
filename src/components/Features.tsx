import { motion } from 'motion/react';
import { Palette, Gem, PenTool, Zap, Truck, Target, Shield, Award } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: "Индивидуальный дизайн",
    text: "Разрабатываем уникальные концепции, которые отражают ДНК вашего бренда."
  },
  {
    icon: Award,
    title: "Премиальные материалы",
    text: "Используем высокотехнологичные композиты и эксклюзивные материалы."
  },
  {
    icon: PenTool,
    title: "Ювелирная гравировка",
    text: "Высокоточное нанесение логотипов и текстов любой сложности."
  },
  {
    icon: Zap,
    title: "Сжатые сроки",
    text: "Собственное производство позволяет выполнять заказы максимально быстро."
  },
  {
    icon: Truck,
    title: "Доставка по стране",
    text: "Надежная логистика в любую точку Узбекистана."
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    text: "Контролируем каждый этап производства — от эскиза до упаковки."
  }
];

export const Features = () => {
  return (
    <section id="features" className="section-padding bg-brand-black relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
          <div className="lg:col-span-4 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="w-12 h-px bg-brand-red" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Наши преимущества</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-none mb-12">
              ПОЧЕМУ <br />
              <span className="text-brand-red">ВЫБИРАЮТ НАС</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Мы объединяем современное производство и дизайнерский подход, чтобы создавать награды, которые становятся гордостью их обладателей.
            </p>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-24">
            {features.map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="w-16 h-16 rounded-sm glass flex items-center justify-center mb-8 group-hover:bg-brand-red transition-colors duration-500">
                  <div className="text-white group-hover:scale-110 transition-transform duration-500">
                    <f.icon className="w-6 h-6 stroke-[1.5px]" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold mb-4 tracking-tight">{f.title}</h3>
                <p className="text-white/30 text-sm font-light leading-relaxed max-w-xs group-hover:text-white/50 transition-colors">
                  {f.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
