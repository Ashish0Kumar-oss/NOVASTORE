import React from 'react';
import { useStore } from '../../context/StoreContext';
import { X, Home, ShoppingBag, Heart, Info, Mail, HelpCircle, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES_DATA } from '../../data/products';
import { Category } from '../../types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { setPageView, setFilter, user, logoutUser } = useStore();

  if (!isOpen) return null;

  const navigateTo = (view: any) => {
    setPageView(view);
    onClose();
  };

  const handleCategoryClick = (cat: Category) => {
    setFilter('category', cat);
    setPageView('shop');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9995] flex">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Drawer Content */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-xs bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 h-full flex flex-col justify-between overflow-y-auto z-10 p-6 shadow-2xl"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center text-white font-black text-lg">
                  N
                </div>
                <span className="text-lg font-black text-zinc-900 dark:text-zinc-100">
                  Nova<span className="text-red-600">Store</span>
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-red-600"
              >
                <X size={18} />
              </button>
            </div>

            {/* Navigation links */}
            <div className="py-6 space-y-2">
              <button
                onClick={() => navigateTo('home')}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/40 text-zinc-800 dark:text-zinc-200 font-bold text-sm"
              >
                <Home size={18} className="text-red-600" />
                <span>Home</span>
              </button>

              <button
                onClick={() => navigateTo('shop')}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/40 text-zinc-800 dark:text-zinc-200 font-bold text-sm"
              >
                <ShoppingBag size={18} className="text-red-600" />
                <span>Shop All</span>
              </button>

              <button
                onClick={() => navigateTo('wishlist')}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/40 text-zinc-800 dark:text-zinc-200 font-bold text-sm"
              >
                <Heart size={18} className="text-red-600" />
                <span>Wishlist</span>
              </button>

              <button
                onClick={() => navigateTo('about')}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/40 text-zinc-800 dark:text-zinc-200 font-bold text-sm"
              >
                <Info size={18} className="text-red-600" />
                <span>About Us</span>
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/40 text-zinc-800 dark:text-zinc-200 font-bold text-sm"
              >
                <Mail size={18} className="text-red-600" />
                <span>Contact</span>
              </button>

              <button
                onClick={() => navigateTo('faq')}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/40 text-zinc-800 dark:text-zinc-200 font-bold text-sm"
              >
                <HelpCircle size={18} className="text-red-600" />
                <span>FAQ & Help</span>
              </button>
            </div>

            {/* Categories */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-3">
                Categories
              </span>
              <div className="space-y-1">
                {CATEGORIES_DATA.map(cat => (
                  <button
                    key={cat.name}
                    onClick={() => handleCategoryClick(cat.name as Category)}
                    className="w-full text-left text-xs font-medium py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-between"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-zinc-400">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Auth */}
          <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 mt-6">
            {user ? (
              <div className="space-y-2">
                <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">{user.fullName}</p>
                <button
                  onClick={() => {
                    logoutUser();
                    onClose();
                  }}
                  className="w-full bg-red-600 text-white font-bold text-xs py-2.5 rounded-xl"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => navigateTo('login')}
                  className="flex-1 bg-red-600 text-white font-bold text-xs py-2.5 rounded-xl text-center"
                >
                  Sign In
                </button>
                <button
                  onClick={() => navigateTo('register')}
                  className="flex-1 border border-zinc-300 dark:border-zinc-700 font-bold text-xs py-2.5 rounded-xl text-center text-zinc-800 dark:text-zinc-200"
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
