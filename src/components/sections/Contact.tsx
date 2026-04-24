import { motion } from 'motion/react';
import { Send, Mail } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="mono text-sm uppercase tracking-[0.3em] text-accent mb-4 block">Ready_to_Start</span>
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase text-white mb-8">
          Давайте обсудим ваш проект
        </h2>
        <p className="text-2xl text-[#E0E0E0]/70 max-w-2xl font-light leading-relaxed serif-italic">
          Мы поможем выстроить стратегию продукта от идеи до <span className="text-white border-b border-white/20">полноценного релиза</span>.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { num: "01", title: "Анализ и разработка концепции" },
          { num: "02", title: "Проектирование и архитектура" },
          { num: "03", title: "Реализация и интеграция" },
        ].map((item, idx) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 card-glass flex flex-col justify-between min-h-[200px]"
          >
            <h3 className="mono text-sm uppercase tracking-widest text-[#E0E0E0]/90 leading-relaxed font-bold">
              {item.title}
            </h3>
            <span className="mono text-4xl font-black text-white/5">{item.num}</span>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 bg-accent text-bg rounded-sm flex flex-col h-full shadow-[0_20px_50px_rgba(0,255,156,0.15)] group transition-all"
        >
          <div className="flex-1">
            <p className="mono text-xs uppercase tracking-widest opacity-80 mb-2 font-bold text-bg/40">Connect Direct</p>
            <h3 className="text-2xl font-black tracking-tighter uppercase mb-8 text-bg">Contacts</h3>
          </div>
          
          <div className="space-y-4">
            <a 
              href={`mailto:${portfolioData.contacts.email}`}
              className="flex items-center gap-3 bg-bg text-white p-3 rounded-sm hover:-translate-y-1 transition-transform"
            >
              <Mail size={16} className="text-secondary" />
              <span className="mono text-[11px] font-medium truncate shrink-0">{portfolioData.contacts.email}</span>
            </a>
            
            <a 
              href={portfolioData.contacts.telegram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-bg text-white p-3 rounded-sm hover:-translate-y-1 transition-transform"
            >
              <Send size={16} className="text-accent" />
              <span className="mono text-[11px] font-medium tracking-widest uppercase shrink-0">{portfolioData.contacts.telegramHandle}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
