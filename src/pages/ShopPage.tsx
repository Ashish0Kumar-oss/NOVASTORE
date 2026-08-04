import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ProductGrid } from '../components/shop/ProductGrid';

export const ShopPage: React.FC = () => {
  return (
    <div className="space-y-4">
      <Breadcrumbs />

      <div className="bg-gradient-to-r from-red-950/30 via-zinc-900/20 to-transparent p-6 sm:p-8 rounded-3xl border border-red-500/10 mb-6">
        <h1 className="text-2xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-100">
          NovaStore Shop Catalog
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 max-w-xl">
          Discover high-performance electronics, Italian footwear, cashmeres, titanium watches, and luxury home furnishings.
        </p>
      </div>

      <ProductGrid />
    </div>
  );
};
