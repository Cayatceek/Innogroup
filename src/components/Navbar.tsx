import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { cn } from '@/src/lib/utils';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Направления", href: "#categories" },
    { name: "Портфолио", href: "#portfolio" },
    { name: "Процесс", href: "#process" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-16 py-6 md:py-8",
          isScrolled ? "bg-brand-black/80 backdrop-blur-xl py-4 md:py-6 border-b border-white/[0.05]" : "bg-transparent"
        )}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Logo className="scale-100 md:scale-110" />
          
          <div className="hidden md:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-brand-red transition-colors">{link.name}</a>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <a href="tel:+998998868886" className="hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
              +998 99 886 88 86
            </a>
            <a 
              href="https://t.me/innogroupuz" 
              target="_blank"
              className="hidden sm:block bg-white text-black px-6 md:px-8 py-2.5 md:py-3 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all duration-500 light-sweep"
            >
              Обсудить заказ
            </a>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-black flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-24">
              <Logo />
              <button onClick={() => setIsMenuOpen(false)} className="text-white"><X /></button>
            </div>
            
            <div className="flex flex-col gap-12">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-display font-bold tracking-tighter hover:text-brand-red transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-white/10">
              <a href="tel:+998998868886" className="text-2xl font-display font-bold block mb-4">+998 99 886 88 86</a>
              <a href="https://t.me/innogroupuz" className="text-white/40 uppercase tracking-widest text-xs">@innogroupuz</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
