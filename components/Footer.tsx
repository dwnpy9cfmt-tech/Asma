import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zen-stone py-20 text-zen-beige">
      <div className="container mx-auto px-6 flex flex-col items-center space-y-12">
        <div className="text-4xl font-serif tracking-[0.2em] italic opacity-90">
          Asmae Laaroubi
        </div>
        
        <div className="w-16 h-px bg-zen-gold/30"></div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          <a 
            href="https://www.instagram.com/steps.03?igsh=MTJud3VoaTUyeDV3bA==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] text-zen-beige/60 hover:text-zen-gold transition-all"
          >
            <span>Instagram</span>
            <div className="w-0 h-px bg-zen-gold group-hover:w-8 transition-all duration-500"></div>
          </a>
          <a 
            href="https://www.facebook.com/asmae.laaroubi/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] text-zen-beige/60 hover:text-zen-gold transition-all"
          >
            <span>Facebook</span>
            <div className="w-0 h-px bg-zen-gold group-hover:w-8 transition-all duration-500"></div>
          </a>
          <a 
            href="https://www.instagram.com/steps.03?igsh=MTJud3VoaTUyeDV3bA==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] text-zen-beige/60 hover:text-zen-gold transition-all"
          >
            <span>LinkedIn</span>
            <div className="w-0 h-px bg-zen-gold group-hover:w-8 transition-all duration-500"></div>
          </a>
        </div>

        <div className="space-y-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] opacity-40">Marrakech — Maroc</p>
          <div className="text-[9px] uppercase tracking-[0.2em] opacity-20 font-light">
            &copy; {new Date().getFullYear()} Conception de Prestige • Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;