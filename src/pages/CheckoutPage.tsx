import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ShippingInfo, PaymentInfo, Order } from '../types';
import {
  CheckCircle2,
  CreditCard,
  Truck,
  ShieldCheck,
  Lock,
  ArrowRight,
  ArrowLeft,
  QrCode,
  Banknote,
  Package,
  Printer
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CheckoutPage: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    appliedCoupon,
    placeOrder,
    setPageView,
    user,
    addToast
  } = useStore();

  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    fullName: user?.fullName || 'Alex Vance',
    email: user?.email || 'alex.vance@example.com',
    phone: user?.phone || '+1 (555) 234-5678',
    address: user?.address || '742 Evergreen Terrace',
    city: user?.city || 'San Francisco',
    state: user?.state || 'CA',
    zipCode: user?.zipCode || '94107',
    shippingMethod: 'express'
  });

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    method: 'card',
    cardNumber: '4242 4242 4242 4242',
    cardHolder: user?.fullName || 'Alex Vance',
    expiry: '12/28',
    cvv: '888',
    upiId: 'alex@okaxis'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [placedOrder, setPlacedOrder] = useState<Order | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Financials
  const shipFee = shippingInfo.shippingMethod === 'overnight' ? 29 : shippingInfo.shippingMethod === 'express' ? 19 : cartSubtotal > 100 ? 0 : 15;
  const tax = Math.round(cartSubtotal * 0.08 * 100) / 100;
  const discountAmount = appliedCoupon ? appliedCoupon.discountAmount : 0;
  const grandTotal = Math.max(0, cartSubtotal + shipFee + tax - discountAmount);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!shippingInfo.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!shippingInfo.email.includes('@')) errs.email = 'Valid Email is required';
    if (!shippingInfo.phone.trim()) errs.phone = 'Phone number is required';
    if (!shippingInfo.address.trim()) errs.address = 'Shipping address is required';
    if (!shippingInfo.city.trim()) errs.city = 'City is required';
    if (!shippingInfo.state.trim()) errs.state = 'State is required';
    if (!shippingInfo.zipCode.trim()) errs.zipCode = 'ZIP Code is required';

    if (paymentInfo.method === 'card') {
      if (!paymentInfo.cardNumber || paymentInfo.cardNumber.length < 12) errs.cardNumber = 'Valid Card Number required';
      if (!paymentInfo.expiry) errs.expiry = 'Expiry Date required';
      if (!paymentInfo.cvv || paymentInfo.cvv.length < 3) errs.cvv = 'CVV required';
    } else if (paymentInfo.method === 'upi') {
      if (!paymentInfo.upiId || !paymentInfo.upiId.includes('@')) errs.upiId = 'Valid UPI ID required';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      addToast('Please complete all required shipping & payment fields', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const created = placeOrder(shippingInfo, paymentInfo);
      setIsSubmitting(false);
      if (created) {
        setPlacedOrder(created);
      }
    }, 1200);
  };

  if (placedOrder) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-12 text-center shadow-2xl space-y-6"
        >
          <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-500 flex items-center justify-center mx-auto shadow-xl shadow-red-500/20">
            <CheckCircle2 size={44} />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
              Payment Confirmed
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-100 mt-1">
              Order Placed Successfully!
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2">
              Thank you for shopping with NovaStore. Order receipt <strong>#{placedOrder.id}</strong> has been dispatched to {placedOrder.shipping.email}.
            </p>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 text-left space-y-4">
            <div className="flex flex-wrap items-center justify-between text-xs gap-2 pb-4 border-b border-zinc-200 dark:border-zinc-700">
              <div>
                <span className="text-zinc-400 font-semibold">Order ID:</span>{' '}
                <strong className="text-zinc-900 dark:text-zinc-100">{placedOrder.id}</strong>
              </div>
              <div>
                <span className="text-zinc-400 font-semibold">Estimated Delivery:</span>{' '}
                <strong className="text-red-600 dark:text-red-400">{placedOrder.estimatedDelivery}</strong>
              </div>
              <div>
                <span className="text-zinc-400 font-semibold">Payment:</span>{' '}
                <strong className="text-zinc-900 dark:text-zinc-100">{placedOrder.paymentMethod}</strong>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Order Items</h4>
              {placedOrder.items.map((it, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <img src={it.product.image} alt={it.product.name} className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <p className="font-bold text-zinc-900 dark:text-zinc-100">{it.product.name}</p>
                      <p className="text-[10px] text-zinc-400">Qty: {it.quantity}</p>
                    </div>
                  </div>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">${it.product.price * it.quantity}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700 flex justify-between text-sm font-black text-zinc-900 dark:text-zinc-100">
              <span>Total Paid</span>
              <span className="text-red-600 dark:text-red-500">${(placedOrder.total || 0).toFixed(2)}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-bold text-xs px-6 py-3 rounded-xl transition-all"
            >
              <Printer size={16} />
              <span>Print Order Receipt</span>
            </button>

            <button
              onClick={() => setPageView('orders')}
              className="flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-xs px-6 py-3 rounded-xl hover:bg-red-600 transition-all"
            >
              <Package size={16} />
              <span>View Order History</span>
            </button>

            <button
              onClick={() => setPageView('shop')}
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-lg shadow-red-600/30 hover:scale-105 transition-all"
            >
              <span>Back to Shop</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-12">
      <Breadcrumbs />

      <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
        Checkout & Payment <Lock size={20} className="text-red-600" />
      </h1>

      <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Shipping & Payment Form (8 Cols) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Shipping Info Card */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
            <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2 pb-4 border-b border-zinc-100 dark:border-zinc-800">
              <Truck size={20} className="text-red-600" />
              <span>1. Customer & Shipping Information</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  value={shippingInfo.fullName}
                  onChange={e => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
                  className={`w-full bg-zinc-50 dark:bg-zinc-800 border ${errors.fullName ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-700'} rounded-xl px-3.5 py-2.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600`}
                />
                {errors.fullName && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  value={shippingInfo.email}
                  onChange={e => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                  className={`w-full bg-zinc-50 dark:bg-zinc-800 border ${errors.email ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-700'} rounded-xl px-3.5 py-2.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600`}
                />
                {errors.email && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  value={shippingInfo.phone}
                  onChange={e => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                  className={`w-full bg-zinc-50 dark:bg-zinc-800 border ${errors.phone ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-700'} rounded-xl px-3.5 py-2.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600`}
                />
                {errors.phone && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">Address *</label>
                <input
                  type="text"
                  value={shippingInfo.address}
                  onChange={e => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                  className={`w-full bg-zinc-50 dark:bg-zinc-800 border ${errors.address ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-700'} rounded-xl px-3.5 py-2.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600`}
                />
                {errors.address && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.address}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">City *</label>
                <input
                  type="text"
                  value={shippingInfo.city}
                  onChange={e => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                  className={`w-full bg-zinc-50 dark:bg-zinc-800 border ${errors.city ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-700'} rounded-xl px-3.5 py-2.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600`}
                />
                {errors.city && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.city}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">State / ZIP Code *</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="State"
                    value={shippingInfo.state}
                    onChange={e => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                    className={`w-1/2 bg-zinc-50 dark:bg-zinc-800 border ${errors.state ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-700'} rounded-xl px-3.5 py-2.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600`}
                  />
                  <input
                    type="text"
                    placeholder="ZIP"
                    value={shippingInfo.zipCode}
                    onChange={e => setShippingInfo({ ...shippingInfo, zipCode: e.target.value })}
                    className={`w-1/2 bg-zinc-50 dark:bg-zinc-800 border ${errors.zipCode ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-700'} rounded-xl px-3.5 py-2.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600`}
                  />
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Shipping Delivery Method
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setShippingInfo({ ...shippingInfo, shippingMethod: 'standard' })}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    shippingInfo.shippingMethod === 'standard'
                      ? 'border-red-600 bg-red-50 dark:bg-red-950/40 text-red-600'
                      : 'border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  <div className="font-bold text-xs">Standard Delivery</div>
                  <div className="text-[10px] opacity-70">3-5 Days ({cartSubtotal > 100 ? 'FREE' : '$15'})</div>
                </button>

                <button
                  type="button"
                  onClick={() => setShippingInfo({ ...shippingInfo, shippingMethod: 'express' })}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    shippingInfo.shippingMethod === 'express'
                      ? 'border-red-600 bg-red-50 dark:bg-red-950/40 text-red-600 font-bold'
                      : 'border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  <div className="font-bold text-xs">Express Air ($19)</div>
                  <div className="text-[10px] opacity-70">2-3 Business Days</div>
                </button>

                <button
                  type="button"
                  onClick={() => setShippingInfo({ ...shippingInfo, shippingMethod: 'overnight' })}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    shippingInfo.shippingMethod === 'overnight'
                      ? 'border-red-600 bg-red-50 dark:bg-red-950/40 text-red-600 font-bold'
                      : 'border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  <div className="font-bold text-xs">Next-Day Air ($29)</div>
                  <div className="text-[10px] opacity-70">Guaranteed Tomorrow</div>
                </button>
              </div>
            </div>
          </div>

          {/* Payment Method Card */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
            <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2 pb-4 border-b border-zinc-100 dark:border-zinc-800">
              <CreditCard size={20} className="text-red-600" />
              <span>2. Select Payment Method</span>
            </h3>

            {/* Selector Tabs */}
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setPaymentInfo({ ...paymentInfo, method: 'card' })}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${
                  paymentInfo.method === 'card'
                    ? 'border-red-600 bg-red-600 text-white shadow-md shadow-red-600/20'
                    : 'border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400'
                }`}
              >
                <CreditCard size={16} />
                <span>Credit Card</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentInfo({ ...paymentInfo, method: 'cod' })}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${
                  paymentInfo.method === 'cod'
                    ? 'border-red-600 bg-red-600 text-white shadow-md shadow-red-600/20'
                    : 'border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400'
                }`}
              >
                <Banknote size={16} />
                <span>Cash on Delivery</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentInfo({ ...paymentInfo, method: 'upi' })}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${
                  paymentInfo.method === 'upi'
                    ? 'border-red-600 bg-red-600 text-white shadow-md shadow-red-600/20'
                    : 'border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400'
                }`}
              >
                <QrCode size={16} />
                <span>UPI Wallet</span>
              </button>
            </div>

            {/* Card Inputs */}
            {paymentInfo.method === 'card' && (
              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">Card Number *</label>
                  <input
                    type="text"
                    placeholder="4242 4242 4242 4242"
                    value={paymentInfo.cardNumber}
                    onChange={e => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs font-mono text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
                  />
                  {errors.cardNumber && <p className="text-[10px] text-red-500 mt-1">{errors.cardNumber}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">Cardholder Name *</label>
                    <input
                      type="text"
                      value={paymentInfo.cardHolder}
                      onChange={e => setPaymentInfo({ ...paymentInfo, cardHolder: e.target.value })}
                      className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-1/2">
                      <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">Expiry *</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={paymentInfo.expiry}
                        onChange={e => setPaymentInfo({ ...paymentInfo, expiry: e.target.value })}
                        className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2.5 text-xs text-center font-mono text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">CVV *</label>
                      <input
                        type="password"
                        maxLength={4}
                        placeholder="123"
                        value={paymentInfo.cvv}
                        onChange={e => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                        className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2.5 text-xs text-center font-mono text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {paymentInfo.method === 'upi' && (
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300">Enter UPI VPA ID *</label>
                <input
                  type="text"
                  placeholder="username@okaxis"
                  value={paymentInfo.upiId}
                  onChange={e => setPaymentInfo({ ...paymentInfo, upiId: e.target.value })}
                  className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
                />
                {errors.upiId && <p className="text-[10px] text-red-500">{errors.upiId}</p>}
              </div>
            )}

            {paymentInfo.method === 'cod' && (
              <div className="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 rounded-2xl text-xs text-amber-800 dark:text-amber-300">
                <p className="font-bold mb-1">Cash on Delivery Selected</p>
                <p>Pay cash upon package delivery at your doorstep. Please ensure exact change is available.</p>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary Column (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-xl space-y-6">
            <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-100 pb-4 border-b border-zinc-100 dark:border-zinc-800">
              Review Cart Order
            </h3>

            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {cart.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs">
                  <img src={item.product.image} alt={item.product.name} className="w-12 h-12 object-cover rounded-xl shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-zinc-900 dark:text-zinc-100 truncate">{item.product.name}</p>
                    <p className="text-[10px] text-zinc-400">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-black text-zinc-900 dark:text-zinc-100">${item.product.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-zinc-900 dark:text-zinc-100">${(cartSubtotal || 0).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-bold text-zinc-900 dark:text-zinc-100">{shipFee === 0 ? 'FREE' : `$${shipFee}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span className="font-bold text-zinc-900 dark:text-zinc-100">${(tax || 0).toFixed(2)}</span>
              </div>
              {appliedCoupon && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Coupon Discount</span>
                  <span>-${(discountAmount || 0).toFixed(2)}</span>
                </div>
              )}
              <hr className="border-zinc-100 dark:border-zinc-800" />
              <div className="flex justify-between text-lg font-black text-zinc-900 dark:text-zinc-100 pt-1">
                <span>Total Amount</span>
                <span className="text-red-600 dark:text-red-500">${(grandTotal || 0).toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-sm py-4 rounded-2xl shadow-xl shadow-red-600/30 active:scale-95 transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Processing Order...</span>
              ) : (
                <>
                  <span>Place Order (${(grandTotal || 0).toFixed(2)})</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400">
              <ShieldCheck size={14} className="text-red-500" />
              <span>Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
