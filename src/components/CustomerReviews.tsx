import React from 'react';
import { AlertCircle } from 'lucide-react';

interface SampleReview {
  id: string;
  initials: string;
  rolePlaceholder: string;
  text: string;
  highlight: string;
}

const SAMPLE_PLACEHOLDERS: SampleReview[] = [
  {
    id: 'sample-1',
    initials: 'M. K.',
    rolePlaceholder: 'Sample Format: Design Professional (29)',
    text: 'Placeholder review copy demonstrating UI card appearance. The lightweight moisturizer absorbs within 15 seconds without leaving oil on forehead or hands before typing on keyboard.',
    highlight: 'Matte & Fast Absorption'
  },
  {
    id: 'sample-2',
    initials: 'J. R.',
    rolePlaceholder: 'Sample Format: Graduate Student (24)',
    text: 'Placeholder review copy demonstrating UI card appearance. The daily facial cleanser does not dry out cheeks after cold weather cycling. Straightforward 3-step numbering.',
    highlight: 'Non-Stripping Cleanser'
  },
  {
    id: 'sample-3',
    initials: 'D. T.',
    rolePlaceholder: 'Sample Format: Fitness Instructor (34)',
    text: 'Placeholder review copy demonstrating UI card appearance. Sunscreen blends clear even into beard stubble without stinging eyes during intense outdoor conditioning workouts.',
    highlight: 'Zero Cast Sunscreen'
  }
];

export const CustomerReviews: React.FC = () => {
  return (
    <section 
      aria-labelledby="reviews-heading"
      className="py-16 sm:py-20 bg-[#F5F1E8] border-t border-[#101820]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compliance Disclosure Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101820]/5 border border-[#101820]/20 text-xs font-mono font-semibold text-[#101820] mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Honest Disclosure: Sample Placeholders</span>
          </div>

          <h2 
            id="reviews-heading"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#101820]"
          >
            Real Expectations, Zero Fabricated Praise
          </h2>
          <p className="text-sm text-[#101820]/70 mt-2 leading-relaxed">
            In compliance with truth-in-advertising guidelines, we do not invent fake 5-star testimonials, fabricated customer identities, or simulated clinical trial stats. Below are clearly labeled sample layout cards ready for real verified purchaser feedback once launched.
          </p>
        </div>

        {/* Sample Placeholders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_PLACEHOLDERS.map((review) => (
            <div 
              key={review.id}
              className="p-6 bg-[#F5F1E8] border border-[#101820]/25 rounded-lg flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#101820]/10 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#101820] text-[#F5F1E8] flex items-center justify-center font-mono font-bold text-xs">
                    {review.initials}
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded border border-[#101820]/30 text-[#101820]/70">
                    Sample Card
                  </span>
                </div>

                <div className="text-xs font-mono font-bold text-[#101820] mb-2 uppercase tracking-wide">
                  {review.highlight}
                </div>

                <p className="text-sm text-[#101820]/80 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#101820]/10 text-xs text-[#101820]/50 font-mono">
                {review.rolePlaceholder}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
