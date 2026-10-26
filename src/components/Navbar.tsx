import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Shop', target: 'shop' },
    { label: 'Routine', target: 'routine' },
    { label: 'Why Us', target: 'benefits' },
    { label: 'About', target: 'about' },
    { label: 'FAQ', target: 'faq' },
  ];

  const handleNavClick = (target: string) => {
    setMobileMenuOpen(false);
    onNavigate(target);
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#F5F1E8]/95 backdrop-blur-md border-[#101820]/15 shadow-sm' 
          : 'bg-[#F5F1E8] border-[#101820]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo / Wordmark */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820] rounded p-1"
          aria-label={`${BRAND_CONFIG.brandName} - Return to top`}
        >
          <span className="font-extrabold text-xl sm:text-2xl tracking-tighter text-[#101820] block">
            {BRAND_CONFIG.brandName}
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#101820]/60 block -mt-1">
            Men's Skincare
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.target)}
              className="text-sm font-semibold tracking-wide text-[#101820]/80 hover:text-[#101820] transition-colors py-1 border-b-2 border-transparent hover:border-[#101820] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#101820]"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons: Cart Drawer Trigger & Primary CTA */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={onOpenCart}
            aria-label={`Shopping bag containing ${cartCount} items`}
            className="relative p-2 text-[#101820] hover:bg-[#101820]/5 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820]"
          >
            <ShoppingBag className="w-5 h-5" aria-hidden="true" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#101820] text-[#F5F1E8] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#F5F1E8]">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => handleNavClick('shop')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#101820] text-[#F5F1E8] text-sm font-semibold tracking-wide rounded hover:bg-[#101820]/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820] focus-visible:ring-offset-2 active:scale-[0.98]"
          >
            Shop Now
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden p-2 text-[#101820] hover:bg-[#101820]/5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="md:hidden fixed inset-x-0 top-18 bottom-0 bg-[#F5F1E8] border-t border-[#101820]/10 z-50 flex flex-col justify-between p-6 overflow-y-auto"
        >
          <div className="space-y-4 pt-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.target)}
                className="w-full text-left py-3 px-2 text-2xl font-bold tracking-tight text-[#101820] hover:bg-[#101820]/5 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820]"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-[#101820]/10 space-y-4 pb-8">
            <button
              onClick={() => handleNavClick('shop')}
              className="w-full py-4 bg-[#101820] text-[#F5F1E8] text-base font-bold tracking-wide rounded hover:bg-[#101820]/90 transition-all text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820]"
            >
              Shop the Collection
            </button>
            <p className="text-xs text-[#101820]/60 text-center">
              Simple 3-step routine. No complications.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
