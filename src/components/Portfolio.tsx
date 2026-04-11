import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const projects = [
  {
    client: "Golden House",
    project: "The Best Employees Award",
    image: "https://picsum.photos/seed/gh-lux/1200/800",
    category: "VIP-награды"
  },
  {
    client: "IT Park",
    project: "Annual IT Awards Ceremony",
    image: "https://picsum.photos/seed/itp-lux/1200/800",
    category: "Статуэтки"
  },
  {
    client: "TAF!25",
    project: "Festival of Advertising",
    image: "https://picsum.photos/seed/taf-lux/1200/800",
    category: "Кубки"
  },
  {
    client: "Brand Awards",
    project: "National Brand Recognition",
    image: "https://picsum.photos/seed/ba-lux/1200/800",
    category: "VIP-награды"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-24 items-center`}
    >
      <motion.div 
        style={{ scale }}
        className="w-full md:w-3/5 group relative overflow-hidden portfolio-card rounded-sm"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <motion.img 
            style={{ y }}
            src={project.image} 
            alt={project.client} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
      
      <div className="w-full md:w-2/5">
        <motion.span 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-brand-red text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] mb-4 md:mb-6 block"
        >
          {project.category}
        </motion.span>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 tracking-tight">{project.client}</h3>
        <p className="text-white/40 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed mb-8 md:mb-10">
          {project.project}
        </p>
        <button className="group flex items-center gap-4 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">
          Подробнее о проекте
          <div className="w-6 md:w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-brand-red transition-all" />
        </button>
      </div>
    </motion.div>
  );
};

export const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-brand-black noise-overlay">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-8"
          >
            <div className="w-12 h-px bg-brand-red" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Избранные кейсы</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-none">
            ПОРТФОЛИО <br />
            <span className="text-white/20 italic">ЭКСКЛЮЗИВА</span>
          </h2>
        </div>

        <div className="space-y-24 md:space-y-48">
          {projects.map((p, idx) => (
            <div key={p.client}>
              <ProjectCard project={p} index={idx} />
            </div>
          ))}
        </div>

        {/* Large Visual Block / Gallery */}
        <div className="mt-32 md:mt-48">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square portfolio-card overflow-hidden group cursor-pointer"
              >
                <img 
                  src={`https://picsum.photos/seed/gallery-${i}/600/600`} 
                  alt="Gallery item" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button className="px-12 py-5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500">
              Смотреть всю галерею
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
