import { motion } from 'motion/react';
import { portfolioData } from '../../data/portfolio';

export default function Hero() {
  const [firstName, lastName] = portfolioData.name.split(' ');

  return (
    <header className="px-6 md:px-12 pt-24 pb-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-4"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-white">
          {firstName}<br />{lastName}
        </h1>
        <p className="mono text-xs uppercase tracking-[0.3em] text-accent mt-6">
          {portfolioData.role}
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-left md:text-right space-y-8"
      >
        <div className="space-y-2">
          <p className="mono text-xs uppercase opacity-70 tracking-widest leading-none">Services</p>
          <p className="text-base font-light">Websites / Telegram Bots / Mini Apps</p>
        </div>
      </motion.div>
    </header>
  );
}
