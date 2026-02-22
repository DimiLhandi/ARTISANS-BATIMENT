import { motion } from 'motion/react';
import { Hammer, Home, Construction, Ruler, PaintBucket, Layout } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Maçonnerie générale",
      desc: "Fondations, murs porteurs, dalles béton et structures maçonnées.",
      icon: <Construction size={32} />,
    },
    {
      title: "Rénovation",
      desc: "Réhabilitation complète de bâtiments anciens et modernisation.",
      icon: <Home size={32} />,
    },
    {
      title: "Gros œuvre",
      desc: "Travaux de structure lourde, extension et surélévation.",
      icon: <Hammer size={32} />,
    },
    {
      title: "Finitions",
      desc: "Enduits, chapes et travaux de second œuvre méticuleux.",
      icon: <PaintBucket size={32} />,
    },
    {
      title: "Aménagement intérieur",
      desc: "Optimisation des espaces, cloisons et isolation.",
      icon: <Layout size={32} />,
    },
    {
      title: "Étude & Conseil",
      desc: "Accompagnement technique et chiffrage précis de vos projets.",
      icon: <Ruler size={32} />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-mineral-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Nos Services</h2>
            <p className="text-concrete max-w-md">
              Une gamme complète de prestations pour répondre à tous vos besoins en construction.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-concrete font-mono text-xs uppercase tracking-widest"
          >
            [ Expertise technique ]
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card group hover:bg-ink hover:text-white transition-all duration-300"
            >
              <div className="text-safety-yellow mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tighter mb-4">{service.title}</h3>
              <p className="text-concrete group-hover:text-white/70 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
