import React from 'react';
import { X, ShieldAlert } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="policy-modal-title"
    >
      <div 
        className="fixed inset-0 bg-[#101820]/75 backdrop-blur-xs" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative transform overflow-hidden rounded-lg bg-[#F5F1E8] text-[#101820] max-w-xl w-full p-6 sm:p-8 border-2 border-[#101820] shadow-2xl">
          
          <div className="flex justify-between items-center pb-4 border-b border-[#101820]/15 mb-4">
            <h3 id="policy-modal-title" className="text-xl font-bold tracking-tight">
              {type === 'privacy' ? 'Privacy Policy Notice' : 'Terms of Service Notice'}
            </h3>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1 rounded text-[#101820] hover:bg-[#101820]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4 text-sm text-[#101820]/80 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
            <div className="flex items-center gap-2 p-3 bg-[#101820]/5 rounded border border-[#101820]/15 font-mono text-xs">
              <ShieldAlert className="w-4 h-4 text-[#101820] shrink-0" />
              <span>Placeholder Policy — Prepared for Legal Deployment</span>
            </div>

            {type === 'privacy' ? (
              <>
                <p>
                  This template demonstrates how user data and privacy considerations are structured for {BRAND_CONFIG.brandName}.
                </p>
                <h4 className="font-bold text-[#101820]">1. Data Collection</h4>
                <p>
                  This frontend demonstration does not transmit your personal data, payment information, or IP address to external tracking servers.
                </p>
                <h4 className="font-bold text-[#101820]">2. Local Client State</h4>
                <p>
                  Shopping bag state is maintained locally in the active browser memory session. No third-party ad tracking or persistent finger-printing scripts are embedded.
                </p>
                <h4 className="font-bold text-[#101820]">3. Production Requirement</h4>
                <p>
                  When connecting a live backend and payment processor (such as Stripe or Shopify), update this policy with GDPR/CCPA disclosures, designated data controller contacts, and retention timelines.
                </p>
              </>
            ) : (
              <>
                <p>
                  Terms and Conditions for {BRAND_CONFIG.brandName} demonstration frontend.
                </p>
                <h4 className="font-bold text-[#101820]">1. Demonstration Nature</h4>
                <p>
                  All products, descriptions, prices, and reviews on this page are for design and technical evaluation. Transactions cannot be completed without a functional payment backend.
                </p>
                <h4 className="font-bold text-[#101820]">2. Intellectual Property</h4>
                <p>
                  Typography, design system, and component architecture are structured under the project license. Photography assets belong to their respective creators via royalty-free open licenses.
                </p>
              </>
            )}
          </div>

          <div className="pt-6 border-t border-[#101820]/15 mt-4 text-right">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#101820] text-[#F5F1E8] text-sm font-bold rounded hover:bg-[#101820]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820]"
            >
              Understood
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
