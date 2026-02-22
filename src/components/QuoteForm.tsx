import { motion } from 'motion/react';

export default function QuoteForm() {
  return (
    <section id="devis" className="py-24 bg-mineral-bg">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-16 shadow-xl"
          style={{ borderRadius: 0 }}
        >
          <div className="text-center mb-12">
            <h2 className="mb-4">Demande de Devis</h2>
            <p className="text-concrete">
              Décrivez votre projet et recevez une estimation précise sous 48h.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-ink">Nom complet</label>
                <input type="text" className="input-field" placeholder="Jean Dupont" required />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-ink">Email</label>
                <input type="email" className="input-field" placeholder="jean@exemple.com" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-ink">Téléphone</label>
                <input type="tel" className="input-field" placeholder="06 00 00 00 00" required />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-ink">Type de travaux</label>
                <select className="input-field appearance-none">
                  <option>Maçonnerie</option>
                  <option>Rénovation</option>
                  <option>Gros œuvre</option>
                  <option>Autre</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-ink">Budget estimé (€)</label>
              <input type="number" className="input-field" placeholder="Ex: 15000" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-ink">Description du projet</label>
              <textarea className="input-field h-32 resize-none" placeholder="Détaillez vos besoins..."></textarea>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
              <div className="text-concrete text-xs space-y-1">
                <p>• Réponse rapide garantie</p>
                <p>• Devis gratuit & sans engagement</p>
              </div>
              <button type="submit" className="btn-primary w-full md:w-auto px-12">
                ENVOYER LA DEMANDE
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
