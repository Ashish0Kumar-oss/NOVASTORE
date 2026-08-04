import React from 'react';
import { useStore } from '../../context/StoreContext';
import { LayoutGrid, List, SlidersHorizontal, X } from 'lucide-react';

interface SortHeaderProps {
  totalResults: number;
  listView: boolean;
  setListView: (val: boolean) => void;
  onOpenMobileFilter?: () => void;
}

export const SortHeader: React.FC<SortHeaderProps> = ({
  totalResults,
  listView,
  setListView,
  onOpenMobileFilter
}) => {
  const { filters, setFilter, resetFilters } = useStore();

  const activeFiltersCount =
    (filters.search ? 1 : 0) +
    (filters.category !== 'All' ? 1 : 0) +
    (filters.brand !== 'All' ? 1 : 0) +
    (filters.maxPrice < 3000 ? 1 : 0) +
    (filters.minRating > 0 ? 1 : 0) +
    (filters.onSaleOnly ? 1 : 0) +
    (filters.inStockOnly ? 1 : 0);

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-4 mb-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Left count & active badges */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
        {onOpenMobileFilter && (
          <button
            onClick={onOpenMobileFilter}
            className="lg:hidden flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-bold px-3 py-2 rounded-xl"
          >
            <SlidersHorizontal size={14} className="text-red-600" />
            <span>Filters ({activeFiltersCount})</span>
          </button>
        )}

        <div>
          <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
            Showing <strong className="text-red-600 dark:text-red-500">{totalResults}</strong> Products
          </span>
          {filters.category !== 'All' && (
            <span className="text-xs text-zinc-400 ml-1">in "{filters.category}"</span>
          )}
        </div>
      </div>

      {/* Right Sort & View Controls */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
        {/* Active badges preview */}
        {activeFiltersCount > 0 && (
          <button
            onClick={resetFilters}
            className="hidden md:flex items-center gap-1 text-[11px] font-bold text-red-600 bg-red-50 dark:bg-red-950/40 px-2.5 py-1 rounded-lg border border-red-200 dark:border-red-900 hover:bg-red-100 transition-colors"
          >
            <span>Clear {activeFiltersCount} Filters</span>
            <X size={12} />
          </button>
        )}

        {/* Sort Select */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-zinc-400 font-semibold hidden xs:inline">Sort:</span>
          <select
            value={filters.sortBy}
            onChange={e => setFilter('sortBy', e.target.value as any)}
            className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 font-bold text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-red-600 cursor-pointer"
          >
            <option value="featured">Featured First</option>
            <option value="bestseller">Best Sellers</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest Arrivals</option>
          </select>
        </div>

        {/* View Layout Toggle */}
        <div className="flex items-center p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
          <button
            onClick={() => setListView(false)}
            className={`p-1.5 rounded-lg transition-colors ${
              !listView ? 'bg-white dark:bg-zinc-900 text-red-600 shadow-sm' : 'text-zinc-400 hover:text-zinc-700'
            }`}
            title="Grid View"
          >
            <LayoutGrid size={16} />
          </button>
          <button
            onClick={() => setListView(true)}
            className={`p-1.5 rounded-lg transition-colors ${
              listView ? 'bg-white dark:bg-zinc-900 text-red-600 shadow-sm' : 'text-zinc-400 hover:text-zinc-700'
            }`}
            title="List View"
          >
            <List size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
