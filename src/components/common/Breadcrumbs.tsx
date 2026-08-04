import React from 'react';
import { useStore } from '../../context/StoreContext';
import { ChevronRight, Home } from 'lucide-react';
import { PageView } from '../../types';

interface BreadcrumbsProps {
  currentTitle?: string;
  category?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentTitle, category }) => {
  const { pageView, setPageView, setFilter } = useStore();

  const handleCategoryClick = (cat: string) => {
    setFilter('category', cat as any);
    setPageView('shop');
  };

  const getPageLabel = (view: PageView) => {
    switch (view) {
      case 'shop': return 'Shop Catalog';
      case 'cart': return 'Shopping Cart';
      case 'checkout': return 'Checkout';
      case 'wishlist': return 'Wishlist';
      case 'about': return 'About NovaStore';
      case 'contact': return 'Contact Us';
      case 'faq': return 'Help & FAQ';
      case 'login': return 'Account Sign In';
      case 'register': return 'Create Account';
      case 'forgot-password': return 'Reset Password';
      case 'orders': return 'My Orders';
      default: return view;
    }
  };

  return (
    <nav className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 py-3 mb-4 overflow-x-auto whitespace-nowrap">
      <button
        onClick={() => setPageView('home')}
        className="flex items-center gap-1 hover:text-red-600 dark:hover:text-red-500 transition-colors font-medium"
      >
        <Home size={13} />
        <span>Home</span>
      </button>

      <ChevronRight size={12} className="text-zinc-400 dark:text-zinc-600 shrink-0" />

      {category && (
        <>
          <button
            onClick={() => handleCategoryClick(category)}
            className="hover:text-red-600 dark:hover:text-red-500 transition-colors font-medium"
          >
            {category}
          </button>
          <ChevronRight size={12} className="text-zinc-400 dark:text-zinc-600 shrink-0" />
        </>
      )}

      {pageView === 'product-detail' ? (
        <span className="text-zinc-900 dark:text-zinc-100 font-semibold truncate max-w-[200px] sm:max-w-xs">
          {currentTitle || 'Product Details'}
        </span>
      ) : (
        <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
          {getPageLabel(pageView)}
        </span>
      )}
    </nav>
  );
};
