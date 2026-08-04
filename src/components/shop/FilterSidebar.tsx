import React from 'react';
import { useStore } from '../../context/StoreContext';
import { CATEGORIES_DATA, BRANDS_LIST } from '../../data/products';
import { Category } from '../../types';
import { Search, RotateCcw, Filter, Star, Check } from 'lucide-react';

export const FilterSidebar: React.FC = () => {
  const { filters, setFilter, resetFilters, products } = useStore();

  return (
    <aside className="w-full lg:w-64 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-5 space-y-6 shrink-0 h-fit shadow-lg">
      <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
        <h3 className="font-black text-sm text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <Filter size={16} className="text-red-600 dark:text-red-500" />
          <span>Filter Catalog</span>
        </h3>
        <button
          onClick={resetFilters}
          className="text-xs font-semibold text-zinc-400 hover:text-red-600 dark:hover:text-red-400 flex items-center gap-1 transition-colors"
          title="Reset all filters"
        >
          <RotateCcw size={12} />
          <span>Reset</span>
        </button>
      </div>

      {/* Live Keyword Search */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
          Search
        </label>
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search keywords..."
            value={filters.search}
            onChange={e => setFilter('search', e.target.value)}
            className="w-full bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-xl pl-9 pr-3 py-2 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
          />
        </div>
      </div>

      {/* Category List */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
          Category
        </label>
        <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
          <button
            onClick={() => setFilter('category', 'All')}
            className={`w-full text-left text-xs font-semibold px-3 py-2 rounded-xl flex items-center justify-between transition-colors ${
              filters.category === 'All'
                ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            <span>All Categories</span>
            <span className="text-[10px] opacity-80">{products.length}</span>
          </button>
          {CATEGORIES_DATA.map(cat => (
            <button
              key={cat.name}
              onClick={() => setFilter('category', cat.name as Category)}
              className={`w-full text-left text-xs font-medium px-3 py-2 rounded-xl flex items-center justify-between transition-colors ${
                filters.category === cat.name
                  ? 'bg-red-600 text-white font-bold shadow-md shadow-red-600/20'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-[10px] opacity-70">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Brand Select */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
          Brand
        </label>
        <select
          value={filters.brand}
          onChange={e => setFilter('brand', e.target.value)}
          className="w-full bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
        >
          <option value="All">All Brands ({BRANDS_LIST.length})</option>
          {BRANDS_LIST.map(b => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* Price Slider */}
      <div>
        <div className="flex items-center justify-between text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-2">
          <span className="uppercase tracking-wider text-zinc-400">Max Price</span>
          <span className="text-red-600 dark:text-red-500 font-black">${filters.maxPrice}</span>
        </div>
        <input
          type="range"
          min="50"
          max="3000"
          step="50"
          value={filters.maxPrice}
          onChange={e => setFilter('maxPrice', Number(e.target.value))}
          className="w-full accent-red-600 cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-zinc-400 font-semibold mt-1">
          <span>$50</span>
          <span>$3,000</span>
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
          Minimum Rating
        </label>
        <div className="space-y-1">
          {[0, 4.5, 4.0, 3.5].map(ratingVal => (
            <button
              key={ratingVal}
              onClick={() => setFilter('minRating', ratingVal)}
              className={`w-full text-left text-xs font-semibold px-3 py-1.5 rounded-xl flex items-center justify-between transition-colors ${
                filters.minRating === ratingVal
                  ? 'bg-zinc-100 dark:bg-zinc-800 text-red-600 dark:text-red-400 font-bold border border-red-500/30'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
              }`}
            >
              <div className="flex items-center gap-1 text-amber-400">
                {ratingVal === 0 ? (
                  <span>All Ratings</span>
                ) : (
                  <>
                    <Star size={13} className="fill-amber-400 stroke-amber-400" />
                    <span>{ratingVal}+ Stars</span>
                  </>
                )}
              </div>
              {filters.minRating === ratingVal && <Check size={14} className="text-red-600" />}
            </button>
          ))}
        </div>
      </div>

      {/* Checkbox Toggles */}
      <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
        <label className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.onSaleOnly}
            onChange={e => setFilter('onSaleOnly', e.target.checked)}
            className="rounded text-red-600 focus:ring-red-500 w-4 h-4 accent-red-600 cursor-pointer"
          />
          <span>On Sale / Discounted</span>
        </label>

        <label className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={e => setFilter('inStockOnly', e.target.checked)}
            className="rounded text-red-600 focus:ring-red-500 w-4 h-4 accent-red-600 cursor-pointer"
          />
          <span>In Stock Only</span>
        </label>
      </div>
    </aside>
  );
};
