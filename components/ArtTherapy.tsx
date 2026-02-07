import React, { useState } from 'react';

const ArtTherapy: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const monthName = "Mai 2024";

  const testimonials = [
    {
      text: "Une expérience transformatrice. Asmae m'a aidée à poser des couleurs sur des mots que je n'osais plus prononcer.",
      author: "Sarah L.",
      location: "Retraite Marrakech"
    },
    {
      text: "Le travail sur l'argile a été une véritable libération physique. Un accompagnement d'une douceur rare.",
      author: "Marc D.",
      location: "Séance Individuelle"
    },
    {
      text: "Bien plus qu'une thérapie, c'est une reconnexion profonde avec sa propre lumière intérieure. Merci.",
      author: "Elena R.",
      location: "Atelier Créatif"
    }
  ];

  const handleConfirm = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      alert(`Votre demande pour le ${selectedDate} ${monthName} à Marrakech a été transmise à Asmae. Vous recevrez une confirmation par email.`);
      setShowCalendar(false);
      setIsSubmitting(false);
      setSelectedDate(null);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-6 text-center reveal">
      <div className="max-w-5xl mx-auto space-y-20">
        <div className="space-y-8">
          <h2 className="text-[11px] uppercase tracking-[0.7em] text-zen-gold font-bold">Thérapie par le Geste</h2>
          <h3 className="text-6xl md:text-9xl font-serif text-zen-stone italic leading-[0.9]">L'Art-Thérapie</h3>
          <p className="text-zen-taupe text-sm uppercase tracking-[0.4em] font-light">Séances individuelles • Retraites à Marrakech</p>
        </div>
        
        <blockquote className="text-3xl md:text-5xl font-serif leading-[1.3] text-zen-stone/70 italic max-w-3xl mx-auto relative px-12">
          <span className="absolute top-0 left-0 text-7xl text-zen-gold/20">"</span>
          Donner une forme au silence, un visage à l'indicible pour libérer l'essence de l'être.
          <span className="absolute bottom-0 right-0 text-7xl text-zen-gold/20 rotate-180">"</span>
        </blockquote>

        <div className="grid md:grid-cols-3 gap-10 mt-24">
          {[
            { title: 'Introspection', desc: 'Une plongée méditative pour dénouer les tensions émotionnelles par le dessin intuitif.' },
            { title: 'Libération', desc: 'L\'argile et la matière comme vecteurs de décharge émotionnelle et de transformation.' },
            { title: 'Harmonie', desc: 'Recomposition de soi à travers la couleur et la géométrie sacrée des formes.' }
          ].map((item, i) => (
            <div key={i} className="group p-12 bg-white border border-zen-beige hover:border-zen-gold/20 transition-all duration-1000 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]">
              <span className="text-[10px] text-zen-gold font-bold uppercase tracking-widest block mb-6">Processus 0{i+1}</span>
              <h4 className="font-serif text-3xl italic text-zen-stone mb-6 group-hover:text-zen-gold transition-colors duration-700">{item.title}</h4>
              <p className="text-sm font-light leading-relaxed text-zen-taupe opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Témoignages / Échos de l'âme */}
        <div className="pt-32 space-y-16">
          <div className="flex flex-col items-center space-y-4">
             <div className="w-12 h-px bg-zen-gold/40"></div>
             <h4 className="text-[11px] uppercase tracking-[0.5em] text-zen-taupe font-medium">Échos de l'âme</h4>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-6">
                <div className="text-zen-gold/30 text-4xl font-serif">“</div>
                <p className="text-lg font-serif italic text-zen-stone/80 leading-relaxed px-4">
                  {t.text}
                </p>
                <div className="pt-4 flex flex-col items-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zen-stone">{t.author}</span>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-zen-gold mt-1">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-16">
          <button 
            onClick={() => setShowCalendar(true)}
            className="group relative px-16 py-6 bg-zen-stone text-white text-[10px] uppercase tracking-[0.5em] overflow-hidden shadow-2xl transition-all active:scale-95"
          >
            <span className="relative z-10">Réserver une consultation</span>
            <div className="absolute inset-0 bg-zen-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 cubic-bezier(0.23, 1, 0.32, 1)"></div>
          </button>
        </div>
      </div>

      {/* Modern Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fade-in">
          <div className="absolute inset-0 bg-zen-stone/60 backdrop-blur-xl" onClick={() => setShowCalendar(false)}></div>
          
          <div className="relative bg-zen-ivory max-w-lg w-full p-10 md:p-14 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.6)] border border-white/20 overflow-hidden reveal active">
            <button 
              onClick={() => setShowCalendar(false)}
              className="absolute top-8 right-8 text-zen-stone hover:text-zen-gold transition-colors p-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-10">
              <div className="text-center space-y-3">
                <h4 className="font-serif italic text-4xl text-zen-stone">Votre Instant Privé</h4>
                <p className="text-[10px] uppercase tracking-[0.4em] text-zen-gold">Disponibilités {monthName} — Marrakech</p>
              </div>

              <div className="grid grid-cols-7 gap-3">
                {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(day => (
                  <div key={day} className="text-[10px] font-bold text-zen-taupe/40 pb-4">{day}</div>
                ))}
                {days.map(day => (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(day)}
                    className={`aspect-square flex items-center justify-center text-xs transition-all duration-500 rounded-full
                      ${selectedDate === day 
                        ? 'bg-zen-stone text-white scale-110 shadow-xl' 
                        : 'text-zen-stone hover:bg-zen-beige hover:text-zen-gold'
                      }
                      ${day % 7 === 0 ? 'opacity-20 pointer-events-none' : ''}
                    `}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div className="space-y-6 pt-6">
                {selectedDate ? (
                  <div className="animate-reveal-up text-center">
                    <p className="text-sm font-light italic text-zen-taupe bg-zen-beige py-3 rounded-full">
                      Séance envisagée le <span className="text-zen-stone font-bold">{selectedDate} {monthName}</span>
                    </p>
                    <button 
                      onClick={handleConfirm}
                      disabled={isSubmitting}
                      className={`mt-8 w-full py-5 bg-zen-gold text-white text-[10px] uppercase tracking-[0.3em] transition-all shadow-lg hover:shadow-2xl
                        ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-zen-stone'}
                      `}
                    >
                      {isSubmitting ? 'Transmission...' : 'Confirmer la Demande'}
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-6 border-t border-zen-beige mt-4">
                    <p className="text-[10px] uppercase tracking-widest text-zen-taupe/60 italic font-light">Sélectionnez une date pour continuer</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-zen-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-zen-stone/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtTherapy;