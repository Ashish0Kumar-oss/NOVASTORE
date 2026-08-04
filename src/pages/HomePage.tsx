import React from 'react';
import { useStore } from '../context/StoreContext';
import { HeroSlider } from '../components/home/HeroSlider';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { FlashDeals } from '../components/home/FlashDeals';
import { Testimonials } from '../components/home/Testimonials';
import { ProductCard } from '../components/common/ProductCard';
import { Sparkles, ArrowRight, ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { products, setPageView, setFilter } = useStore();

  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const bestsellerProducts = products.filter(p => p.bestseller).slice(0, 4);

  return (
    <div className="space-y-12">
      {/* Hero Banner Slider */}
      <HeroSlider />

      {/* Trust & Value Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 bg-white dark:bg-[#0F0F0F] border border-zinc-200 dark:border-white/5 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <Truck className="text-red-600 dark:text-red-500 shrink-0" size={20} />
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-900 dark:text-zinc-100">Free Express Shipping</h4>
            <p className="text-[11px] text-zinc-500">On all orders over $100</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <RotateCcw className="text-red-600 dark:text-red-500 shrink-0" size={20} />
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-900 dark:text-zinc-100">30-Day Returns</h4>
            <p className="text-[11px] text-zinc-500">100% Money-back guarantee</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ShieldCheck className="text-red-600 dark:text-red-500 shrink-0" size={20} />
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-900 dark:text-zinc-100">Secure Payments</h4>
            <p className="text-[11px] text-zinc-500">256-Bit SSL Encrypted</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Headphones className="text-red-600 dark:text-red-500 shrink-0" size={20} />
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-900 dark:text-zinc-100">24/7 VIP Concierge</h4>
            <p className="text-[11px] text-zinc-500">Dedicated concierge team</p>
          </div>
        </div>
      </section>

      {/* Category Grid Showcase */}
      <CategoryGrid />

      {/* Flash Deals Section */}
      <FlashDeals />

      {/* Featured Products Grid */}
      <section className="py-8">
        <div className="flex items-end justify-between mb-8 border-b border-white/5 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-600 dark:text-red-500">
              Curated Series
            </span>
            <h2 className="text-xl sm:text-2xl font-black uppercase text-zinc-900 dark:text-zinc-100 mt-1">
              Featured Items
            </h2>
          </div>
          <button
            onClick={() => setPageView('shop')}
            className="text-xs font-bold text-zinc-400 hover:text-red-500 uppercase tracking-widest flex items-center gap-1 transition-colors"
          >
            <span>Explore Shop</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Large Promotional Banner */}
      <section className="relative overflow-hidden bg-gradient-to-tr from-black via-[#0F0F0F] to-red-950 text-white rounded-2xl p-8 sm:p-12 border border-white/10 shadow-2xl">
        <div className="relative z-10 max-w-xl space-y-4">
          <span className="inline-block bg-red-600 text-white font-bold text-[10px] px-3 py-1 rounded uppercase tracking-widest">
            Mid-Season Luxe Sale
          </span>
          <h2 className="text-3xl sm:text-5xl font-light italic leading-tight text-white">
            UP TO <span className="font-black not-italic text-red-600 uppercase">40% OFF</span> LUXURY EDITION
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Upgrade your daily lifestyle with handcrafted Italian leather, premium spatial audio, and titanium timepieces.
          </p>
          <button
            onClick={() => {
              setFilter('onSaleOnly', true);
              setPageView('shop');
            }}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-xs rounded transition-all shadow-lg shadow-red-600/20 active:scale-95 inline-flex items-center gap-2"
          >
            <span>Shop The Sale</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
              Customer Favorites
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 mt-1">
              Best Selling Products
            </h2>
          </div>
          <button
            onClick={() => {
              setFilter('sortBy', 'bestseller');
              setPageView('shop');
            }}
            className="text-xs font-bold text-red-600 dark:text-red-500 hover:underline flex items-center gap-1"
          >
            <span>View All Best Sellers</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellerProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <Testimonials />
    </div>
  );
};
