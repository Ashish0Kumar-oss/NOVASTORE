import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ShoppingBag, Trash2, ArrowRight, Tag, ShieldCheck, Truck, ArrowLeft } from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    cartSubtotal,
    appliedCoupon,
    applyCoupon,
    setPageView,
    openProductDetails
  } = useStore();

  const [couponInput, setCouponInput] = useState('');

  const shippingFee = cartSubtotal > 100 || cart.length === 0 ? 0 : 15;
  const freeShippingThreshold = 100;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingPercent = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  const tax = Math.round(cartSubtotal * 0.08 * 100) / 100;
  const discountAmount = appliedCoupon ? appliedCoupon.discountAmount : 0;
  const grandTotal = Math.max(0, cartSubtotal + shippingFee + tax - discountAmount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput) {
      applyCoupon(couponInput);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <Breadcrumbs />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            Shopping Cart <span className="text-sm bg-red-600 text-white font-bold px-3 py-0.5 rounded-full">{cart.length} Items</span>
          </h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Review your items and proceed to secure checkout.
          </p>
        </div>

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="text-xs font-semibold text-zinc-400 hover:text-red-600 flex items-center gap-1 transition-colors"
          >
            <Trash2 size={13} />
            <span>Clear Cart</span>
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-12 text-center my-8 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-950/50 text-red-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/10">
            <ShoppingBag size={32} />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Your Shopping Cart is Empty</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto mb-6">
            Looks like you haven't added any luxury items to your bag yet. Explore our curated catalog!
          </p>
          <button
            onClick={() => setPageView('shop')}
            className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs px-8 py-3.5 rounded-2xl shadow-xl shadow-red-600/30 hover:scale-105 transition-all"
          >
            Explore Shop Catalog
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Cart Items List (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Free Shipping Progress */}
            <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 p-4 rounded-2xl text-xs space-y-2">
              <div className="flex items-center justify-between font-bold text-zinc-900 dark:text-zinc-100">
                <span className="flex items-center gap-1.5">
                  <Truck size={16} className="text-red-600" />
                  {amountToFreeShipping === 0
                    ? '🎉 You qualify for FREE Express Shipping!'
                    : `Add $${(amountToFreeShipping || 0).toFixed(2)} more for FREE Express Shipping!`}
                </span>
                <span className="text-red-600">{Math.round(freeShippingPercent)}%</span>
              </div>
              <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-600 to-rose-500 transition-all duration-500"
                  style={{ width: `${freeShippingPercent}%` }}
                />
              </div>
            </div>

            {/* Items */}
            <div className="space-y-3">
              {cart.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:border-red-500/30 transition-all"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      onClick={() => openProductDetails(item.product.id)}
                      className="w-20 h-20 object-cover rounded-xl bg-zinc-100 dark:bg-zinc-800 shrink-0 cursor-pointer"
                    />
                    <div>
                      <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">{item.product.brand}</span>
                      <h4
                        onClick={() => openProductDetails(item.product.id)}
                        className="font-bold text-sm text-zinc-900 dark:text-zinc-100 hover:text-red-600 transition-colors cursor-pointer line-clamp-1"
                      >
                        {item.product.name}
                      </h4>

                      <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                        {item.selectedColor && <span>Color: <strong>{item.selectedColor}</strong></span>}
                        {item.selectedSize && <span>Size: <strong>{item.selectedSize}</strong></span>}
                      </div>

                      <div className="text-sm font-black text-red-600 dark:text-red-500 mt-1">
                        ${item.product.price}
                      </div>
                    </div>
                  </div>

                  {/* Qty & Controls */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-xl bg-zinc-50 dark:bg-zinc-800">
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity - 1, item.selectedColor, item.selectedSize)}
                        className="px-2.5 py-1 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 font-bold"
                      >
                        -
                      </button>
                      <span className="px-3 text-xs font-bold text-zinc-900 dark:text-zinc-100">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity + 1, item.selectedColor, item.selectedSize)}
                        className="px-2.5 py-1 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 font-bold"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right min-w-[70px]">
                      <div className="text-sm font-black text-zinc-900 dark:text-zinc-100">
                        ${item.product.price * item.quantity}
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id, item.selectedColor, item.selectedSize)}
                      className="p-2 text-zinc-400 hover:text-red-600 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setPageView('shop')}
              className="inline-flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-red-600 pt-2"
            >
              <ArrowLeft size={14} />
              <span>Continue Shopping</span>
            </button>
          </div>

          {/* Order Summary Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-xl space-y-6">
              <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-100 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                Order Summary
              </h3>

              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Promo / Coupon Code
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                      type="text"
                      placeholder="Try 'NOVA20'"
                      value={couponInput}
                      onChange={e => setCouponInput(e.target.value)}
                      className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl pl-9 pr-3 py-2 text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-red-600 dark:hover:bg-red-500 dark:hover:text-white font-bold text-xs px-4 rounded-xl transition-all"
                  >
                    Apply
                  </button>
                </div>
                {appliedCoupon && (
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-between pt-1">
                    <span>Code ({appliedCoupon.code}) Applied</span>
                    <span>-${appliedCoupon.discountAmount}</span>
                  </p>
                )}
              </form>

              {/* Price Breakdown */}
              <div className="space-y-3 text-xs text-zinc-600 dark:text-zinc-400 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">${(cartSubtotal || 0).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax (8%)</span>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">${(tax || 0).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">
                    {shippingFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `$${shippingFee}`}
                  </span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                    <span>Coupon Discount</span>
                    <span>-${(discountAmount || 0).toFixed(2)}</span>
                  </div>
                )}
                <hr className="border-zinc-100 dark:border-zinc-800" />
                <div className="flex justify-between text-base font-black text-zinc-900 dark:text-zinc-100 pt-1">
                  <span>Grand Total</span>
                  <span className="text-red-600 dark:text-red-500">${(grandTotal || 0).toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => setPageView('checkout')}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-sm py-4 rounded-2xl shadow-xl shadow-red-600/30 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={18} />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 pt-2">
                <ShieldCheck size={14} className="text-red-500" />
                <span>256-Bit SSL Encrypted & Protected Checkout</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
