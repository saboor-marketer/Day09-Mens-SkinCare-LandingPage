import React, { useState } from 'react';
import { FAQS } from '../data/products';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-order');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 sm:py-24 bg-[#F5F1E8] border-t border-[#101820]/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest font-mono font-bold text-[#101820]/60 mb-2">
            Clear Answers
          </p>
          <h2 
            id="faq-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101820] mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#101820]/75 leading-relaxed">
            Everything you need to know about routine order, facial hair, skin types, and order logistics.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className={`border-2 border-[#101820] rounded-lg transition-all duration-200 ${
                  isOpen ? 'bg-[#101820]/5 shadow-[4px_4px_0px_0px_#101820]' : 'bg-[#F5F1E8]'
                }`}
              >
                <button
                  type="button"
                  id={`accordion-button-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-content-${faq.id}`}
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#101820] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820] rounded-lg"
                >
                  <span className="tracking-tight">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 text-[#101820] ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={`accordion-content-${faq.id}`}
                    role="region"
                    aria-labelledby={`accordion-button-${faq.id}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#101820]/80 leading-relaxed border-t border-[#101820]/10 pt-4"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Policy Notice Box */}
        <div className="mt-10 p-5 rounded-lg border border-[#101820]/20 bg-[#101820]/5 text-xs text-[#101820]/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono">
          <span>Need a customized routine recommendation or wholesale question?</span>
          <span className="font-bold text-[#101820]">support@nordenskin.demo (Placeholder)</span>
        </div>

      </div>
    </section>
  );
};
