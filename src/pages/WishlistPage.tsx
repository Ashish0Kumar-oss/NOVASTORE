import React from 'react';
import { useStore } from '../context/StoreContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ProductCard } from '../components/common/ProductCard';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';

export const WishlistPage: React.FC = () => {
  const { wishlist, setPageView } = useStore();

  return (
    <div className="space-y-6 pb-12">
      <Breadcrumbs />

      <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            My Wishlist <Heart size={24} className="text-red-600 fill-red-600" />
          </h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Saved items ({wishlist.length}) waiting for your purchase.
          </p>
        </div>
      </div>

      {wishlist.length === 0 ? (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-12 text-center my-8 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-950/50 text-red-600 flex items-center justify-center mx-auto mb-4">
            <Heart size={32} />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Your Wishlist is Empty</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto mb-6">
            Tap the heart icon on any product card to save your favorite items for later!
          </p>
          <button
            onClick={() => setPageView('shop')}
            className="bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-xs px-8 py-3.5 rounded-2xl shadow-xl shadow-red-600/30 hover:scale-105 transition-all"
          >
            Explore Catalog
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product, idx) => (
            <ProductCard key={`${product.id}-${idx}`} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
