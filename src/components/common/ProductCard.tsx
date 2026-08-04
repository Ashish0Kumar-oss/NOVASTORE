import React from 'react';
import { Product } from '../../types';
import { useStore } from '../../context/StoreContext';
import { StarRating } from './StarRating';
import { Heart, Eye, ShoppingBag, ArrowLeftRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  listView?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, listView = false }) => {
  const {
    openProductDetails,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    toggleCompare,
    compareList
  } = useStore();

  const isWishlisted = isInWishlist(product.id);
  const isCompared = compareList.some(p => p.id === product.id);

  if (listView) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="group relative flex flex-col sm:flex-row bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300"
      >
        {/* Image Container */}
        <div className="relative w-full sm:w-56 shrink-0 aspect-[4/3] sm:aspect-square bg-zinc-100 dark:bg-zinc-800 overflow-hidden cursor-pointer"
             onClick={() => openProductDetails(product.id)}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {product.discount > 0 && (
            <span className="absolute top-3 left-3 bg-red-600 text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-md shadow-red-600/30">
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-1">
              <span className="font-semibold uppercase tracking-wider text-red-600 dark:text-red-500">{product.brand}</span>
              <span>{product.category}</span>
            </div>

            <h3
              onClick={() => openProductDetails(product.id)}
              className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 hover:text-red-600 dark:hover:text-red-500 transition-colors cursor-pointer line-clamp-1 mb-2"
            >
              {product.name}
            </h3>

            <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">
              {product.description}
            </p>

            <StarRating rating={product.rating} reviews={product.reviews} />
          </div>

          <div className="flex items-center justify-between pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/80">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-red-600 dark:text-red-500">
                ${product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-zinc-400 dark:text-zinc-500 line-through font-medium">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-2.5 rounded-xl border transition-colors ${
                  isWishlisted
                    ? 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900 text-red-600 dark:text-red-500'
                    : 'border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-red-500 hover:text-red-500'
                }`}
                title="Wishlist"
              >
                <Heart size={16} className={isWishlisted ? 'fill-red-600 dark:fill-red-500' : ''} />
              </button>

              <button
                onClick={() => setQuickViewProduct(product)}
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-red-500 hover:text-red-500 transition-colors"
                title="Quick View"
              >
                <Eye size={16} />
              </button>

              <button
                onClick={() => addToCart(product)}
                className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-md shadow-red-600/20 active:scale-95 transition-all"
              >
                <ShoppingBag size={15} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="group relative flex flex-col bg-white dark:bg-[#0F0F0F] border border-zinc-200 dark:border-white/5 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-red-600/10 hover:border-red-600/40 dark:hover:border-red-600/40 transition-all duration-300"
    >
      {/* Top Badges */}
      <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 pointer-events-none">
        {product.discount > 0 && (
          <span className="px-2 py-0.5 bg-red-600 text-[9px] font-bold rounded uppercase text-white shadow-md">
            Sale -{product.discount}%
          </span>
        )}
        {product.bestseller && (
          <span className="px-2 py-0.5 bg-zinc-800/90 text-[9px] text-zinc-200 font-bold rounded uppercase border border-white/10">
            Best Seller
          </span>
        )}
        {product.trending && !product.bestseller && (
          <span className="px-2 py-0.5 bg-zinc-700/90 text-[9px] text-zinc-200 font-bold rounded uppercase">
            New
          </span>
        )}
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute top-2.5 right-2.5 z-10 flex flex-col gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`p-1.5 rounded shadow-lg backdrop-blur-md transition-all active:scale-90 ${
            isWishlisted
              ? 'bg-red-600 text-white'
              : 'bg-zinc-900/90 border border-white/10 text-zinc-300 hover:bg-red-600 hover:text-white'
          }`}
          aria-label="Wishlist"
        >
          <Heart size={14} className={isWishlisted ? 'fill-white' : ''} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setQuickViewProduct(product);
          }}
          className="p-1.5 rounded bg-zinc-900/90 border border-white/10 text-zinc-300 hover:bg-red-600 hover:text-white shadow-lg backdrop-blur-md transition-all active:scale-90"
          aria-label="Quick View"
        >
          <Eye size={14} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleCompare(product);
          }}
          className={`p-1.5 rounded shadow-lg backdrop-blur-md transition-all active:scale-90 ${
            isCompared
              ? 'bg-red-600 text-white'
              : 'bg-zinc-900/90 border border-white/10 text-zinc-300 hover:bg-red-600 hover:text-white'
          }`}
          aria-label="Compare"
        >
          <ArrowLeftRight size={14} />
        </button>
      </div>

      {/* Image Container */}
      <div
        onClick={() => openProductDetails(product.id)}
        className="relative aspect-square w-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex-1 flex flex-col justify-between bg-white dark:bg-[#0F0F0F]">
        <div>
          <div className="flex items-center justify-between text-[10px] font-bold text-zinc-400 dark:text-zinc-500 mb-1 uppercase tracking-widest">
            <span className="text-red-600 dark:text-red-500">{product.brand}</span>
            <span>{product.category}</span>
          </div>

          <h3
            onClick={() => openProductDetails(product.id)}
            className="text-xs font-bold uppercase text-zinc-900 dark:text-zinc-100 hover:text-red-600 dark:hover:text-red-500 transition-colors cursor-pointer line-clamp-1 mb-2 tracking-tight"
          >
            {product.name}
          </h3>

          <StarRating rating={product.rating} reviews={product.reviews} size={12} />
        </div>

        <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm sm:text-base font-bold text-red-600 dark:text-red-500">
              ${product.price}.00
            </span>
            {product.originalPrice > product.price && (
              <span className="text-[10px] text-zinc-400 line-through font-medium">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product)}
            className="p-2 rounded bg-zinc-100 dark:bg-white/5 hover:bg-red-600 hover:text-white text-zinc-700 dark:text-zinc-200 transition-colors"
            title="Add to Cart"
          >
            <ShoppingBag size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
