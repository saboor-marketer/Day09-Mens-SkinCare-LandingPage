import React from 'react';
import { BENEFITS } from '../data/products';
import { Sliders, Shield, Zap } from 'lucide-react';

export const Benefits: React.FC = () => {
  const iconMap = [
    <Sliders className="w-6 h-6" aria-hidden="true" />,
    <Zap className="w-6 h-6" aria-hidden="true" />,
    <Shield className="w-6 h-6" aria-hidden="true" />,
  ];

  return (
    <section 
      id="benefits"
      aria-labelledby="benefits-heading"
      className="py-16 sm:py-24 bg-[#F5F1E8] border-t border-[#101820]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest font-mono font-bold text-[#101820]/60 mb-2">
            Formulation Philosophy
          </p>
          <h2 
            id="benefits-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101820] mb-4"
          >
            Why Choose Norden Skin
          </h2>
          <p className="text-base sm:text-lg text-[#101820]/75 leading-relaxed">
            Focused on simplicity, convenient routines, and everyday usability. No fabricated clinical claims, no artificial fragrances, and no confusing clutter.
          </p>
        </div>

        {/* 3 Benefit Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((b, idx) => (
            <div 
              key={b.number}
              className="bg-[#F5F1E8] border-2 border-[#101820] rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:shadow-[4px_4px_0px_0px_#101820] transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded bg-[#101820] text-[#F5F1E8] flex items-center justify-center">
                    {iconMap[idx]}
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#101820]/50">
                    Benefit {b.number}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#101820] mb-3">
                  {b.headline}
                </h3>

                <p className="text-sm sm:text-base text-[#101820]/80 leading-relaxed mb-4">
                  {b.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#101820]/10 text-xs text-[#101820]/60 italic">
                {b.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
