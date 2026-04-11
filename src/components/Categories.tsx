import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { ArrowRight, Target, Layers, Zap } from 'lucide-react';

const solutions = [
  {
    title: "Статуэтки",
    description: "Композиты, стекло, металл",
    image: "https://picsum.photos/seed/statuette-lux/800/1000",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Кубки",
    description: "Современные формы",
    image: "https://picsum.photos/seed/cup-lux/800/600",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Медали",
    description: "Литье и гравировка",
    image: "https://picsum.photos/seed/medal-lux/800/600",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "VIP-награды",
    description: "Эксклюзивные материалы",
    image: "https://picsum.photos/seed/vip-lux/800/1000",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    title: "Корпоративные подарки",
    description: "Премиум сувениры",
    image: "https://picsum.photos/seed/gift-lux/800/600",
    className: "md:col-span-2 md:row-span-1"
  }
];

const tasks = [
  { icon: Target, title: "Корпоративные премии", text: "Награждение лучших сотрудников и партнеров года." },
  { icon: Layers, title: "Спортивные турниры", text: "Кубки и медали для чемпионатов любого уровня." },
  { icon: Zap, title: "Бизнес-форумы", text: "Памятные знаки для спикеров и почетных гостей." },
];

export const Categories = () => {
  return (
    <section id="solutions" className="section-padding bg-brand-black noise-overlay">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-8"
          >
            <div className="w-12 h-px bg-brand-red" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Решения и форматы</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-none">
            ДЛЯ КАКИХ <br />
            <span className="text-white/20 italic">ЗАДАЧ ПОДХОДИТ?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {tasks.map((task, idx) => (
            <motion.div
              key={task.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-sm luxury-border glow-card"
            >
              <task.icon className="w-10 h-10 text-brand-red mb-6" />
              <h3 className="text-xl font-display font-bold mb-4">{task.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{task.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          {solutions.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={cn(
                "group relative overflow-hidden rounded-sm cursor-pointer luxury-border light-sweep",
                cat.className
              )}
            >
              <div className="aspect-[4/5] md:aspect-auto md:h-full overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-red mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {cat.description}
                </span>
                <h3 className="text-xl md:text-3xl font-display font-bold tracking-tight">{cat.title}</h3>
              </div>
              
              <div className="absolute top-6 md:top-8 right-6 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45 group-hover:bg-brand-red group-hover:border-brand-red">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
