import { motion } from 'motion/react';

const materials = [
  {
    name: "3D-Полимеры",
    description: "Высокоточная печать сложных геометрических форм и текстур.",
    image: "https://picsum.photos/seed/3d-print/800/800"
  },
  {
    name: "Благородные металлы",
    description: "Латунь, алюминий и сталь с ювелирной обработкой поверхности.",
    image: "https://picsum.photos/seed/metal-texture/800/800"
  },
  {
    name: "Оптическое стекло",
    description: "Безупречная прозрачность и игра света в каждой грани.",
    image: "https://picsum.photos/seed/glass-texture/800/800"
  },
  {
    name: "Композиты",
    description: "Сочетание различных материалов для создания уникальных визуальных эффектов.",
    image: "https://picsum.photos/seed/composite-texture/800/800"
  }
];

export const Materials = () => {
  return (
    <section className="section-padding bg-brand-black overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="w-12 h-px bg-brand-red" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Эстетика материалов</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-none mb-12">
              БЕЗУПРЕЧНОСТЬ <br />
              <span className="text-brand-red">В ДЕТАЛЯХ</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Мы отбираем только лучшие материалы, чтобы каждое изделие было не просто наградой, а произведением искусства, которое приятно держать в руках.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((m, idx) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden mb-8 luxury-border rounded-sm">
                <img 
                  src={m.image} 
                  alt={m.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 tracking-tight">{m.name}</h3>
              <p className="text-white/30 text-sm font-light leading-relaxed">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
