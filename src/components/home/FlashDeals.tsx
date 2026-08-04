import React, { useState, useEffect } from 'react';
import { useStore } from '../../context/StoreContext';
import { ProductCard } from '../common/ProductCard';
import { Flame, Clock, ArrowRight } from 'lucide-react';

export const FlashDeals: React.FC = () => {
  const { products, setPageView, setFilter } = useStore();

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 35, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dealProducts = products.filter(p => p.discount >= 18).slice(0, 4);

  return (
    <section className="py-12 bg-gradient-to-b from-red-950/20 via-zinc-900/10 to-transparent p-6 sm:p-8 rounded-3xl border border-red-500/20 my-10">
      {/* Header with Timer */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/40">
            <Flame size={26} className="animate-bounce" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
              Limited Time Event
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100">
              Flash Deals & Special Discounts
            </h2>
          </div>
        </div>

        {/* Live Countdown Box */}
        <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3.5 rounded-2xl shadow-lg">
          <Clock size={18} className="text-red-600 dark:text-red-500 shrink-0" />
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Ends In:</span>
          <div className="flex items-center gap-1.5 font-black text-sm text-zinc-900 dark:text-zinc-100">
            <span className="bg-red-600 text-white px-2.5 py-1 rounded-lg shadow-inner">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span>:</span>
            <span className="bg-red-600 text-white px-2.5 py-1 rounded-lg shadow-inner">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span>:</span>
            <span className="bg-red-600 text-white px-2.5 py-1 rounded-lg shadow-inner">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Discounted Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dealProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => {
            setFilter('onSaleOnly', true);
            setPageView('shop');
          }}
          className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-xs px-6 py-3 rounded-xl hover:bg-red-600 dark:hover:bg-red-500 dark:hover:text-white transition-all shadow-md"
        >
          <span>View All On-Sale Products</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
};
