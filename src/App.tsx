import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import SplashScreen from './components/SplashScreen';
import Header, { BackToTop } from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative">
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <QuoteForm />
            <Contact />
          </main>
          <Footer />
          <BackToTop />

          {/* Mobile Sticky CTA */}
          <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-concrete/10 z-30">
            <a href="#devis" className="btn-primary w-full block text-center py-4">
              DEMANDER UN DEVIS
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
