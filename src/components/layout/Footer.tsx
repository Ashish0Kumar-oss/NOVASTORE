import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { Mail, ShieldCheck, Truck, RotateCcw, Headphones, Instagram, Twitter, Facebook, Youtube, Linkedin, ArrowRight } from 'lucide-react';
import { Category } from '../../types';

export const Footer: React.FC = () => {
  const { setPageView, setFilter, addToast } = useStore();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleCategoryClick = (cat: Category) => {
    setFilter('category', cat);
    setPageView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      addToast('Please enter a valid email address', 'error');
      return;
    }
    addToast('Subscribed to NovaStore VIP Newsletter! Use code NOVA15 for 15% off.', 'success');
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#0A0A0A] text-zinc-300 pt-16 pb-8 border-t border-white/5 mt-20">
      {/* Top Value Badges Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-xl bg-[#0F0F0F] border border-white/5">
          <div className="flex items-center gap-4 p-2">
            <div className="w-10 h-10 rounded-lg bg-red-600/20 text-red-500 border border-red-600/30 flex items-center justify-center shrink-0">
              <Truck size={20} />
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-white">Free Express Shipping</h4>
              <p className="text-[11px] text-zinc-500">On all orders over $100</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-10 h-10 rounded-lg bg-red-600/20 text-red-500 border border-red-600/30 flex items-center justify-center shrink-0">
              <RotateCcw size={20} />
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-white">30-Day Easy Returns</h4>
              <p className="text-[11px] text-zinc-500">Hassle-free guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-10 h-10 rounded-lg bg-red-600/20 text-red-500 border border-red-600/30 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-white">100% Secure Checkout</h4>
              <p className="text-[11px] text-zinc-500">256-Bit SSL Encrypted</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-10 h-10 rounded-lg bg-red-600/20 text-red-500 border border-red-600/30 flex items-center justify-center shrink-0">
              <Headphones size={20} />
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-white">24/7 VIP Concierge</h4>
              <p className="text-[11px] text-zinc-500">Live support anytime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
        
        {/* Brand info */}
        <div className="lg:col-span-2 space-y-4">
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

          <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
            Experience the ultimate fusion of minimal luxury, geometric craftsmanship, and high-performance products. Discover the new Nova Series.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a href="#social" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-red-600 hover:text-red-500 transition-colors">
              <span className="text-xs font-bold">IG</span>
            </a>
            <a href="#social" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-red-600 hover:text-red-500 transition-colors">
              <span className="text-xs font-bold">TW</span>
            </a>
            <a href="#social" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-red-600 hover:text-red-500 transition-colors">
              <span className="text-xs font-bold">FB</span>
            </a>
            <a href="#social" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-red-600 hover:text-red-500 transition-colors">
              <span className="text-xs font-bold">YT</span>
            </a>
          </div>
        </div>

        {/* Categories column */}
        <div>
          <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Shop Collections</h5>
          <ul className="space-y-2.5 text-xs text-zinc-400">
            {['Electronics', 'Fashion', 'Shoes', 'Watches', 'Furniture', 'Gaming'].map(cat => (
              <li key={cat}>
                <button
                  onClick={() => handleCategoryClick(cat as Category)}
                  className="hover:text-red-500 transition-colors"
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Care column */}
        <div>
          <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Customer Care</h5>
          <ul className="space-y-2.5 text-xs text-zinc-400">
            <li><button onClick={() => setPageView('faq')} className="hover:text-red-500 transition-colors">Help Center & FAQ</button></li>
            <li><button onClick={() => setPageView('orders')} className="hover:text-red-500 transition-colors">Order Tracking</button></li>
            <li><button onClick={() => setPageView('return-refund-policy')} className="hover:text-red-500 transition-colors">Return & Refund Policy</button></li>
            <li><button onClick={() => setPageView('about')} className="hover:text-red-500 transition-colors">About NovaStore</button></li>
            <li><button onClick={() => setPageView('contact')} className="hover:text-red-500 transition-colors">Contact Support</button></li>
          </ul>
        </div>

        {/* Newsletter column */}
        <div>
          <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Newsletter</h5>
          <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
            Subscribe to get special discounts and flash deal alerts.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="space-y-2">
            <div className="relative">
              <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="email"
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest py-2.5 rounded transition-all shadow-md shadow-red-600/20"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom copyright & payment icons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
        <p>&copy; {new Date().getFullYear()} NOVASTORE. All rights reserved. Redefining Elegance.</p>
        
        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <button onClick={() => setPageView('privacy-policy')} className="hover:text-red-500 transition-colors">Privacy Policy</button>
          <button onClick={() => setPageView('terms-conditions')} className="hover:text-red-500 transition-colors">Terms of Service</button>
          <button onClick={() => setPageView('return-refund-policy')} className="hover:text-red-500 transition-colors">Return Policy</button>
          <button onClick={() => setPageView('disclaimer')} className="hover:text-red-500 transition-colors">Disclaimer</button>
        </div>
      </div>
    </footer>
  );
};
