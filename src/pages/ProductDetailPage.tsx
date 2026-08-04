import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { StarRating } from '../components/common/StarRating';
import { ProductCard } from '../components/common/ProductCard';
import { Review } from '../types';
import {
  Heart,
  ShoppingBag,
  Truck,
  RotateCcw,
  ShieldCheck,
  Check,
  Star,
  ArrowLeftRight,
  ZoomIn,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

export const ProductDetailPage: React.FC = () => {
  const {
    selectedProductId,
    products,
    addToCart,
    toggleWishlist,
    isInWishlist,
    toggleCompare,
    compareList,
    setPageView,
    recentlyViewed,
    addToast
  } = useStore();

  const product = products.find(p => p.id === selectedProductId) || products[0];

  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'reviews'>('desc');
  const [isZoomed, setIsZoomed] = useState(false);

  // Review Submission State
  const [newReview, setNewReview] = useState({ name: '', rating: 5, title: '', comment: '' });
  const [localReviews, setLocalReviews] = useState<Review[]>([
    {
      id: 'rev-1',
      productId: product.id,
      userName: 'David Miller',
      rating: 5,
      title: 'Exceeded Expectations',
      comment: 'Top-tier build quality and performance. Exactly as described, fast dispatch too!',
      date: '2026-07-25',
      verifiedPurchase: true
    },
    {
      id: 'rev-2',
      productId: product.id,
      userName: 'Sarah Jenkins',
      rating: 5,
      title: 'Worth Every Penny',
      comment: 'Highly recommended! Premium feel, comfortable design, and sleek aesthetics.',
      date: '2026-07-20',
      verifiedPurchase: true
    }
  ]);

  const isWishlisted = isInWishlist(product.id);
  const isCompared = compareList.some(p => p.id === product.id);

  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const activeColor = selectedColor || (product.colors?.[0] || '');
  const activeSize = selectedSize || (product.sizes?.[0] || '');

  const handleAddToCart = () => {
    addToCart(product, quantity, activeColor, activeSize);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, activeColor, activeSize);
    setPageView('checkout');
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.title || !newReview.comment) {
      addToast('Please fill out all review fields', 'error');
      return;
    }
    const created: Review = {
      id: 'rev-' + Date.now(),
      productId: product.id,
      userName: newReview.name,
      rating: newReview.rating,
      title: newReview.title,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0],
      verifiedPurchase: true
    };
    setLocalReviews(prev => [created, ...prev]);
    setNewReview({ name: '', rating: 5, title: '', comment: '' });
    addToast('Thank you! Your verified review has been posted.', 'success');
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="space-y-8 pb-12">
      <Breadcrumbs currentTitle={product.name} category={product.category} />

      {/* Main Product Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 lg:p-10 shadow-xl">
        
        {/* Gallery Column (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div
            onClick={() => setIsZoomed(!isZoomed)}
            className="relative aspect-square w-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 cursor-zoom-in group"
          >
            <img
              src={gallery[selectedImgIndex] || product.image}
              alt={product.name}
              className={`w-full h-full object-cover object-center transition-transform duration-500 ${
                isZoomed ? 'scale-150' : 'group-hover:scale-105'
              }`}
            />
            {product.discount > 0 && (
              <span className="absolute top-4 left-4 bg-red-600 text-white font-black text-xs px-3 py-1 rounded-full shadow-lg">
                -{product.discount}% OFF
              </span>
            )}

            <div className="absolute bottom-4 right-4 p-2 rounded-xl bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn size={16} />
            </div>
          </div>

          {/* Thumbnails list */}
          {gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImgIndex(idx)}
                  className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 shrink-0 transition-all ${
                    selectedImgIndex === idx
                      ? 'border-red-600 ring-2 ring-red-600/30'
                      : 'border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Gallery item" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info Column (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-red-600 dark:text-red-500 uppercase tracking-widest mb-1">
              <span>{product.brand}</span>
              <span className="text-zinc-400 font-normal">{product.category}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-100 mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <StarRating rating={product.rating} reviews={product.reviews} size={16} />
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg">
                In Stock ({product.stock} units)
              </span>
            </div>

            <div className="flex items-baseline gap-4 mb-6 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
              <span className="text-4xl font-black text-red-600 dark:text-red-500">
                ${product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-zinc-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
              <span className="text-xs bg-red-600 text-white font-bold px-2.5 py-1 rounded-md ml-auto">
                Save ${product.originalPrice - product.price}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Color selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                  Color Option: <span className="text-red-600 dark:text-red-400 font-normal">{activeColor}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`text-xs px-4 py-2 rounded-xl border font-semibold transition-all ${
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

            {/* Size selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                  Size Option: <span className="text-red-600 dark:text-red-400 font-normal">{activeSize}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`text-xs px-4 py-2 rounded-xl border font-bold transition-all ${
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

            {/* Quantity Selector & Main Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-6">
              {/* Qty */}
              <div className="flex items-center justify-between border border-zinc-200 dark:border-zinc-700 rounded-2xl bg-zinc-50 dark:bg-zinc-800 p-1.5 min-w-[120px]">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-bold hover:bg-zinc-200"
                >
                  -
                </button>
                <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100 px-3">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-bold hover:bg-zinc-200"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-sm py-3.5 px-6 rounded-2xl shadow-xl shadow-red-600/30 active:scale-95 transition-all"
              >
                <ShoppingBag size={18} />
                <span>Add to Cart</span>
              </button>

              {/* Buy Now */}
              <button
                onClick={handleBuyNow}
                className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-sm py-3.5 px-6 rounded-2xl hover:bg-red-600 dark:hover:bg-red-500 dark:hover:text-white transition-all shadow-md"
              >
                Buy Now
              </button>

              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3.5 rounded-2xl border transition-colors ${
                  isWishlisted
                    ? 'bg-red-50 dark:bg-red-950/50 border-red-300 text-red-600'
                    : 'border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-red-500'
                }`}
                title="Wishlist"
              >
                <Heart size={20} className={isWishlisted ? 'fill-red-600' : ''} />
              </button>

              {/* Compare */}
              <button
                onClick={() => toggleCompare(product)}
                className={`p-3.5 rounded-2xl border transition-colors ${
                  isCompared
                    ? 'bg-red-50 dark:bg-red-950/50 border-red-300 text-red-600'
                    : 'border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-red-500'
                }`}
                title="Compare"
              >
                <ArrowLeftRight size={20} />
              </button>
            </div>
          </div>

          {/* Value Badges */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-zinc-100 dark:border-zinc-800 text-[11px] text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-1.5"><Truck size={14} className="text-red-500 shrink-0" /> Free Express Delivery</div>
            <div className="flex items-center gap-1.5"><RotateCcw size={14} className="text-red-500 shrink-0" /> 30-Day Money Back</div>
            <div className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-red-500 shrink-0" /> 2-Year Full Warranty</div>
          </div>
        </div>
      </div>

      {/* Detail Tabs: Description, Specs, Reviews */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 lg:p-10 shadow-lg">
        <div className="flex items-center gap-6 border-b border-zinc-200 dark:border-zinc-800 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('desc')}
            className={`pb-4 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'desc'
                ? 'border-red-600 text-red-600 dark:text-red-500'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            Detailed Overview
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-4 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'specs'
                ? 'border-red-600 text-red-600 dark:text-red-500'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-4 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'reviews'
                ? 'border-red-600 text-red-600 dark:text-red-500'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            Verified Reviews ({localReviews.length + product.reviews})
          </button>
        </div>

        {activeTab === 'desc' && (
          <div className="space-y-4 max-w-3xl text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            <p>{product.description}</p>
            <p>
              Crafted with relentless attention to detail, every element of the {product.name} reflects NovaStore’s commitment to minimal luxury, durable engineering, and seamless comfort.
            </p>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="max-w-2xl">
            <table className="w-full text-xs text-left">
              <tbody>
                {Object.entries(product.specifications).map(([key, val], idx) => (
                  <tr key={key} className={idx % 2 === 0 ? 'bg-zinc-50 dark:bg-zinc-800/40' : ''}>
                    <td className="p-3 font-bold text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 w-1/3">
                      {key}
                    </td>
                    <td className="p-3 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
                      {val}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Reviews List */}
            <div className="lg:col-span-7 space-y-4">
              {localReviews.map(rev => (
                <div key={rev.id} className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-zinc-900 dark:text-zinc-100">{rev.userName}</span>
                    <span className="text-[10px] text-zinc-400">{rev.date}</span>
                  </div>
                  <StarRating rating={rev.rating} size={13} showText={false} />
                  <h5 className="font-bold text-xs text-zinc-800 dark:text-zinc-200">{rev.title}</h5>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{rev.comment}</p>
                </div>
              ))}
            </div>

            {/* Submit Review Form */}
            <div className="lg:col-span-5 bg-zinc-50 dark:bg-zinc-800/30 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                <MessageSquare size={16} className="text-red-600" />
                <span>Write a Verified Review</span>
              </h4>

              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={e => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1">Rating</label>
                  <select
                    value={newReview.rating}
                    onChange={e => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 Stars)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 Stars)</option>
                    <option value={3}>⭐⭐⭐ (3 Stars)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1">Review Title</label>
                  <input
                    type="text"
                    required
                    value={newReview.title}
                    onChange={e => setNewReview({ ...newReview, title: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1">Review Comment</label>
                  <textarea
                    required
                    rows={3}
                    value={newReview.comment}
                    onChange={e => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-3 rounded-xl shadow-md transition-all"
                >
                  Post Review
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="pt-6">
          <h3 className="text-xl font-black text-zinc-900 dark:text-zinc-100 mb-6">
            Related Products in {product.category}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(rel => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}

      {/* Recently Viewed Bar */}
      {recentlyViewed.length > 0 && (
        <section className="pt-6">
          <h3 className="text-base font-bold text-zinc-500 uppercase tracking-wider mb-4">
            Recently Viewed
          </h3>
          <div className="flex items-center gap-4 overflow-x-auto pb-4">
            {recentlyViewed.map(rv => (
              <div
                key={rv.id}
                onClick={() => {
                  useStore().openProductDetails(rv.id);
                }}
                className="w-36 shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-2.5 cursor-pointer hover:border-red-500 transition-all shadow-sm"
              >
                <img src={rv.image} alt={rv.name} className="w-full h-24 object-cover rounded-xl mb-2" />
                <div className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 truncate">{rv.name}</div>
                <div className="text-xs font-black text-red-600">${rv.price}</div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
