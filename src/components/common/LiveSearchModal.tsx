import React, { useState, useEffect } from 'react';
import { useStore } from '../../context/StoreContext';
import { Search, X, ArrowRight, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const LiveSearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, products, openProductDetails, setPageView, setFilter } = useStore();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!isSearchOpen) {
      setSearchTerm('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const results = searchTerm.trim()
    ? products.filter(
        p =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleSelectProduct = (id: string) => {
    openProductDetails(id);
    setIsSearchOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setFilter('search', searchTerm.trim());
      setPageView('shop');
      setIsSearchOpen(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Search Form Header */}
          <form onSubmit={handleSearchSubmit} className="relative flex items-center p-4 border-b border-zinc-200 dark:border-zinc-800">
            <Search size={22} className="text-red-600 dark:text-red-500 shrink-0 ml-2" />
            <input
              type="text"
              autoFocus
              placeholder="Search products, brands, categories (e.g. Headphones, Nike, Leather)..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-transparent px-4 py-2 text-base font-semibold text-zinc-900 dark:text-zinc-100 focus:outline-none placeholder-zinc-400"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 mr-2"
              >
                <X size={16} />
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:bg-red-600 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </form>

          {/* Body / Results */}
          <div className="max-h-[60vh] overflow-y-auto p-4">
            {!searchTerm.trim() ? (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  <TrendingUp size={14} className="text-red-500" />
                  Popular Searches
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Headphones', 'Nike Carbon', 'Trench Coat', 'Smartwatch', 'Cashmere', 'OLED Gaming'].map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="text-xs bg-zinc-100 dark:bg-zinc-800/80 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-600 dark:hover:text-red-400 text-zinc-700 dark:text-zinc-300 font-semibold px-3 py-1.5 rounded-xl border border-zinc-200/50 dark:border-zinc-800 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="text-center py-10 text-zinc-500">
                <p className="text-sm font-semibold mb-1">No matching products found</p>
                <p className="text-xs">Try searching for "Electronics", "Watches", "Nike", or "Furniture".</p>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  Matching Products ({results.length})
                </div>
                {results.slice(0, 6).map(prod => (
                  <div
                    key={prod.id}
                    onClick={() => handleSelectProduct(prod.id)}
                    className="flex items-center gap-4 p-2.5 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer transition-colors group"
                  >
                    <img src={prod.image} alt={prod.name} className="w-12 h-12 object-cover rounded-xl bg-zinc-200 dark:bg-zinc-800" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-red-600 dark:text-red-500">{prod.brand}</div>
                      <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate group-hover:text-red-600 dark:group-hover:text-red-400">
                        {prod.name}
                      </div>
                      <div className="text-xs text-zinc-500">{prod.category}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-black text-zinc-900 dark:text-zinc-100">${prod.price}</div>
                      <ArrowRight size={14} className="text-zinc-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all ml-auto mt-1" />
                    </div>
                  </div>
                ))}

                {results.length > 6 && (
                  <button
                    onClick={handleSearchSubmit}
                    className="w-full text-center py-3 text-xs font-bold text-red-600 dark:text-red-500 hover:underline border-t border-zinc-100 dark:border-zinc-800 mt-2"
                  >
                    View all {results.length} search results &rarr;
                  </button>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
