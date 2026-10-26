import React from 'react';
import { X, Check } from 'lucide-react';
import { Product } from '../data/products';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="quickview-title"
    >
      <div 
        className="fixed inset-0 bg-[#101820]/75 transition-opacity backdrop-blur-xs" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-[#F5F1E8] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl border-2 border-[#101820]">
          
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="p-2 text-[#101820] hover:bg-[#101820]/10 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            
            {/* Image */}
            <div className="bg-[#101820]/5 aspect-square border-b sm:border-b-0 sm:border-r-2 border-[#101820]">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-[#101820]/60 block mb-1">
                  Step 0{product.stepNumber}: {product.stepName}
                </span>

                <h3 id="quickview-title" className="text-xl sm:text-2xl font-extrabold text-[#101820] tracking-tight">
                  {product.name}
                </h3>

                <div className="flex items-baseline gap-2 mt-1 mb-4">
                  <span className="font-extrabold text-xl font-mono text-[#101820]">{product.pricePlaceholder}</span>
                  <span className="text-xs text-[#101820]/60 font-mono">({product.size})</span>
                </div>

                <p className="text-sm text-[#101820]/80 leading-relaxed mb-4">
                  {product.detailedDescription}
                </p>

                <div className="space-y-2 border-t border-[#101820]/15 pt-3">
                  <p className="text-xs uppercase font-mono font-bold text-[#101820]">How To Use</p>
                  <p className="text-xs text-[#101820]/75 leading-relaxed">{product.howToUse}</p>
                </div>

                <div className="space-y-1.5 border-t border-[#101820]/15 pt-3 mt-3">
                  <p className="text-xs uppercase font-mono font-bold text-[#101820]">Formulation Specs</p>
                  <ul className="text-xs text-[#101820]/75 space-y-1">
                    {product.keyCharacteristics.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#101820]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="w-full py-3 px-4 bg-[#101820] text-[#F5F1E8] font-bold text-sm tracking-wide rounded hover:bg-[#101820]/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820]"
                >
                  Add to Bag — {product.pricePlaceholder}
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
