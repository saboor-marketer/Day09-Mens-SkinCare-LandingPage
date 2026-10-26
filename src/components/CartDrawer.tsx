import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  if (!isOpen) return null;

  // Calculate numeric subtotal from placeholder prices (e.g., "$26.00" -> 26.0)
  const subtotal = items.reduce((acc, item) => {
    const numericPrice = parseFloat(item.product.pricePlaceholder.replace(/[^0-9.]/g, '')) || 0;
    return acc + numericPrice * item.quantity;
  }, 0);

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="cart-drawer-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#101820]/70 transition-opacity backdrop-blur-xs"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F5F1E8] text-[#101820] border-l-2 border-[#101820] flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-6 border-b border-[#101820]/15 flex items-center justify-between bg-[#F5F1E8]">
            <h2 id="cart-drawer-title" className="text-xl font-extrabold tracking-tight text-[#101820]">
              Shopping Bag ({items.reduce((s, i) => s + i.quantity, 0)})
            </h2>
            <button
              onClick={onClose}
              aria-label="Close shopping bag"
              className="p-2 text-[#101820] hover:bg-[#101820]/10 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 divide-y divide-[#101820]/10">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <p className="text-base font-bold text-[#101820]">Your bag is empty.</p>
                <p className="text-xs text-[#101820]/60 max-w-xs mx-auto">
                  Add the Daily Cleanser, Face Moisturizer, or Sunscreen to get started with your routine.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.product.id} className="pt-6 first:pt-0 flex gap-4 items-start">
                  <div className="w-20 h-20 rounded border border-[#101820]/20 overflow-hidden bg-[#101820]/5 shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-sm text-[#101820] truncate">
                        {item.product.name}
                      </h3>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        aria-label={`Remove ${item.product.name} from bag`}
                        className="text-[#101820]/60 hover:text-[#101820] p-1 ml-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#101820]"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs text-[#101820]/60 font-mono mt-0.5">
                      {item.product.size}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#101820] rounded overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          aria-label="Decrease quantity"
                          className="px-2 py-1 text-xs hover:bg-[#101820]/10 font-bold focus:outline-none focus-visible:ring-1 focus-visible:ring-[#101820]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-xs font-mono font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          aria-label="Increase quantity"
                          className="px-2 py-1 text-xs hover:bg-[#101820]/10 font-bold focus:outline-none focus-visible:ring-1 focus-visible:ring-[#101820]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-mono font-bold text-sm text-[#101820]">
                        {item.product.pricePlaceholder}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Notice */}
          {items.length > 0 && (
            <div className="p-6 border-t-2 border-[#101820] bg-[#F5F1E8] space-y-4">
              <div className="flex justify-between items-baseline font-bold">
                <span className="text-sm uppercase font-mono tracking-wider text-[#101820]/70">Subtotal (Demo)</span>
                <span className="text-xl font-mono text-[#101820]">${subtotal.toFixed(2)}</span>
              </div>

              {/* Strict Disclaimer regarding lack of checkout backend */}
              <div className="p-3 rounded border border-[#101820]/20 bg-[#101820]/5 text-[11px] text-[#101820]/80 space-y-1 font-mono">
                <div className="flex items-center gap-1.5 font-bold text-[#101820]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Frontend Prototype Notice</span>
                </div>
                <p>
                  Checkout and payment backend are not configured. No real credit card or personal data is collected or transmitted.
                </p>
              </div>

              <button
                type="button"
                onClick={() => alert("Checkout Demonstration: No live payment gateway is connected. Product data and bag state operate in client memory only.")}
                className="w-full py-3.5 px-4 bg-[#101820] text-[#F5F1E8] font-bold text-sm tracking-wide rounded hover:bg-[#101820]/90 transition-colors flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820]"
              >
                <span>Proceed to Checkout (Demo)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
