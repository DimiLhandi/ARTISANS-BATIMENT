import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    { title: "Villa Moderne", category: "Construction", img: "https://picsum.photos/seed/p1/800/800" },
    { title: "Rénovation Loft", category: "Rénovation", img: "https://picsum.photos/seed/p2/800/800" },
    { title: "Extension Bois", category: "Gros Œuvre", img: "https://picsum.photos/seed/p3/800/800" },
    { title: "Maison Traditionnelle", category: "Maçonnerie", img: "https://picsum.photos/seed/p4/800/800" },
    { title: "Aménagement Bureau", category: "Intérieur", img: "https://picsum.photos/seed/p5/800/800" },
    { title: "Façade Béton", category: "Finitions", img: "https://picsum.photos/seed/p6/800/800" },
    { title: "Piscine & Terrasse", category: "Extérieur", img: "https://picsum.photos/seed/p7/800/800" },
    { title: "Garage Structuré", category: "Gros Œuvre", img: "https://picsum.photos/seed/p8/800/800" },
    { title: "Appartement Haussmann", category: "Rénovation", img: "https://picsum.photos/seed/p9/800/800" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-16 text-center">Réalisations</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(project.img)}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                <span className="text-safety-yellow text-xs font-bold uppercase tracking-widest mb-2">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-bold uppercase tracking-tighter">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center p-4 md:p-12"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-safety-yellow transition-colors">
            <X size={40} />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImage}
            alt="Full view"
            className="max-w-full max-h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </section>
  );
}
