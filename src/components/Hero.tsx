import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

interface HeroProps {
  onShopClick: () => void;
  onRoutineClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onRoutineClick }) => {
  return (
    <section 
      id="hero"
      aria-label="Hero Introduction"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32 bg-[#F5F1E8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#101820]/15 bg-[#101820]/5 text-xs font-semibold tracking-wider uppercase text-[#101820]">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Modern Masculine Grooming</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#101820] leading-[1.08]">
                {BRAND_CONFIG.heroHeadline}
              </h1>
              <p className="text-lg sm:text-xl text-[#101820]/75 max-w-xl font-normal leading-relaxed">
                {BRAND_CONFIG.heroSupportingCopy} Three intentional formulas engineered to cleanse, hydrate, and protect in under 2 minutes a day.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onShopClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#101820] text-[#F5F1E8] font-bold text-base tracking-wide rounded hover:bg-[#101820]/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820] focus-visible:ring-offset-2 active:scale-[0.99] group shadow-sm"
              >
                <span>Shop the Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              
              <button
                onClick={onRoutineClick}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#101820] text-[#101820] font-bold text-base tracking-wide rounded hover:bg-[#101820] hover:text-[#F5F1E8] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820] focus-visible:ring-offset-2 active:scale-[0.99]"
              >
                Find Your Routine
              </button>
            </div>

            {/* Realistic Functional Highlights (No fake clinical claims) */}
            <div className="pt-6 border-t border-[#101820]/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-sm text-[#101820]/80">
                <CheckCircle2 className="w-4 h-4 text-[#101820] shrink-0" aria-hidden="true" />
                <span className="font-semibold">3-Step Daily System</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#101820]/80">
                <CheckCircle2 className="w-4 h-4 text-[#101820] shrink-0" aria-hidden="true" />
                <span className="font-semibold">Zero Greasy Residue</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#101820]/80">
                <ShieldCheck className="w-4 h-4 text-[#101820] shrink-0" aria-hidden="true" />
                <span className="font-semibold">Fragrance-Free</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame with Subtle Architectural Border */}
              <div className="relative overflow-hidden rounded-lg border-2 border-[#101820] shadow-[8px_8px_0px_0px_#101820] bg-[#101820]/5 aspect-[4/5]">
                <img
                  src="/images/hero-routine.jpg"
                  alt="Modern man with clear, healthy skin holding minimalist dark skincare bottle in soft natural light"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Floating Architectural Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#101820] text-[#F5F1E8] p-4 rounded border border-[#F5F1E8]/20 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/60 font-mono">The Essential Set</p>
                      <p className="font-bold text-sm tracking-tight text-[#F5F1E8]">Cleanse • Moisturize • Protect</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded bg-[#F5F1E8] text-[#101820] font-bold">
                      2 Min / Day
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
