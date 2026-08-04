import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const CookieNotice: React.FC = () => {
  const { setPageView } = useStore();
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('novastore_cookie_consent');
    if (!consent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('novastore_cookie_consent', 'accepted');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[9990] bg-white/95 dark:bg-[#0F0F0F]/95 border border-zinc-200 dark:border-white/10 rounded-xl shadow-2xl p-4 backdrop-blur-md flex items-start gap-3">
      <Cookie className="text-red-600 dark:text-red-500 shrink-0 mt-0.5" size={20} />
      <div className="flex-1 text-xs text-zinc-600 dark:text-zinc-300">
        <p className="font-bold text-zinc-900 dark:text-zinc-100 mb-0.5 uppercase tracking-wider">Cookie & Privacy Notice</p>
        <p className="text-[11px] leading-relaxed">
          We use cookies and Google AdSense technologies to personalize content and analyze traffic in compliance with our{' '}
          <button
            onClick={() => setPageView('privacy-policy')}
            className="text-red-600 dark:text-red-500 font-bold hover:underline"
          >
            Privacy Policy
          </button>.
        </p>
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={handleAccept}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded transition-all shadow-md shadow-red-600/20"
          >
            Accept All
          </button>
          <button
            onClick={handleAccept}
            className="text-[11px] font-bold text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 uppercase tracking-wider px-2"
          >
            Essential Only
          </button>
        </div>
      </div>
      <button onClick={handleAccept} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
        <X size={14} />
      </button>
    </div>
  );
};
