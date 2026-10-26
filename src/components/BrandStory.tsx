import React from 'react';
import { BRAND_CONFIG } from '../config/brand';
import { ArrowRight } from 'lucide-react';

interface BrandStoryProps {
  onExploreClick: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onExploreClick }) => {
  return (
    <section 
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-24 bg-[#101820] text-[#F5F1E8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Visual */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-lg overflow-hidden border border-[#F5F1E8]/20 shadow-[6px_6px_0px_0px_rgba(245,241,232,0.15)] aspect-[4/5]">
                <img
                  src="/images/brand-lifestyle.jpg"
                  alt="Modern man with clean, balanced skin enjoying natural light"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Editorial Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-block border border-[#F5F1E8]/20 px-3 py-1 rounded text-xs uppercase font-mono tracking-widest text-[#F5F1E8]/70">
              Our Perspective
            </div>

            <h2 
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F1E8] leading-tight"
            >
              Skincare Should Be an Everyday Reflex, Not a Science Project.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#F5F1E8]/80 leading-relaxed font-normal">
              <p>
                Most men want good skin, but nobody wants an elaborate multi-step regimen filled with confusing jargon, greasy creams, and artificial scents.
              </p>
              <p>
                {BRAND_CONFIG.brandName} was designed around a single core conviction: true consistency happens when a routine is simple, fast, and feels like nothing on the skin.
              </p>
              <p className="text-sm text-[#F5F1E8]/60 pt-2 border-t border-[#F5F1E8]/10">
                Editorial Note: Content and brand philosophy are structured for direct editing in <code className="text-[#F5F1E8]">src/config/brand.ts</code>. We intentionally avoid fabricated founder histories or fictional brand lore.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5F1E8] text-[#101820] font-bold text-sm tracking-wide rounded hover:bg-[#F5F1E8]/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F1E8]"
              >
                <span>View Daily Routine</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
