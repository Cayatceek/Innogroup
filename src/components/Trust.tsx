import { motion } from 'motion/react';

const clients = [
  "GOLDEN HOUSE", "ARTEL", "IT PARK", "AKFA BUILD", "EVOS", "ITV", "TAF!25", "BRAND AWARDS", "UCELL", "BEELINE", "ANORBANK", "KAPITALBANK"
];

const metrics = [
  { label: "Лет опыта", value: "8+" },
  { label: "Проектов", value: "1500+" },
  { label: "Клиентов", value: "400+" },
  { label: "Наград", value: "10k+" },
];

const caseComments = [
  {
    client: "GOLDEN HOUSE",
    text: "Создали серию эксклюзивных наград для ежегодной премии. Безупречное качество материалов и внимание к деталям.",
    event: "Employee of the Year 2025"
  },
  {
    client: "IT PARK",
    text: "Разработали уникальный дизайн кубков для международного стартап-саммита. Wow-эффект был достигнут на 100%.",
    event: "Central Asia Startup Summit"
  }
];

export const Trust = () => {
  return (
    <section className="section-padding bg-brand-black overflow-hidden border-y border-white/[0.05] noise-overlay">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-premium mb-2">{m.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative flex overflow-hidden mb-24">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-10" />
        
        <motion.div 
          animate={{ x: [0, -1500] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex items-center gap-16 md:gap-32 whitespace-nowrap"
        >
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <span 
              key={idx} 
              className="text-4xl md:text-7xl font-display font-bold text-white/5 uppercase tracking-tighter hover:text-brand-red/20 transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {caseComments.map((comment, idx) => (
            <motion.div
              key={comment.client}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-sm relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-brand-red/5 group-hover:text-brand-red/10 transition-colors">
                <span className="text-9xl font-display font-bold leading-none">"</span>
              </div>
              <div className="relative z-10">
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-red mb-4">{comment.event}</div>
                <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-white/80 mb-8 italic">
                  {comment.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-white/20" />
                  <span className="text-sm font-display font-bold">{comment.client}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
