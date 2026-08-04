import React from 'react';
import { useStore } from '../../context/StoreContext';
import { CATEGORIES_DATA } from '../../data/products';
import { Category } from '../../types';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const CategoryGrid: React.FC = () => {
  const { setPageView, setFilter } = useStore();

  const handleCategorySelect = (category: Category) => {
    setFilter('category', category);
    setPageView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4 border-b border-white/5 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-600 dark:text-red-500">
            Curated Department Collections
          </span>
          <h2 className="text-xl sm:text-2xl font-black uppercase text-zinc-900 dark:text-zinc-100 mt-1">
            Shop By Category
          </h2>
        </div>
        <button
          onClick={() => {
            setFilter('category', 'All');
            setPageView('shop');
          }}
          className="text-xs font-bold text-zinc-400 hover:text-red-500 uppercase tracking-widest flex items-center gap-1 transition-colors"
        >
          <span>View All 8 Categories</span>
          <ArrowUpRight size={14} />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {CATEGORIES_DATA.map((cat, idx) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            viewport={{ once: true }}
            onClick={() => handleCategorySelect(cat.name as Category)}
            className="group relative h-48 sm:h-56 rounded-xl overflow-hidden cursor-pointer border border-zinc-200 dark:border-white/5 shadow-md hover:shadow-2xl hover:shadow-red-600/10 hover:border-red-600/40 transition-all duration-300 bg-[#0F0F0F]"
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover object-center opacity-75 group-hover:scale-110 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:from-black/90 transition-all" />

            {/* Floating content */}
            <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
              <div className="flex justify-end">
                <span className="text-[9px] font-bold text-white bg-red-600 uppercase tracking-wider px-2 py-0.5 rounded shadow-md">
                  {cat.count} Items
                </span>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-base font-bold uppercase tracking-tight text-white group-hover:text-red-500 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-0.5">Explore Series &rarr;</p>
                </div>

                <div className="w-8 h-8 rounded bg-white/10 group-hover:bg-red-600 backdrop-blur-md text-white flex items-center justify-center transform group-hover:translate-x-1 transition-all">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
