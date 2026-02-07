import React from 'react';
import { BIO_TEXT } from '../constants';

const Bio: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl reveal">
      <div className="grid md:grid-cols-2 gap-24 items-center">
        <div className="relative group">
          {/* Éléments décoratifs en arrière-plan */}
          <div className="absolute -top-12 -left-12 w-48 h-48 border-t border-l border-zen-gold/40 -z-10 transition-transform duration-[1.5s] group-hover:-translate-x-4 group-hover:-translate-y-4"></div>
          
          {/* Conteneur de l'image incliné (Tilted) */}
          <div className="relative p-5 bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] transition-all duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] transform -rotate-3 group-hover:rotate-0 origin-center group-hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.3)]">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img 
                src="https://natural-emerald-x8gssmkq9g.edgeone.app/IMG_4842.jpeg"
                alt="Asmae Laaroubi Marrakech" 
                className="w-full h-full object-cover grayscale transition-all duration-[5s] group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:opacity-0 transition-opacity duration-1000"></div>
            </div>
            <div className="mt-6 flex justify-between items-center px-2">
               <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-zen-gold animate-pulse"></span>
                  <span className="text-[10px] text-zen-taupe font-serif italic tracking-widest">Atelier Souffle d'Orient, Marrakech</span>
               </div>
               <div className="w-12 h-px bg-zen-gold/30"></div>
            </div>
          </div>
          
          <div className="absolute -bottom-12 -right-12 w-72 h-px bg-zen-gold/30"></div>
        </div>
        
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="text-[11px] uppercase tracking-[0.6em] text-zen-gold font-bold">L'Ame du Projet</h2>
            <h3 className="text-6xl md:text-8xl font-serif italic text-zen-stone leading-[0.8]">Cheminement</h3>
            <div className="w-32 h-px bg-zen-gold opacity-40"></div>
          </div>
          
          <div className="space-y-8 relative">
            <p className="text-xl md:text-2xl leading-relaxed text-zen-stone font-light italic text-justify opacity-80 first-letter:text-6xl first-letter:font-serif first-letter:text-zen-gold first-letter:mr-4 first-letter:float-left">
              {BIO_TEXT}
            </p>
          </div>
          
          <div className="pt-10 flex items-center space-x-10">
             <div className="relative">
                <div className="w-32 h-32 rounded-full border border-zen-gold/20 flex items-center justify-center p-2 rotate-6 hover:rotate-0 transition-transform duration-1000 shadow-xl bg-white">
                   <img 
                    src="https://popular-black-ydgdqerc8b.edgeone.app/IMG_4112.jpeg" 
                    className="w-full h-full rounded-full object-cover transition-all duration-700 hover:scale-105" 
                    alt="Signature" 
                   />
                </div>
             </div>
             <div>
                <p className="text-xl tracking-[0.3em] uppercase text-zen-stone font-medium italic">Asmae Laaroubi</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-zen-gold mt-2">Artiste Peintre et Art-Thérapeute</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;