import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navItems = [
    { label: 'Accueil', id: 'home' },
    { label: 'Galerie', id: 'gallery' },
    { label: 'À Propos', id: 'about' },
    { label: 'Art-Thérapie', id: 'art-therapy' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
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
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      scrolled ? 'bg-zen-ivory/95 backdrop-blur-md h-16 shadow-sm border-b border-zen-beige' : 'bg-transparent h-24'
    }`}>
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className={`text-2xl font-serif tracking-widest text-zen-stone transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}
        >
          ASMAE <span className="italic font-light opacity-60">LAAROUBI</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`group relative text-[10px] uppercase tracking-[0.3em] transition-colors ${
                activeSection === item.id ? 'text-zen-gold font-bold' : 'text-zen-stone/70 hover:text-zen-stone'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-zen-gold transition-all duration-500 ${
                activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5 w-6 cursor-pointer focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          <div className={`h-0.5 w-full bg-zen-stone transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-2 bg-zen-gold' : ''}`}></div>
          <div className={`h-0.5 w-full bg-zen-stone transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`h-0.5 w-full bg-zen-stone transition-all duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-zen-gold' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-zen-ivory z-40 transition-all duration-700 md:hidden ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, idx) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-2xl uppercase tracking-[0.3em] font-serif italic transition-all duration-700 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${
                activeSection === item.id ? 'text-zen-gold' : 'text-zen-stone/70'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;