import React, { useState } from 'react';
import { Plus, Check, Info } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onQuickView }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article 
      className="group flex flex-col bg-[#F5F1E8] border-2 border-[#101820] rounded-lg overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#101820]"
    >
      {/* Product Image Frame */}
      <div className="relative aspect-square overflow-hidden bg-[#101820]/5 border-b-2 border-[#101820]">
        <img
          src={product.image}
          alt={product.imageAlt}
          width={600}
          height={600}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Step Badge */}
        <div className="absolute top-3 left-3 bg-[#101820] text-[#F5F1E8] text-xs font-bold px-2.5 py-1 rounded tracking-wider uppercase">
          Step 0{product.stepNumber}: {product.stepName}
        </div>

        {/* Quick View Button */}
        <button
          onClick={() => onQuickView(product)}
          aria-label={`View details for ${product.name}`}
          className="absolute bottom-3 right-3 bg-[#F5F1E8] text-[#101820] p-2 rounded border border-[#101820] opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#101820] hover:text-[#F5F1E8] focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820]"
        >
          <Info className="w-4 h-4" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h3 className="font-bold text-lg sm:text-xl text-[#101820] tracking-tight">
              {product.name}
            </h3>
            <span className="font-extrabold text-base sm:text-lg text-[#101820] shrink-0">
              {product.pricePlaceholder}
            </span>
          </div>

          <p className="text-xs text-[#101820]/60 font-mono mb-2">
            {product.size}
          </p>

          <p className="text-sm text-[#101820]/75 leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Features Checklist */}
        <ul className="text-xs text-[#101820]/80 space-y-1.5 pt-2 border-t border-[#101820]/10">
          {product.keyCharacteristics.slice(0, 2).map((item, idx) => (
            <li key={idx} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#101820]" />
              <span className="truncate">{item}</span>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={handleAdd}
            aria-label={`Add ${product.name} to shopping bag`}
            className={`w-full py-3 px-4 rounded font-bold text-sm tracking-wide transition-all duration-150 flex items-center justify-center gap-2 border-2 border-[#101820] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820] ${
              added 
                ? 'bg-[#101820] text-[#F5F1E8]' 
                : 'bg-[#101820] text-[#F5F1E8] hover:bg-[#F5F1E8] hover:text-[#101820]'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" aria-hidden="true" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" aria-hidden="true" />
                <span>Add to Bag — {product.pricePlaceholder}</span>
              </>
            )}
          </button>
        </div>

      </div>
    </article>
  );
};
