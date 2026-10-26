import React from 'react';
import { ProductCard } from './ProductCard';
import { PRODUCTS, Product } from '../data/products';
import { ShieldCheck, Package } from 'lucide-react';

interface FeaturedProductsProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddFullSet: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onAddToCart,
  onQuickView,
  onAddFullSet,
}) => {
  return (
    <section 
      id="shop" 
      aria-labelledby="featured-products-heading"
      className="py-16 sm:py-24 bg-[#F5F1E8] border-t border-[#101820]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest font-mono font-bold text-[#101820]/60">
            The Three Essentials
          </p>
          <h2 
            id="featured-products-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101820]"
          >
            Formulas Built for Purpose
          </h2>
          <p className="text-base sm:text-lg text-[#101820]/75 leading-relaxed">
            Engineered specifically for men who want clean, healthy skin without greasy residue, complex regimens, or unnecessary marketing hype.
          </p>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Full Routine Bundle Banner */}
        <div className="bg-[#101820] text-[#F5F1E8] rounded-lg p-6 sm:p-8 lg:p-10 border-2 border-[#101820]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-wider text-[#F5F1E8]/70 border border-[#F5F1E8]/20 px-2.5 py-1 rounded">
                <Package className="w-3.5 h-3.5" />
                <span>The Complete Routine Box</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F1E8]">
                Get All Three Essentials Together
              </h3>
              <p className="text-sm sm:text-base text-[#F5F1E8]/80 leading-relaxed">
                Includes Step 1 Cleanser, Step 2 Moisturizer, and Step 3 Daily Sunscreen SPF 30+. Everything your face needs for morning and evening grooming.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
              <div className="text-left lg:text-right">
                <span className="text-xs uppercase font-mono text-[#F5F1E8]/60 block">Bundle Price</span>
                <span className="text-2xl font-extrabold text-[#F5F1E8]">$76.00</span>
              </div>
              
              <button
                onClick={onAddFullSet}
                className="py-3.5 px-6 bg-[#F5F1E8] text-[#101820] font-bold text-sm tracking-wide rounded hover:bg-[#F5F1E8]/90 transition-all text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F1E8] active:scale-[0.98]"
              >
                Add Complete Set to Bag
              </button>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-[#F5F1E8]/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#F5F1E8]/70 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#F5F1E8]" />
              Non-comedogenic & fragrance-free
            </span>
            <span>•</span>
            <span>60–75 day supply</span>
            <span>•</span>
            <span>Placeholder checkout demonstration</span>
          </div>
        </div>

      </div>
    </section>
  );
};
