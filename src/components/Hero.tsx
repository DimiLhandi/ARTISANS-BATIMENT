import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-mineral-bg pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6">
            Votre expert <br />
            <span className="text-safety-yellow">du bâtiment</span>
          </h1>
          <p className="text-concrete text-lg max-w-md mb-8 leading-relaxed">
            Construction, rénovation et gros œuvre. Une expertise solide pour des structures durables.
          </p>
          <div className="flex space-x-4">
            <a href="#portfolio" className="btn-primary">
              NOS RÉALISATIONS
            </a>
            <a href="#contact" className="border border-ink px-8 py-4 font-bold uppercase tracking-widest hover:bg-ink hover:text-white transition-all">
              CONTACT
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Minimal 3D-like architectural icon */}
          <div className="relative w-64 h-80 md:w-80 md:h-96">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 border-4 border-concrete opacity-20"
            />
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute inset-4 border-4 border-safety-yellow"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-1/2 h-full bg-concrete/10 backdrop-blur-sm border-r border-concrete/20" />
               <div className="w-1/2 h-2/3 bg-safety-yellow/10 backdrop-blur-sm self-end border-l border-safety-yellow/20" />
            </div>
            {/* Structural lines */}
            <div className="absolute top-0 left-1/2 w-[2px] h-full bg-ink/10 -translate-x-1/2" />
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-ink/10 -translate-y-1/2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
