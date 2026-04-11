import { motion, AnimatePresence } from 'motion/react';
import { Send, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export const MobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:hidden"
        >
          <div className="glass rounded-full p-2 flex gap-2 shadow-2xl shadow-black">
            <a 
              href="https://t.me/innogroupuz" 
              target="_blank"
              className="flex-1 bg-brand-red text-white flex items-center justify-center gap-2 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] light-sweep"
            >
              <Send className="w-4 h-4" />
              Telegram
            </a>
            <a 
              href="tel:+998998868886"
              className="flex-1 bg-white text-black flex items-center justify-center gap-2 py-4 rounded-full font-bold uppercase tracking-widest text-[10px]"
            >
              <Phone className="w-4 h-4" />
              Позвонить
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
