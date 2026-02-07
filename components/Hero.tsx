import React, { useState, useEffect } from 'react';
import { ARTWORKS } from '../constants';

const Hero: React.FC = () => {
  const heroPortrait = "https://embarrassing-cyan-tfezcpihlt.edgeone.app/IMG_4841.jpeg";
  const slideshowImages = [heroPortrait, ...ARTWORKS.map(art => art.imageUrl)];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slideshowImages.length]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-start lg:items-center justify-center pt-28 overflow-hidden bg-zen-ivory">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-zen-beige rounded-full opacity-30 blur-[150px] -z-10 animate-slow-zoom"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* 🔹 TEXT */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-12 relative z-30">
          <div className="space-y-4 animate-blur-in">
            <div className="flex items-center justify-center lg:justify-start space-x-6">
              <div className="w-12 h-px bg-zen-gold"></div>
              <h2 className="text-[11px] uppercase tracking-[0.5em] text-zen-taupe font-bold">
                Artiste & Thérapeute
              </h2>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-serif text-zen-stone leading-[0.9] italic">
              Asmae <br />
              <span className="pl-0 lg:pl-24 text-zen-gold drop-shadow-sm">
                Laaroubi
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-zen-stone/60 max-w-lg font-light leading-relaxed italic border-l-2 border-zen-gold/20 lg:pl-10 animate-reveal-up">
            "Chaque toile est un souffle, chaque sculpture est une mémoire du corps."
            <br />
            <span className="text-sm uppercase tracking-widest text-zen-gold mt-4 block">
              Basée à Marrakech
            </span>
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 pt-6 animate-reveal-up">
            <a
              href="#gallery"
              onClick={(e) => scrollToSection(e, 'gallery')}
              className="group relative px-12 py-5 bg-zen-stone text-white text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-all hover:shadow-2xl"
            >
              <span className="relative z-10">La Collection</span>
              <div className="absolute inset-0 bg-zen-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
            </a>

            <a
              href="#art-therapy"
              onClick={(e) => scrollToSection(e, 'art-therapy')}
              className="group px-12 py-5 border border-zen-stone/30 text-zen-stone text-[10px] uppercase tracking-[0.3em] hover:bg-zen-beige transition-all flex items-center space-x-3"
            >
              <span>Consultation</span>
              <div className="w-6 h-px bg-zen-stone group-hover:w-12 transition-all duration-700 ease-out"></div>
            </a>
          </div>
        </div>

        {/* 🔹 IMAGE */}
        <div className="order-1 lg:order-2 flex justify-center animate-blur-in relative z-10">
          <div className="relative w-full max-w-md group">

            <div className="absolute inset-0 border border-zen-gold/20 translate-x-6 translate-y-6 -z-10"></div>
            <div className="absolute inset-0 border border-zen-stone/5 translate-x-12 translate-y-12 -z-20"></div>

            <div className="relative overflow-hidden bg-white p-5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] aspect-[3/4] max-h-[70vh]">
              {slideshowImages.map((src, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-5 transition-opacity duration-[2000ms] ${
                    currentImageIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className={`w-full h-full object-cover grayscale transition-transform duration-[8s] ${
                      currentImageIndex === idx ? 'scale-110' : 'scale-100'
                    }`}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
