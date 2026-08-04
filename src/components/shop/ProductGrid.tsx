import React, { useState, useMemo } from 'react';
import { useStore } from '../../context/StoreContext';
import { ProductCard } from '../common/ProductCard';
import { SkeletonCard } from '../common/SkeletonCard';
import { SortHeader } from './SortHeader';
import { FilterSidebar } from './FilterSidebar';
import { SearchX, ChevronLeft, ChevronRight } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  const { products, filters, resetFilters } = useStore();
  const [listView, setListView] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filter & Sort Products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (filters.search.trim()) {
      const query = filters.search.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query)
      );
    }

    // Category
    if (filters.category !== 'All') {
      result = result.filter(p => p.category === filters.category);
    }

    // Brand
    if (filters.brand !== 'All') {
      result = result.filter(p => p.brand === filters.brand);
    }

    // Price
    result = result.filter(p => p.price <= filters.maxPrice);

    // Rating
    if (filters.minRating > 0) {
      result = result.filter(p => p.rating >= filters.minRating);
    }

    // In Stock
    if (filters.inStockOnly) {
      result = result.filter(p => p.stock > 0);
    }

    // On Sale
    if (filters.onSaleOnly) {
      result = result.filter(p => p.discount > 0);
    }

    // Sorting
    switch (filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'bestseller':
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      default:
        // Featured
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [products, filters]);

  // Reset page to 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex flex-col lg:flex-row gap-8 py-4">
      {/* Desktop Filter Sidebar */}
      <div className="hidden lg:block">
        <FilterSidebar />
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-[9990] flex lg:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileFilterOpen(false)} />
          <div className="relative z-10 w-full max-w-xs bg-white dark:bg-zinc-900 h-full overflow-y-auto p-4 shadow-2xl">
            <FilterSidebar />
          </div>
        </div>
      )}

      {/* Main Grid Column */}
      <div className="flex-1 min-w-0">
        <SortHeader
          totalResults={filteredProducts.length}
          listView={listView}
          setListView={setListView}
          onOpenMobileFilter={() => setIsMobileFilterOpen(true)}
        />

        {filteredProducts.length === 0 ? (
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-12 text-center my-6 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-950/50 text-red-600 flex items-center justify-center mx-auto mb-4">
              <SearchX size={32} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">No Matching Products Found</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-md mx-auto mb-6">
              We couldn't find any items matching your selected criteria. Try resetting filters or searching with different terms.
            </p>
            <button
              onClick={resetFilters}
              className="bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-lg shadow-red-600/20 hover:scale-105 transition-all"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <>
            <div className={listView ? 'space-y-4' : 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6'}>
              {paginatedProducts.map(product => (
                <ProductCard key={product.id} product={product} listView={listView} />
              ))}
            </div>

            {/* Pagination Bar */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 disabled:opacity-40 hover:border-red-500 hover:text-red-500 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>

                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNum = i + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 rounded-xl font-bold text-xs transition-all ${
                        currentPage === pageNum
                          ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                          : 'border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-red-500'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 disabled:opacity-40 hover:border-red-500 hover:text-red-500 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
