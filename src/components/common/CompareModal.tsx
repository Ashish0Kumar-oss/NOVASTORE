import React from 'react';
import { useStore } from '../../context/StoreContext';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { StarRating } from './StarRating';

export const CompareModal: React.FC = () => {
  const { compareList, toggleCompare, isCompareOpen, setIsCompareOpen, addToCart } = useStore();

  if (!isCompareOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-5xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl p-6 md:p-8 overflow-x-auto my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800 mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                Product Comparison <span className="text-xs bg-red-600 text-white px-2.5 py-0.5 rounded-full">{compareList.length}/4</span>
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Compare features, pricing, and specs side-by-side to make the best choice.
              </p>
            </div>
            <button
              onClick={() => setIsCompareOpen(false)}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:bg-red-600 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {compareList.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">No products selected for comparison yet.</p>
              <button
                onClick={() => setIsCompareOpen(false)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
              >
                Browse Shop
              </button>
            </div>
          ) : (
            <div className="min-w-[600px] grid grid-cols-5 gap-4">
              {/* Labels Column */}
              <div className="space-y-6 pt-24 text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                <div className="h-12 flex items-center">Product</div>
                <div className="h-8 flex items-center">Price</div>
                <div className="h-8 flex items-center">Rating</div>
                <div className="h-8 flex items-center">Brand</div>
                <div className="h-8 flex items-center">Category</div>
                <div className="h-8 flex items-center">Stock</div>
                <div className="h-20 flex items-center">Action</div>
              </div>

              {/* Product Columns */}
              {compareList.map(prod => (
                <div key={prod.id} className="relative flex flex-col space-y-6 bg-zinc-50 dark:bg-zinc-950 p-4 rounded-2xl border border-zinc-200/60 dark:border-zinc-800">
                  {/* Remove Button */}
                  <button
                    onClick={() => toggleCompare(prod)}
                    className="absolute top-2 right-2 p-1.5 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-500 hover:text-red-500 transition-colors"
                    title="Remove from comparison"
                  >
                    <Trash2 size={13} />
                  </button>

                  <div className="h-24 flex flex-col items-center text-center justify-center">
                    <img src={prod.image} alt={prod.name} className="w-14 h-14 object-cover rounded-xl mb-1 shadow-sm" />
                    <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 line-clamp-1">{prod.name}</span>
                  </div>

                  <div className="h-8 flex items-center font-black text-red-600 text-base">
                    ${prod.price}
                  </div>

                  <div className="h-8 flex items-center">
                    <StarRating rating={prod.rating} reviews={prod.reviews} size={12} />
                  </div>

                  <div className="h-8 flex items-center text-xs text-zinc-700 dark:text-zinc-300 font-semibold">
                    {prod.brand}
                  </div>

                  <div className="h-8 flex items-center text-xs text-zinc-500">
                    {prod.category}
                  </div>

                  <div className="h-8 flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {prod.stock} Units
                  </div>

                  <div className="h-20 flex items-center">
                    <button
                      onClick={() => addToCart(prod)}
                      className="w-full flex items-center justify-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-2 px-3 rounded-xl shadow-md transition-all"
                    >
                      <ShoppingBag size={13} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
