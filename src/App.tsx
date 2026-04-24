import Hero from './components/sections/Hero';
import Competencies from './components/sections/Competencies';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen grid-bg">
      <Hero />
      <Competencies />
      <Projects />
      <Contact />
      
      <footer className="py-12 border-t border-white/10 text-center">
        <p className="mono text-[10px] uppercase opacity-40 tracking-[0.3em]">
          Kharisov Portfolio &copy; {new Date().getFullYear()} • Digital Architect
        </p>
      </footer>

      {/* Background Decorative Elements */}
      <div className="fixed bottom-0 right-0 w-64 h-64 bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="fixed top-0 left-0 w-96 h-96 bg-secondary/5 blur-[150px] pointer-events-none" />
    </div>
  );
}
