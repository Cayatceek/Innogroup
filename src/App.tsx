/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Trust } from './components/Trust';
import { Portfolio } from './components/Portfolio';
import { Categories } from './components/Categories';
import { Materials } from './components/Materials';
import { Pricing } from './components/Pricing';
import { Process } from './components/Process';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { MobileCTA } from './components/MobileCTA';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-brand-black min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Trust />
        <Categories />
        <Portfolio />
        <Materials />
        <Pricing />
        <Process />
        <Features />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
      <MobileCTA />
    </div>
  );
}
