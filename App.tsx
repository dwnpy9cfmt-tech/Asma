
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Bio from './components/Bio';
import ArtTherapy from './components/ArtTherapy';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'gallery', 'about', 'art-therapy', 'contact'];
      const scrollPosition = window.scrollY + 120; // Offset pour la détection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-zen-clay selection:text-white bg-zen-ivory">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home" className="scroll-mt-20">
          <Hero />
        </section>

        <section id="gallery" className="py-32 bg-zen-beige/50 scroll-mt-20">
          <Gallery />
        </section>

        <section id="about" className="py-32 scroll-mt-20">
          <Bio />
        </section>

        <section id="art-therapy" className="py-32 bg-zen-beige/30 scroll-mt-20">
          <ArtTherapy />
        </section>

        <section id="contact" className="py-32 scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-serif text-center mb-20 text-zen-stone italic">Contact</h2>
              
              <div className="grid md:grid-cols-2 gap-20">
                <div className="space-y-10">
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-zen-taupe">L'Atelier</p>
                    <p className="text-xl font-light leading-relaxed text-zen-stone italic">
                      "Chaque rencontre est une occasion d'explorer un nouveau paysage émotionnel."
                    </p>
                  </div>
                  
                  <div className="space-y-6 font-light text-zen-stone/80 text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-px bg-zen-clay"></div>
                      <p>Marrakech, Maroc</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-px bg-zen-clay"></div>
                      <p>contact@asmaelaaroubi.com</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-px bg-zen-clay"></div>
                      <p>+212636589124</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  {formStatus === 'sent' ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 animate-fadeIn">
                      <div className="w-16 h-16 rounded-full bg-zen-clay/10 flex items-center justify-center text-zen-clay">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <h3 className="font-serif text-2xl italic text-zen-stone">Message envoyé</h3>
                      <p className="text-xs uppercase tracking-widest text-zen-taupe">Merci pour votre intérêt.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className={`space-y-6 transition-opacity duration-500 ${formStatus === 'sending' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase tracking-widest text-zen-taupe px-1">Nom</label>
                          <input required type="text" className="w-full bg-transparent border-b border-zen-taupe/20 py-3 px-1 focus:border-zen-clay outline-none transition-colors font-light" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase tracking-widest text-zen-taupe px-1">Email</label>
                          <input required type="email" className="w-full bg-transparent border-b border-zen-taupe/20 py-3 px-1 focus:border-zen-clay outline-none transition-colors font-light" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-zen-taupe px-1">Sujet</label>
                        <select className="w-full bg-transparent border-b border-zen-taupe/20 py-3 px-1 focus:border-zen-clay outline-none transition-colors font-light cursor-pointer">
                          <option>Information Œuvre</option>
                          <option>Séance d'Art-Thérapie</option>
                          <option>Collaboration</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-zen-taupe px-1">Message</label>
                        <textarea required rows={4} className="w-full bg-transparent border-b border-zen-taupe/20 py-3 px-1 focus:border-zen-clay outline-none transition-colors resize-none font-light"></textarea>
                      </div>
                      <button 
                        type="submit" 
                        disabled={formStatus === 'sending'}
                        className="group flex items-center space-x-4 pt-4"
                      >
                        <span className="text-xs uppercase tracking-[0.4em] text-zen-stone group-hover:text-zen-clay transition-colors">
                          {formStatus === 'sending' ? 'Envoi...' : 'Envoyer le message'}
                        </span>
                        <div className="w-12 h-px bg-zen-stone group-hover:w-20 group-hover:bg-zen-clay transition-all duration-500"></div>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
