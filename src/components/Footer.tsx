import React, { useState } from 'react';
import { BRAND_CONFIG } from '../config/brand';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPolicy }) => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Client-side validated mock form (No fake backend submission, clearly documented)
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setNewsletterStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setNewsletterStatus('success');
    setErrorMessage('');
    setEmail('');
  };

  return (
    <footer className="bg-[#101820] text-[#F5F1E8] border-t border-[#F5F1E8]/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#F5F1E8]/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-extrabold text-2xl tracking-tighter text-[#F5F1E8] block">
              {BRAND_CONFIG.brandName}
            </span>
            <p className="text-sm text-[#F5F1E8]/70 max-w-sm leading-relaxed">
              Straightforward skincare engineered for modern men. Cleanse, moisturize, and protect without complicated multi-step regimens.
            </p>
            <div className="text-xs text-[#F5F1E8]/50 font-mono space-y-1 pt-2">
              <p>Strict Two-Color Design System: Midnight Navy (#101820) & Soft Ivory (#F5F1E8)</p>
              <p>No artificial fragrances or heavy silicones.</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <p className="text-xs uppercase font-mono font-bold tracking-widest text-[#F5F1E8]/60">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-[#F5F1E8]/80 font-medium">
              <li>
                <button 
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#F5F1E8] transition-colors focus:outline-none focus-visible:underline"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#F5F1E8] transition-colors focus:outline-none focus-visible:underline"
                >
                  Shop Essentials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('routine')}
                  className="hover:text-[#F5F1E8] transition-colors focus:outline-none focus-visible:underline"
                >
                  The 3-Step Routine
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('benefits')}
                  className="hover:text-[#F5F1E8] transition-colors focus:outline-none focus-visible:underline"
                >
                  Why Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#F5F1E8] transition-colors focus:outline-none focus-visible:underline"
                >
                  About Brand
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('faq')}
                  className="hover:text-[#F5F1E8] transition-colors focus:outline-none focus-visible:underline"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact / Inquiries Placeholder */}
          <div className="space-y-3">
            <p className="text-xs uppercase font-mono font-bold tracking-widest text-[#F5F1E8]/60">
              Support & Contact
            </p>
            <div className="text-sm text-[#F5F1E8]/80 space-y-2 leading-relaxed">
              <p className="text-xs font-mono text-[#F5F1E8]/60 uppercase">General Inquiries:</p>
              <p className="font-mono text-xs">contact@nordenskin.demo</p>
              <p className="text-xs text-[#F5F1E8]/60 pt-2">
                {BRAND_CONFIG.contact.supportNote}
              </p>
              <p className="text-xs text-[#F5F1E8]/50 italic">
                {BRAND_CONFIG.contact.responseWindow}
              </p>
            </div>
          </div>

          {/* Routine Newsletter / Updates Sign-up */}
          <div className="space-y-3">
            <p className="text-xs uppercase font-mono font-bold tracking-widest text-[#F5F1E8]/60">
              Routine Notes
            </p>
            <p className="text-xs text-[#F5F1E8]/70 leading-relaxed">
              Receive concise monthly grooming guides. No promotional spam.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2" noValidate>
              <div className="relative">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email Address for Grooming Notes
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (newsletterStatus === 'error') setNewsletterStatus('idle');
                  }}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2.5 bg-[#F5F1E8]/5 border border-[#F5F1E8]/30 rounded text-sm text-[#F5F1E8] placeholder-[#F5F1E8]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F1E8]"
                  aria-describedby={newsletterStatus === 'error' ? 'newsletter-error' : undefined}
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-3 bg-[#F5F1E8] text-[#101820] text-xs font-bold uppercase tracking-wider rounded hover:bg-[#F5F1E8]/90 transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F1E8]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Subscribe</span>
              </button>

              {newsletterStatus === 'error' && (
                <div id="newsletter-error" className="flex items-center gap-1.5 text-xs text-red-300 font-mono pt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {newsletterStatus === 'success' && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-mono pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Subscribed! (Demonstration placeholder)</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F1E8]/60 font-mono">
          <div>
            © {currentYear} {BRAND_CONFIG.brandName}. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-[#F5F1E8] transition-colors underline underline-offset-4 focus:outline-none focus-visible:text-[#F5F1E8]"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-[#F5F1E8] transition-colors underline underline-offset-4 focus:outline-none focus-visible:text-[#F5F1E8]"
            >
              Terms of Service
            </button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-[#F5F1E8]/5 text-[11px] text-[#F5F1E8]/40 leading-relaxed text-center">
          Notice: This landing page is a demonstration frontend template. All prices, testimonials, reviews, and transaction flows are clearly designated placeholders.
        </div>

      </div>
    </footer>
  );
};
