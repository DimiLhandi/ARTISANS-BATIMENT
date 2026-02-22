import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { label: "Années d'expérience", value: "10+" },
    { label: "Intervention locale", value: "100%" },
    { label: "Respect des délais", value: "Garanti" },
    { label: "Sécurité & Conformité", value: "Normes" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://picsum.photos/seed/construction/800/1000"
            alt="Chantier"
            className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            style={{ borderRadius: '2px' }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-safety-yellow hidden md:flex items-center justify-center p-6">
            <p className="text-ink font-bold uppercase tracking-tighter leading-tight text-xl">
              Rigueur & Précision
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="mb-8">Votre Artisan <br /> du Bâtiment</h2>
          <div className="space-y-6 text-concrete leading-relaxed mb-12">
            <p>
              Fort d'une expérience solide sur le terrain, nous accompagnons les particuliers et les professionnels dans leurs projets de construction et de rénovation.
            </p>
            <p>
              Notre approche repose sur une maîtrise technique rigoureuse et le respect strict des normes de sécurité. Chaque chantier est traité avec la même exigence de qualité, du gros œuvre aux finitions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="border-l-2 border-safety-yellow pl-4">
                <div className="text-2xl font-bold text-ink uppercase tracking-tighter">{stat.value}</div>
                <div className="text-xs text-concrete uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
