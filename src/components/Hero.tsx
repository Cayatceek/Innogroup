import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, MousePointer2 } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Floating Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ opacity }}
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 mb-8 md:mb-12"
              >
                <div className="w-8 md:w-12 h-px bg-brand-red" />
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Premium Awards Studio</span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold tracking-tighter leading-[0.9] md:leading-[0.85] mb-8 md:mb-12 text-premium">
                НАГРАДЫ <br />
                <span className="text-brand-red italic">СТАТУСА</span> <br />
                И ПРИЗНАНИЯ
              </h1>
              
              <p className="text-base md:text-xl lg:text-2xl text-white/40 font-light leading-relaxed max-w-2xl mb-12 md:mb-16">
                Создаем эксклюзивную наградную продукцию, которая становится символом ваших достижений и ценностей бренда.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 md:px-12 py-4 md:py-6 bg-white text-black rounded-full font-bold uppercase tracking-widest text-[9px] md:text-[10px] overflow-hidden transition-all duration-500 hover:bg-brand-red hover:text-white light-sweep"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Обсудить проект
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>
                
                <button className="group flex items-center gap-4 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">
                  Смотреть кейсы
                  <div className="w-6 md:w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-brand-red transition-all" />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 relative hidden lg:block">
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] luxury-border rounded-sm overflow-hidden group shadow-2xl shadow-brand-red/5"
            >
              <img 
                src="https://picsum.photos/seed/award-hero/800/1200" 
                alt="Premium Award" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60" />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8 p-6 glass rounded-sm"
              >
                <div className="text-[8px] font-bold uppercase tracking-widest text-brand-red mb-2">Exclusive Edition</div>
                <div className="text-lg font-display font-bold">Crystal Peak 2026</div>
              </motion.div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 border-t border-r border-brand-red/20" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 border-b border-l border-brand-red/20" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-white/20">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 md:h-12 bg-gradient-to-b from-brand-red to-transparent" 
        />
      </motion.div>
    </section>
  );
};
