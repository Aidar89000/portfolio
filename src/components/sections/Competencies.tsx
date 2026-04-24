import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export default function Competencies() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="mono text-sm uppercase tracking-[0.3em] text-accent mb-4 block">Our_Expertise</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white">
          Услуги
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {portfolioData.competencies.map((comp, idx) => {
          const Icon = (LucideIcons as any)[comp.icon];
          return (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 card-glass flex flex-col h-full hover:bg-white/[0.04] ${
                comp.large ? "lg:col-span-1 lg:row-span-2" : "lg:col-span-2"
              }`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-accent">
                  {Icon && <Icon size={20} strokeWidth={1} />}
                </div>
                <h3 className="text-lg font-bold font-mono uppercase tracking-wider text-white">
                  {comp.title}
                </h3>
              </div>
              
              <ul className="space-y-4 mt-auto">
                {comp.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 group">
                    <span className="mt-1.5 w-1 h-1 bg-accent/30 group-hover:bg-accent transition-colors shrink-0" />
                    <span className="text-base font-light text-[#E0E0E0]/80 leading-relaxed italic">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
