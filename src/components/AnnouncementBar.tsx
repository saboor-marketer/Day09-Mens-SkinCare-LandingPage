import React from 'react';
import { BRAND_CONFIG } from '../config/brand';

interface AnnouncementBarProps {
  onCtaClick?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onCtaClick }) => {
  return (
    <aside 
      aria-label="Announcement"
      className="w-full bg-[#101820] text-[#F5F1E8] border-b border-[#F5F1E8]/10 text-xs sm:text-sm py-2 px-4 font-medium tracking-wide text-center"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        <span>{BRAND_CONFIG.announcement}</span>
        <button
          onClick={onCtaClick}
          className="underline underline-offset-4 opacity-80 hover:opacity-100 transition-opacity focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F5F1E8]"
        >
          Explore Routine
        </button>
      </div>
    </aside>
  );
};
