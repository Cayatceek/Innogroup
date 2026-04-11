import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "INNOGROUP создали для нашего фестиваля награды, которые стали его главным визуальным символом. Уровень детализации и качество материалов превзошли все ожидания.",
    author: "Малика Абдуллаева",
    position: "Event Director, TAF!",
    company: "Advertising Festival"
  },
  {
    quote: "Работаем со студией уже третий год. Это единственный партнер в Узбекистане, который понимает, что такое настоящий премиум-сервис и сжатые сроки.",
    author: "Сардор Икрамов",
    position: "HR Brand Manager",
    company: "Golden House"
  },
  {
    quote: "Индивидуальный подход к каждой статуэтке. Они не просто делают по макету, они предлагают идеи, которые делают продукт лучше.",
    author: "Елена Ким",
    position: "Marketing Lead",
    company: "IT Park Uzbekistan"
  }
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-brand-black border-y border-white/[0.05]">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6 mb-8"
          >
            <div className="w-12 h-px bg-brand-red" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Мнения лидеров</span>
            <div className="w-12 h-px bg-brand-red" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-none">
            ДОВЕРИЕ <br />
            <span className="text-white/20 italic">ПАРТНЕРОВ</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-12 glass rounded-sm flex flex-col justify-between h-full"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/[0.03] stroke-[1px]" />
              
              <p className="text-lg md:text-xl font-light leading-relaxed text-white/70 mb-12 italic">
                "{t.quote}"
              </p>
              
              <div>
                <div className="w-8 h-px bg-brand-red mb-6" />
                <h4 className="text-lg font-display font-bold tracking-tight mb-1">{t.author}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                  {t.position} • {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
