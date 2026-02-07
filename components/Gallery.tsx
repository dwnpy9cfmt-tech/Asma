import React, { useState, useCallback, useRef, useEffect } from 'react';
import { ARTWORKS } from '../constants';
import { Artwork } from '../types';

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0, bgX: 0, bgY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedArt(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % ARTWORKS.length);
      setIsAnimating(false);
    }, 800);
  }, [isAnimating]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + ARTWORKS.length) % ARTWORKS.length);
      setIsAnimating(false);
    }, 800);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;
    setMagnifierPos({ x, y, bgX, bgY });
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  const currentArt = ARTWORKS[currentIndex];

  return (
    <div className="container mx-auto px-6 reveal">
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-sm uppercase tracking-[0.6em] text-zen-taupe font-medium">Exposition de prestige</h2>
        <div className="flex items-center justify-center space-x-6">
          <div className="w-12 h-px bg-zen-gold"></div>
          <h3 className="text-5xl md:text-7xl font-serif text-zen-stone italic">Collection Privée</h3>
          <div className="w-12 h-px bg-zen-gold"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-8 relative flex justify-center">
            <div className={`transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${isAnimating ? 'opacity-0 translate-y-8 scale-95 blur-sm' : 'opacity-100 translate-y-0 scale-100 blur-0'}`}>
              
              <div 
                ref={containerRef}
                className="antique-frame max-w-full cursor-none"
                onMouseEnter={() => setShowMagnifier(true)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
              >
                <div className="relative bg-[#ece8e0] overflow-hidden flex items-center justify-center shadow-inner group" style={{ minWidth: '300px', minHeight: '400px' }}>
                  <img 
                    src={currentArt.imageUrl} 
                    alt={currentArt.title} 
                    className="max-w-full max-h-[70vh] object-contain shadow-2xl transition-transform duration-[5s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 pointer-events-none glass-reflection opacity-60"></div>
                  
                  {showMagnifier && (
                    <div 
                      className="absolute pointer-events-none border-4 border-white/30 shadow-[0_0_50px_rgba(0,0,0,0.3)] rounded-full z-30 overflow-hidden bg-no-repeat"
                      style={{
                        width: '200px',
                        height: '200px',
                        left: `${magnifierPos.x - 100}px`,
                        top: `${magnifierPos.y - 100}px`,
                        backgroundImage: `url(${currentArt.imageUrl})`,
                        backgroundSize: '400% 400%',
                        backgroundPosition: `${magnifierPos.bgX}% ${magnifierPos.bgY}%`,
                      }}
                    >
                      <div className="absolute inset-0 bg-white/5 shadow-inner"></div>
                    </div>
                  )}

                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 border border-black/5 text-[9px] uppercase tracking-widest text-black/60 shadow-sm opacity-100 transition-opacity">
                    Survoler pour zoomer
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 left-0 -translate-x-1/2 flex items-center">
              <button onClick={prevSlide} className="w-14 h-14 rounded-full bg-white text-zen-stone border border-zen-beige shadow-2xl hover:bg-zen-gold hover:text-white transition-all transform hover:-translate-x-1 active:scale-95 flex items-center justify-center z-40">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" /></svg>
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 translate-x-1/2 flex items-center">
              <button onClick={nextSlide} className="w-14 h-14 rounded-full bg-white text-zen-stone border border-zen-beige shadow-2xl hover:bg-zen-gold hover:text-white transition-all transform hover:translate-x-1 active:scale-95 flex items-center justify-center z-40">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
            <div className={`transition-all duration-1000 delay-200 ${isAnimating ? 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0'}`}>
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-[0.5em] text-zen-gold font-semibold">{currentArt.category}</span>
                <h4 className="text-5xl md:text-6xl font-serif text-zen-stone leading-tight italic">{currentArt.title}</h4>
                <div className="flex items-center space-x-4">
                  <span className="text-sm italic text-zen-taupe/80">Marrakech, {currentArt.year}</span>
                  <div className="h-px flex-1 bg-zen-gold/20"></div>
                </div>
              </div>
              
              <div className="mt-8 space-y-6">
                <p className="text-zen-stone/80 font-light leading-relaxed text-lg">
                  {currentArt.description || "Une œuvre majeure explorant l'équilibre délicat entre la forme et l'émotion pure."}
                </p>
                {currentArt.dimensions && (
                  <div className="inline-block px-4 py-2 bg-zen-beige text-[10px] uppercase tracking-[0.2em] text-zen-taupe border-l-2 border-zen-gold">
                    Dimensions : {currentArt.dimensions}
                  </div>
                )}
              </div>

              <div className="pt-10 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setSelectedArt(currentArt)}
                  className="group relative px-10 py-4 bg-zen-stone text-white overflow-hidden text-xs uppercase tracking-widest shadow-lg"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <span>Immersion Totale</span>
                  </span>
                  <div className="absolute inset-0 bg-zen-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
                <button className="px-10 py-4 border border-zen-stone/20 text-zen-stone hover:border-zen-gold hover:text-gold transition-all text-xs uppercase tracking-widest">
                  Demande de Prix
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-10 border-t border-zen-beige">
              <span className="text-[10px] text-zen-taupe font-serif italic">0{currentIndex + 1}</span>
              <div className="flex-1 flex space-x-2">
                {ARTWORKS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => { if(!isAnimating) { setIsAnimating(true); setTimeout(() => { setCurrentIndex(idx); setIsAnimating(false); }, 800); }}}
                    className={`h-1 transition-all duration-700 ${currentIndex === idx ? 'flex-[3] bg-zen-gold shadow-sm' : 'flex-1 bg-zen-taupe/20 hover:bg-zen-taupe/40'}`}
                  />
                ))}
              </div>
              <span className="text-[10px] text-zen-taupe font-serif italic">0{ARTWORKS.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX CLASSIQUE POUR TOUTES LES ŒUVRES */}
      {selectedArt && (
        <div 
          className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-0 animate-fade-in cursor-zoom-out"
          onClick={() => setSelectedArt(null)}
        >
          <div className="absolute top-0 left-0 w-full p-8 md:p-12 flex justify-between items-start z-[110]">
             <div className="text-white space-y-1">
                <p className="text-[10px] uppercase tracking-[0.6em] text-zen-gold font-bold">Mode Examen</p>
                <h4 className="text-2xl font-serif italic">{selectedArt.title}</h4>
             </div>
             <button 
                onClick={(e) => { e.stopPropagation(); setSelectedArt(null); }}
                className="group flex items-center space-x-4 text-white hover:text-zen-gold transition-all duration-500"
               >
                 <span className="text-[10px] uppercase tracking-[0.4em] font-medium hidden sm:inline">Quitter l'examen</span>
                 <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-zen-gold group-hover:scale-110 transition-all duration-500">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
                 </div>
               </button>
          </div>

          <div 
            className="w-full h-full flex items-center justify-center overflow-hidden" 
            onClick={e => e.stopPropagation()}
            onMouseMove={(e) => {
              const target = e.currentTarget.firstChild as HTMLImageElement;
              if (target) {
                const x = (e.clientX / window.innerWidth - 0.5) * 40;
                const y = (e.clientY / window.innerHeight - 0.5) * 40;
                target.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
              }
            }}
          >
            <img 
              src={selectedArt.imageUrl} 
              alt={selectedArt.title} 
              className="max-w-[95%] max-h-[90vh] object-contain shadow-[0_0_150px_rgba(0,0,0,0.9)] border border-white/5 transition-transform duration-75 ease-out"
              style={{ transform: 'scale(1.1)' }}
            />
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 text-white/40 text-[10px] uppercase tracking-[0.5em] pointer-events-none text-center">
             <div className="w-px h-12 bg-zen-gold/20 mb-2"></div>
             <span>Glissez pour explorer les détails de la matière</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;