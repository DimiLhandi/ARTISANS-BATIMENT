import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12">Contact</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-safety-yellow p-3 text-ink">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Adresse</h4>
                  <p className="text-concrete leading-relaxed">
                    123 Avenue du Béton Brut<br />
                    75000 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-safety-yellow p-3 text-ink">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Téléphone</h4>
                  <p className="text-concrete">01 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-safety-yellow p-3 text-ink">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Email</h4>
                  <p className="text-concrete">contact@jdbat.fr</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-safety-yellow p-3 text-ink">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Horaires</h4>
                  <p className="text-concrete">Lundi - Vendredi : 08:00 - 18:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] bg-mineral-bg relative overflow-hidden"
          >
            {/* Mock Map with architectural lines */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/4 w-[1px] h-full bg-ink" />
              <div className="absolute top-0 left-2/4 w-[1px] h-full bg-ink" />
              <div className="absolute top-0 left-3/4 w-[1px] h-full bg-ink" />
              <div className="absolute top-1/4 left-0 w-full h-[1px] bg-ink" />
              <div className="absolute top-2/4 left-0 w-full h-[1px] bg-ink" />
              <div className="absolute top-3/4 left-0 w-full h-[1px] bg-ink" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-4 h-4 bg-safety-yellow animate-ping absolute inset-0" />
                <div className="w-4 h-4 bg-safety-yellow relative z-10" />
              </div>
              <div className="ml-4 bg-white p-4 shadow-lg border-l-4 border-safety-yellow">
                <p className="font-bold uppercase text-xs tracking-widest">JD.BAT Siège</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
