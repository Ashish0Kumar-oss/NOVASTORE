import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import {
  Search,
  ShoppingBag,
  Heart,
  Sun,
  Moon,
  User as UserIcon,
  Menu,
  ChevronDown,
  Sparkles,
  ArrowLeftRight,
  LogOut,
  PackageCheck
} from 'lucide-react';
import { CATEGORIES_DATA } from '../../data/products';
import { Category } from '../../types';

interface HeaderProps {
  onOpenMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileMenu }) => {
  const {
    theme,
    toggleTheme,
    pageView,
    setPageView,
    cartCount,
    wishlistCount,
    compareList,
    setIsCompareOpen,
    setIsSearchOpen,
    setFilter,
    user,
    logoutUser
  } = useStore();

  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleCategorySelect = (cat: Category) => {
    setFilter('category', cat);
    setPageView('shop');
    setIsCategoryDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-200">
      {/* Top Banner */}
      <div className="bg-black text-white border-b border-white/10 text-xs font-semibold py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <Sparkles size={14} className="text-red-500 animate-pulse" />
            <span className="tracking-wide">Summer Sale: Extra 20% OFF with code <strong className="text-red-500 underline decoration-red-500">NOVA20</strong></span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[11px] text-zinc-400 uppercase tracking-widest font-bold">
            <span>Free Express Shipping $100+</span>
            <span className="text-zinc-700">|</span>
            <span>24/7 VIP Concierge</span>
            <span className="text-zinc-700">|</span>
            <button onClick={() => setPageView('faq')} className="hover:text-white transition-colors">
              Help Center
            </button>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Dark Navbar */}
      <nav className="bg-[#0A0A0A]/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-2xl text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Mobile Menu & Brand Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Open mobile menu"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <div
              onClick={() => setPageView('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-red-600 rounded-sm transform rotate-45 flex items-center justify-center shrink-0 shadow-lg shadow-red-600/30 group-hover:rotate-90 transition-transform duration-300">
                <div className="w-2.5 h-2.5 bg-black transform -rotate-45 rounded-2xs" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tighter uppercase text-white leading-none">
                  NOVA<span className="text-red-600">STORE</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.25em] text-zinc-500 uppercase mt-0.5">
                  Geometric Luxe
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">
            <button
              onClick={() => setPageView('home')}
              className={`transition-colors py-2 ${
                pageView === 'home'
                  ? 'text-white border-b-2 border-red-600 font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => setPageView('shop')}
              className={`transition-colors py-2 ${
                pageView === 'shop'
                  ? 'text-white border-b-2 border-red-600 font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Shop
            </button>

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCategoryDropdownOpen(prev => !prev)}
                onBlur={() => setTimeout(() => setIsCategoryDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors py-2"
              >
                <span>Categories</span>
                <ChevronDown size={14} className={`transition-transform ${isCategoryDropdownOpen ? 'rotate-180 text-red-600' : ''}`} />
              </button>

              {isCategoryDropdownOpen && (
                <div className="absolute top-full left-0 w-60 mt-2 bg-[#0F0F0F] border border-white/10 rounded-xl shadow-2xl p-2 z-50">
                  <button
                    onClick={() => handleCategorySelect('All')}
                    className="w-full text-left text-xs font-bold uppercase tracking-wider px-3.5 py-2.5 rounded-lg hover:bg-red-600/20 hover:text-red-400 text-white transition-colors"
                  >
                    All Categories
                  </button>
                  <hr className="my-1 border-white/5" />
                  {CATEGORIES_DATA.map(cat => (
                    <button
                      key={cat.name}
                      onClick={() => handleCategorySelect(cat.name as Category)}
                      className="w-full text-left text-xs font-medium px-3.5 py-2 rounded-lg hover:bg-white/5 hover:text-red-400 text-zinc-300 transition-colors flex items-center justify-between"
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] text-zinc-500 bg-zinc-900 border border-white/5 px-2 py-0.5 rounded">{cat.count}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setPageView('about')}
              className={`transition-colors py-2 ${
                pageView === 'about'
                  ? 'text-white border-b-2 border-red-600 font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              About
            </button>

            <button
              onClick={() => setPageView('contact')}
              className={`transition-colors py-2 ${
                pageView === 'contact'
                  ? 'text-white border-b-2 border-red-600 font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Contact
            </button>

            <button
              onClick={() => setPageView('faq')}
              className={`transition-colors py-2 ${
                pageView === 'faq'
                  ? 'text-white border-b-2 border-red-600 font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              FAQ
            </button>
          </div>

          {/* Action Icons Right */}
          <div className="flex items-center gap-3">
            {/* Live Search Bar Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:flex items-center bg-zinc-900/90 rounded-full px-4 py-2 border border-white/10 hover:border-red-600/50 text-xs text-zinc-400 hover:text-white transition-all cursor-pointer"
            >
              <Search size={14} className="text-zinc-500 mr-2" />
              <span className="pr-4">Search products...</span>
            </button>

            <button
              onClick={() => setIsSearchOpen(true)}
              className="sm:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} />}
            </button>

            {/* Compare Badge */}
            <button
              onClick={() => setIsCompareOpen(true)}
              className="relative p-2 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-white/10 transition-colors"
              title="Compare Products"
            >
              <ArrowLeftRight size={20} />
              {compareList.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white font-bold text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {compareList.length}
                </span>
              )}
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={() => setPageView('wishlist')}
              className="relative p-2 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-white/10 transition-colors"
              title="Wishlist"
            >
              <Heart size={20} className={pageView === 'wishlist' ? 'fill-red-600 text-red-600' : ''} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white font-bold text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Icon */}
            <button
              onClick={() => setPageView('cart')}
              className="relative flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded transition-all shadow-lg shadow-red-600/20 active:scale-95"
              title="Shopping Cart"
            >
              <ShoppingBag size={18} />
              <span>{cartCount}</span>
            </button>

            {/* User Account Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(prev => !prev)}
                className="p-2.5 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="Account"
              >
                <UserIcon size={20} />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-60 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-3 z-50">
                  {user ? (
                    <div>
                      <div className="px-3 py-2 border-b border-zinc-100 dark:border-zinc-800 mb-2">
                        <p className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{user.fullName}</p>
                        <p className="text-xs text-zinc-400 truncate">{user.email}</p>
                      </div>

                      <button
                        onClick={() => {
                          setPageView('orders');
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full text-left text-xs font-semibold px-3 py-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center gap-2"
                      >
                        <PackageCheck size={16} className="text-red-600" />
                        <span>Order History</span>
                      </button>

                      <button
                        onClick={() => {
                          logoutUser();
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full text-left text-xs font-semibold px-3 py-2.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/40 text-red-600 dark:text-red-400 flex items-center gap-2 mt-1"
                      >
                        <LogOut size={16} />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <button
                        onClick={() => {
                          setPageView('login');
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-2.5 rounded-xl transition-all"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => {
                          setPageView('register');
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full text-center border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold text-xs py-2.5 rounded-xl transition-all"
                      >
                        Create Account
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
