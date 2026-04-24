import { motion } from 'motion/react';
import { portfolioData } from '../../data/portfolio';
import { CaseStudy } from '../../types';

export default function Projects() {
  return (
    <section className="py-24 space-y-12">
      {portfolioData.cases.map((project, idx) => (
        <CaseCard key={project.id} item={project} index={idx} />
      ))}
    </section>
  );
}

function CaseCard({ item, index }: { item: CaseStudy; index: number }) {
  return (
    <div className="px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="card-glass p-8 md:p-12 rounded-sm relative flex flex-col lg:flex-row gap-16 items-stretch border-l-4"
        style={{ borderLeftColor: item.accentColor }}
      >
        {/* Mockup side */}
        <div className="flex-1 w-full relative min-h-[400px] flex items-center justify-center bg-white/5 rounded-sm p-8 overflow-hidden group">
          <div className="relative w-64 aspect-[9/19.5] bg-black rounded-[2.5rem] border-[4px] border-white/10 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-10 transition-transform group-hover:scale-105 duration-700">
            {item.images[0] && (
              <img 
                src={item.images[0]} 
                alt={`${item.title} primary`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl" />
          </div>
          
          <div className="absolute top-1/2 left-1/2 translate-x-12 translate-y-4 w-56 aspect-[9/19.5] bg-black rounded-[2rem] border-[4px] border-white/5 overflow-hidden shadow-2xl opacity-40 blur-[0.5px] scale-90 hidden md:block group-hover:translate-x-16 transition-transform duration-700">
            {item.images[1] && (
              <img 
                src={item.images[1]} 
                alt={`${item.title} secondary`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}
          </div>
          
          <div className="absolute top-6 left-6 mono text-[10px] opacity-20 tracking-widest uppercase">
            Product_Node_0{index + 1}
          </div>
        </div>

        {/* Info side */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-8">
              <span className="mono text-xs px-2 py-1 bg-white/5 uppercase tracking-[0.2em] opacity-80">CASE_0{index + 1}</span>
              <h3 className="text-4xl md:text-5xl serif-italic text-white">
                {item.title}
              </h3>
            </div>

            <p className="text-2xl font-light text-[#E0E0E0]/80 leading-relaxed italic mb-8">
              {item.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
               {item.features.map((f: string) => (
                 <div key={f} className="p-4 bg-white/[0.03] border border-white/5 rounded-sm">
                   <div className="mono text-[10px] uppercase mb-1 tracking-widest" style={{ color: item.accentColor }}>{f.split(':')[0]}</div>
                   <div className="text-sm font-light opacity-80">{f.split(':')[1]}</div>
                 </div>
               ))}
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="mono text-xs uppercase opacity-70 mb-4 tracking-widest font-bold">Contributions</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm font-light opacity-80">
                {item.role.map((line: string, i: number) => (
                  <div key={i} className="flex items-start gap-2">
                    <span style={{ color: item.accentColor }}>•</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-4 text-white/5">
             <div className="flex-1 h-[1px] bg-current" />
             <span className="mono text-[9px] uppercase tracking-[0.4em] leading-none shrink-0 font-bold italic">Private Data Protection Applied</span>
             <div className="w-12 h-[1px] bg-current" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
