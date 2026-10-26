import React from 'react';
import { BRAND_CONFIG } from '../config/brand';
import { ArrowRight, Package, ShieldCheck } from 'lucide-react';

interface FinalCtaProps {
  onShopClick: () => void;
  onRoutineClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onShopClick, onRoutineClick }) => {
  return (
    <section 
      aria-labelledby="final-cta-heading"
      className="py-16 sm:py-24 bg-[#101820] text-[#F5F1E8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#F5F1E8]/20 bg-[#F5F1E8]/10 text-xs font-mono font-semibold uppercase tracking-widest text-[#F5F1E8]">
            <Package className="w-3.5 h-3.5" />
            <span>Ready in 2 Minutes a Day</span>
          </div>

          <h2 
            id="final-cta-heading"
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F5F1E8] leading-tight"
          >
            Better Skin Starts With Three Steps.
          </h2>

          <p className="text-base sm:text-xl text-[#F5F1E8]/80 max-w-2xl mx-auto leading-relaxed">
            Eliminate skincare overwhelm. Experience clean, hydrated, and protected skin with {BRAND_CONFIG.brandName}'s minimalist grooming system.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4">
            <button
              onClick={onShopClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F5F1E8] text-[#101820] font-bold text-base tracking-wide rounded hover:bg-[#F5F1E8]/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F1E8] active:scale-[0.98] group"
            >
              <span>Shop the Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={onRoutineClick}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#F5F1E8] text-[#F5F1E8] font-bold text-base tracking-wide rounded hover:bg-[#F5F1E8] hover:text-[#101820] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F1E8] active:scale-[0.98]"
            >
              Learn the 3-Step Routine
            </button>
          </div>

          <div className="pt-8 border-t border-[#F5F1E8]/10 flex flex-wrap justify-center items-center gap-y-2 gap-x-6 text-xs text-[#F5F1E8]/60 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#F5F1E8]" /> Fragrance-free formulation
            </span>
            <span>•</span>
            <span>Zero greasy residue</span>
            <span>•</span>
            <span>Matte finish guaranteed</span>
          </div>

        </div>

      </div>
    </section>
  );
};
