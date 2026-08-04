import React, { useState, useEffect } from 'react';
import { X, Mail, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '../../context/StoreContext';

export const NewsletterModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const { addToast } = useStore();

  useEffect(() => {
    const dismissed = sessionStorage.getItem('novastore_newsletter_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('novastore_newsletter_dismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast('Please enter a valid email address', 'error');
      return;
    }
    addToast('Thank you for subscribing! Your 15% discount code is NOVA15', 'success');
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="relative w-full max-w-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden"
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:bg-red-600 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>

          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/10">
              <Sparkles size={28} />
            </div>

            <span className="text-xs font-bold text-red-600 dark:text-red-500 uppercase tracking-widest">
              Exclusive VIP Offer
            </span>

            <h2 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 mt-1 mb-2">
              Get 15% Off Your First Order
            </h2>

            <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Subscribe to the NovaStore newsletter to receive instant access to luxury releases, flash deals, and curated style recommendations.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl pl-11 pr-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600 dark:focus:border-red-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-sm py-3 rounded-xl shadow-lg shadow-red-600/30 transition-all active:scale-95"
              >
                Claim My 15% Off Code
              </button>
            </form>

            <p className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-4">
              We respect your privacy. Unsubscribe anytime with one click.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
