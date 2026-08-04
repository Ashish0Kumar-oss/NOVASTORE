import React from 'react';
import { useStore } from '../context/StoreContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Package, Truck, Clock, CheckCircle2, ChevronRight, Printer, ArrowRight } from 'lucide-react';

export const OrdersPage: React.FC = () => {
  const { orders, setPageView, openProductDetails } = useStore();

  return (
    <div className="space-y-6 pb-12">
      <Breadcrumbs />

      <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            My Orders History <Package size={24} className="text-red-600" />
          </h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Track active shipments and review past receipt details.
          </p>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-12 text-center my-8 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-950/50 text-red-600 flex items-center justify-center mx-auto mb-4">
            <Package size={32} />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">No Past Orders Found</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto mb-6">
            You haven't placed any orders yet. Place an order to see its live shipping status here!
          </p>
          <button
            onClick={() => setPageView('shop')}
            className="bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-xs px-8 py-3.5 rounded-2xl shadow-xl shadow-red-600/30 hover:scale-105 transition-all"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map(order => (
            <div
              key={order.id}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-md space-y-4"
            >
              {/* Top Order Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center font-bold text-xs">
                    #{order.id.slice(-4)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                      Order #{order.id}
                    </h4>
                    <span className="text-xs text-zinc-400">Placed on {new Date(order.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      order.status === 'Delivered'
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400'
                        : order.status === 'Shipped'
                        ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400'
                        : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400'
                    }`}
                  >
                    <CheckCircle2 size={13} />
                    <span>{order.status}</span>
                  </span>

                  <span className="text-base font-black text-red-600 dark:text-red-500">
                    ${(order.total || 0).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {order.items.map((item, idx) => (
                  <div
                    key={`${item.product.id}-${idx}`}
                    className="flex items-center justify-between gap-4 text-xs bg-zinc-50 dark:bg-zinc-800/40 p-3 rounded-2xl"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        onClick={() => openProductDetails(item.product.id)}
                        className="w-12 h-12 object-cover rounded-xl shrink-0 cursor-pointer"
                      />
                      <div>
                        <p
                          onClick={() => openProductDetails(item.product.id)}
                          className="font-bold text-zinc-900 dark:text-zinc-100 hover:text-red-600 cursor-pointer line-clamp-1"
                        >
                          {item.product.name}
                        </p>
                        <p className="text-[10px] text-zinc-400">
                          Qty: {item.quantity} {item.selectedColor ? `| ${item.selectedColor}` : ''}
                        </p>
                      </div>
                    </div>

                    <span className="font-bold text-zinc-900 dark:text-zinc-100">
                      ${item.product.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Shipping info footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500">
                <div className="flex items-center gap-2">
                  <Truck size={14} className="text-red-500" />
                  <span>
                    Shipping to: <strong>{order.shipping.fullName}</strong> ({order.shipping.city}, {order.shipping.state})
                  </span>
                </div>

                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:text-red-600"
                >
                  <Printer size={13} />
                  <span>Print Receipt</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
