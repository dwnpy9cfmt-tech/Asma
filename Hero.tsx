
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-zen-ivory">
      {/* Background Decorative Element with slow animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] bg-zen-beige rounded-full opacity-40 blur-[120px] -z-10 animate-slow-zoom"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-10 animate-reveal-up">
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start space-x-4">
               <div className="w-8 h-px bg-zen-gold"></div>
               <h2 className="text-sm uppercase tracking-[0.4em] text-zen-taupe font-semibold">Vision Artistique</h2>
            </div>
            <h1 className="text-7xl md:text-9xl font-serif text-zen-stone leading-tight italic">
              Asmae <br /> <span className="pl-0 lg:pl-20 text-zen-gold">Laaroubi</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-zen-stone/70 max-w-lg font-light leading-relaxed italic border-l-2 border-transparent lg:border-zen-gold/20 lg:pl-8">
            L'expression du féminin sacré, sculptée dans la matière et sublimée par l'émotion. Une décennie d'exploration intérieure.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 pt-4">
            <a href="#gallery" className="group relative px-10 py-4 bg-zen-stone text-white text-xs uppercase tracking-widest overflow-hidden">
              <span className="relative z-10">Parcourir la Galerie</span>
              <div className="absolute inset-0 bg-zen-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
            <a href="#art-therapy" className="group px-10 py-4 border border-zen-stone text-zen-stone text-xs uppercase tracking-widest hover:bg-zen-beige transition-all flex items-center space-x-2">
              <span>Art-Thérapie</span>
              <div className="w-4 h-px bg-zen-stone group-hover:w-8 transition-all duration-500"></div>
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="relative w-full max-w-lg group">
            {/* Double Frame Effect for Hero Image */}
            <div className="absolute inset-0 border border-zen-gold/30 translate-x-6 translate-y-6 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-1000"></div>
            <div className="absolute inset-0 border border-zen-stone/10 translate-x-12 translate-y-12 -z-20 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-1000 delay-100"></div>
            
            <div className="relative overflow-hidden bg-zen-beige p-4 shadow-2xl">
              <img 
                src="https://embarrassing-cyan-tfezcpihlt.edgeone.app/IMG_4841.jpeg" 
                alt="Portrait artistique" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zen-stone/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Luxury Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-50">
        <span className="text-[9px] uppercase tracking-[0.5em] vertical-text transform rotate-90 mb-8">Découvrir</span>
        <div className="w-px h-16 bg-gradient-to-b from-zen-gold to-transparent animate-bounce"></div>
      </div>
    </div>
  );
};

export default Hero;
