import { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { RoutineSection } from './components/RoutineSection';
import { Benefits } from './components/Benefits';
import { BrandStory } from './components/BrandStory';
import { CustomerReviews } from './components/CustomerReviews';
import { FAQ } from './components/FAQ';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { PolicyModal } from './components/PolicyModal';
import { Product, PRODUCTS } from './data/products';

export function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | null>(null);

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Add individual product to cart
  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  // Add all three products (Routine set) to cart
  const handleAddFullSet = () => {
    setCartItems(prev => {
      const updated = [...prev];
      PRODUCTS.forEach(p => {
        const idx = updated.findIndex(i => i.product.id === p.id);
        if (idx > -1) {
          updated[idx] = { ...updated[idx], quantity: updated[idx].quantity + 1 };
        } else {
          updated.push({ product: p, quantity: 1 });
        }
      });
      return updated;
    });
    setIsCartOpen(true);
  };

  // Update item quantity
  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  // Remove item entirely
  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  // Clear cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#101820] flex flex-col font-sans selection:bg-[#101820] selection:text-[#F5F1E8]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar onCtaClick={() => scrollToSection('routine')} />

      {/* 2. Responsive Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onShopClick={() => scrollToSection('shop')}
          onRoutineClick={() => scrollToSection('routine')}
        />

        {/* 4. Featured Products */}
        <FeaturedProducts
          onAddToCart={handleAddToCart}
          onQuickView={setQuickViewProduct}
          onAddFullSet={handleAddFullSet}
        />

        {/* 5. The Routine Section */}
        <RoutineSection />

        {/* 6. Why Choose Us (Benefits) */}
        <Benefits />

        {/* 7. Brand Story & Perspective */}
        <BrandStory onExploreClick={() => scrollToSection('routine')} />

        {/* 8. Customer Reviews (Labeled sample placeholders) */}
        <CustomerReviews />

        {/* 9. Accessible FAQ Section */}
        <FAQ />

        {/* 10. Final Conversion CTA */}
        <FinalCta
          onShopClick={() => scrollToSection('shop')}
          onRoutineClick={() => scrollToSection('routine')}
        />
      </main>

      {/* 11. Accessible Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenPolicy={setActivePolicy}
      />

      {/* Shopping Drawer (Demonstration prototype with clear disclosures) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Policy Modal (Privacy / Terms placeholders) */}
      <PolicyModal
        type={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </div>
  );
}

export default App;
