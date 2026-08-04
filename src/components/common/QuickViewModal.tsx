import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { X, Heart, ShoppingBag, Star, Check, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { StarRating } from './StarRating';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist, openProductDetails } = useStore();

  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isWishlisted = isInWishlist(product.id);
  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const activeColor = selectedColor || (product.colors?.[0] || '');
  const activeSize = selectedSize || (product.sizes?.[0] || '');

  const handleAddToCart = () => {
    addToCart(product, quantity, activeColor, activeSize);
    setQuickViewProduct(null);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-colors"
          >
            <X size={18} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Gallery Column */}
            <div className="p-6 bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-between">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-4">
                <img
                  src={gallery[selectedImgIndex] || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                {product.discount > 0 && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white font-black text-xs px-3 py-1 rounded-full shadow-lg">
                    -{product.discount}% OFF
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {gallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIndex(idx)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        selectedImgIndex === idx
                          ? 'border-red-600 ring-2 ring-red-600/30'
                          : 'border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info Column */}
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-red-600 dark:text-red-500 uppercase tracking-widest mb-1">
                  <span>{product.brand}</span>
                  <span className="text-zinc-400 font-normal">{product.category}</span>
                </div>

                <h2 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-zinc-100 mb-2">
                  {product.name}
                </h2>

                <div className="flex items-center gap-3 mb-4">
                  <StarRating rating={product.rating} reviews={product.reviews} size={15} />
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-md">
                    In Stock ({product.stock} units)
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-3xl font-black text-red-600 dark:text-red-500">
                    ${product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-base text-zinc-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Colors */}
                {product.colors && product.colors.length > 0 && (
                  <div className="mb-5">
                    <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                      Color: <span className="text-red-600 dark:text-red-400 font-normal">{activeColor}</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map(color => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`text-xs px-3 py-1.5 rounded-xl border font-medium transition-all ${
                            activeColor === color
                              ? 'border-red-600 bg-red-600 text-white shadow-md shadow-red-600/20'
                              : 'border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sizes */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="mb-5">
                    <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                      Size: <span className="text-red-600 dark:text-red-400 font-normal">{activeSize}</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map(size => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`text-xs px-3 py-1.5 rounded-xl border font-bold transition-all ${
                            activeSize === size
                              ? 'border-red-600 bg-red-600 text-white shadow-md shadow-red-600/20'
                              : 'border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity & Actions */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-800">
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="px-3 py-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 text-sm font-bold text-zinc-900 dark:text-zinc-100 min-w-[2rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(q => q + 1)}
                      className="px-3 py-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 font-bold"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-sm py-3 px-6 rounded-xl shadow-lg shadow-red-600/30 active:scale-95 transition-all"
                  >
                    <ShoppingBag size={18} />
                    <span>Add to Cart</span>
                  </button>

                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`p-3 rounded-xl border transition-colors ${
                      isWishlisted
                        ? 'bg-red-50 dark:bg-red-950/50 border-red-300 dark:border-red-900 text-red-600 dark:text-red-500'
                        : 'border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-red-500 hover:text-red-500'
                    }`}
                  >
                    <Heart size={20} className={isWishlisted ? 'fill-red-600' : ''} />
                  </button>
                </div>
              </div>

              {/* View Full Details link */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-4 text-[11px] text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1"><Truck size={13} className="text-red-500" /> Free Express Shipping</span>
                  <span className="flex items-center gap-1"><RotateCcw size={13} className="text-red-500" /> 30-Day Returns</span>
                </div>

                <button
                  onClick={() => {
                    setQuickViewProduct(null);
                    openProductDetails(product.id);
                  }}
                  className="text-xs font-bold text-red-600 dark:text-red-500 hover:underline"
                >
                  Full Details &rarr;
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
