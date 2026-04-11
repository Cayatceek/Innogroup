import { motion } from 'motion/react';
import { Logo } from './Logo';
import { Phone, Send, Instagram, Facebook, Mail, Layers } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="section-padding bg-brand-black pb-12 border-t border-white/[0.05]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 mb-24 md:mb-48">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tighter leading-[0.85] mb-12 md:mb-16 text-premium uppercase">
                МАТЕРИАЛИЗАЦИЯ <br />
                <span className="text-brand-red">ВАШИХ</span> <br />
                ИДЕЙ
              </h2>
              
              <div className="flex flex-wrap gap-8 md:gap-12">
                <a href="tel:+998998868886" className="group">
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-2 block group-hover:text-brand-red transition-colors">Телефон</span>
                  <span className="text-xl md:text-2xl font-display font-bold">+998 99 886 88 86</span>
                </a>
                <a href="https://t.me/innogroupuz" className="group">
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-2 block group-hover:text-brand-red transition-colors">Telegram</span>
                  <span className="text-xl md:text-2xl font-display font-bold">@innogroupuz</span>
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-red" />
              <h3 className="text-xl md:text-2xl font-display font-bold mb-6 md:mb-8 tracking-tight">Обсудить проект</h3>
              <form className="space-y-6 md:space-y-8" action="https://t.me/innogroupuz" target="_blank">
                <div className="space-y-4">
                  <input type="text" required className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-sm focus:outline-none focus:border-brand-red transition-colors placeholder:text-white/10" placeholder="Ваше имя" />
                  <input type="tel" required className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-sm focus:outline-none focus:border-brand-red transition-colors placeholder:text-white/10" placeholder="Телефон" />
                </div>
                <button type="submit" className="w-full bg-white text-black py-4 md:py-5 rounded-full font-bold uppercase tracking-widest text-[9px] md:text-[10px] hover:bg-brand-red hover:text-white transition-all duration-500 light-sweep">
                  Отправить в Telegram
                </button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-white/5 text-center">
                <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-brand-red transition-colors flex items-center justify-center gap-2">
                  <Layers className="w-3 h-3" />
                  Скачать каталог PDF (12MB)
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pt-12 border-t border-white/[0.05]">
          <div className="space-y-8">
            <Logo className="scale-110 md:scale-125 origin-left" />
            <div className="flex gap-6 md:gap-8">
              <a href="#" className="text-white/20 hover:text-brand-red transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-white/20 hover:text-brand-red transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-white/20 hover:text-brand-red transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="text-left md:text-right">
            <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/10 leading-loose">
              INNOGROUP Premium Awards Studio <br />
              Tashkent, Uzbekistan • Since 2015 <br />
              All rights reserved © 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
