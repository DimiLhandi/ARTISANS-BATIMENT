import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-concrete/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold text-ink tracking-tighter uppercase">
          JD<span className="text-safety-yellow">.</span>BAT
        </div>

        <div className="text-concrete text-xs uppercase tracking-widest">
          © 2026 Jean Dupont Bâtiment. Tous droits réservés.
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-concrete hover:text-safety-yellow transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-concrete hover:text-safety-yellow transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-concrete hover:text-safety-yellow transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
