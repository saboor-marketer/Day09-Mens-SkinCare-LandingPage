import React from 'react';
import { ROUTINE_STEPS } from '../data/products';
import { Clock, Sun, Moon } from 'lucide-react';

export const RoutineSection: React.FC = () => {
  return (
    <section 
      id="routine"
      aria-labelledby="routine-heading"
      className="py-16 sm:py-24 bg-[#101820] text-[#F5F1E8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest font-mono font-bold text-[#F5F1E8]/60 mb-2">
            The Daily Method
          </p>
          <h2 
            id="routine-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F1E8] mb-4"
          >
            A 3-Step Routine. Done in 2 Minutes.
          </h2>
          <p className="text-base sm:text-lg text-[#F5F1E8]/75 leading-relaxed">
            Skincare doesn't require a ten-step regimen. Here is the straightforward routine built for real consistency morning and night.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ROUTINE_STEPS.map((step) => (
            <div 
              key={step.number}
              className="bg-[#F5F1E8]/5 border border-[#F5F1E8]/20 rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-[#F5F1E8]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#F5F1E8]/10 mb-6">
                  <span className="text-3xl font-extrabold font-mono text-[#F5F1E8]/90">
                    {step.number}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-[#F5F1E8]/70">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#F5F1E8]/60 block mb-1">
                    {step.when}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-[#F5F1E8]">
                    {step.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#F5F1E8]/80 mt-1">
                    {step.name}
                  </p>
                </div>

                <p className="text-sm text-[#F5F1E8]/70 leading-relaxed mb-6">
                  {step.explanation}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5F1E8]/10 text-xs text-[#F5F1E8]/60">
                <span className="font-semibold text-[#F5F1E8]/90">Tip:</span> {step.practicalTip}
              </div>
            </div>
          ))}
        </div>

        {/* Morning vs Evening Cadence Breakdown */}
        <div className="border border-[#F5F1E8]/20 rounded-lg p-6 sm:p-8 bg-[#F5F1E8]/5">
          <h3 className="text-lg font-bold text-[#F5F1E8] mb-4">
            Day & Night Cadence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#F5F1E8]/80">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-[#F5F1E8]/10 text-[#F5F1E8] shrink-0 mt-0.5">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-[#F5F1E8] mb-1">Morning Protocol (90 Seconds)</p>
                <p className="text-xs sm:text-sm text-[#F5F1E8]/70">
                  Cleanse with lukewarm water → Apply 1 pump of Moisturizer → Finish with Sunscreen SPF 30+. You are shielded against pollutants and UV exposure.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-[#F5F1E8]/10 text-[#F5F1E8] shrink-0 mt-0.5">
                <Moon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-[#F5F1E8] mb-1">Evening Protocol (45 Seconds)</p>
                <p className="text-xs sm:text-sm text-[#F5F1E8]/70">
                  Cleanse thoroughly to wash away daily sweat, sebum, and sunscreen → Apply Moisturizer to restore the skin barrier while you sleep.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
