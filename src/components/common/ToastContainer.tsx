import React from 'react';
import { useStore } from '../../context/StoreContext';
import { CheckCircle2, AlertCircle, Info, XCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useStore();

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map(toast => {
          let icon = <Info className="text-blue-500 shrink-0" size={18} />;
          let borderClass = 'border-blue-500/30';
          let bgGradient = 'bg-white/95 dark:bg-zinc-900/95';

          if (toast.type === 'success') {
            icon = <CheckCircle2 className="text-red-600 dark:text-red-500 shrink-0" size={18} />;
            borderClass = 'border-red-600/40 dark:border-red-500/40';
          } else if (toast.type === 'warning') {
            icon = <AlertCircle className="text-amber-500 shrink-0" size={18} />;
            borderClass = 'border-amber-500/40';
          } else if (toast.type === 'error') {
            icon = <XCircle className="text-rose-500 shrink-0" size={18} />;
            borderClass = 'border-rose-500/40';
          }

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`pointer-events-auto flex items-center justify-between gap-3 p-3.5 rounded-xl border ${borderClass} ${bgGradient} backdrop-blur-md shadow-lg shadow-black/10 text-zinc-900 dark:text-zinc-100 text-sm font-medium`}
            >
              <div className="flex items-center gap-2.5">
                {icon}
                <span>{toast.message}</span>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors p-1"
                aria-label="Close toast"
              >
                <X size={14} />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
