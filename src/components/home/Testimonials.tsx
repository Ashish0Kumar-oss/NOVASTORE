import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Eleanor Vance',
    role: 'Verified Buyer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    title: 'Outstanding Quality & Fast Shipping',
    comment: 'Ordered the AuraSound Max Headphones and received them in 48 hours! The noise cancellation is world-class and packaging felt like opening a luxury timepiece.'
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Verified Buyer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    title: 'Unrivaled Craftsmanship',
    comment: 'The Italian Leather Trench Coat exceeded every expectation. The leather is rich, soft, and tailored to perfection. NovaStore is now my default luxury retailer.'
  },
  {
    id: 3,
    name: 'Sophia Chen',
    role: 'Verified Buyer',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    title: 'Customer Concierge is 10/10',
    comment: 'I needed to modify my order address after purchasing. Their live chat resolved it in under 2 minutes with zero friction. Truly top-tier customer service!'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
          Client Feedback
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-100 mt-1">
          Loved by Thousands Worldwide
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2">
          Read real experiences from our community of discerning shoppers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS_DATA.map((rev, idx) => (
          <motion.div
            key={rev.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 rounded-3xl shadow-lg hover:shadow-xl hover:border-red-500/30 transition-all flex flex-col justify-between"
          >
            <Quote size={40} className="text-red-600/10 dark:text-red-500/10 absolute top-4 right-4" />

            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <Star key={i} size={15} className="fill-amber-400 stroke-amber-400" />
                ))}
              </div>

              <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-2">
                "{rev.title}"
              </h4>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed italic mb-6">
                "{rev.comment}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-full object-cover border border-red-500/30" />
              <div>
                <h5 className="font-bold text-xs text-zinc-900 dark:text-zinc-100 flex items-center gap-1">
                  <span>{rev.name}</span>
                  <CheckCircle2 size={13} className="text-red-600 dark:text-red-500" />
                </h5>
                <span className="text-[10px] text-zinc-400 font-medium">{rev.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
