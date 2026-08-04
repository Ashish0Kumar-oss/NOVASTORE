import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Mail, KeyRound, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const ForgotPasswordPage: React.FC = () => {
  const { setPageView, addToast } = useStore();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast('Please enter a valid email address', 'error');
      return;
    }
    setSent(true);
    addToast('Password reset link sent to your inbox!', 'success');
  };

  return (
    <div className="max-w-md mx-auto py-10 px-4 space-y-6">
      <Breadcrumbs />

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-2xl space-y-6">
        {sent ? (
          <div className="text-center space-y-4 py-4">
            <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Reset Link Sent</h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              We've emailed password recovery instructions to <strong>{email}</strong>.
            </p>
            <button
              onClick={() => setPageView('login')}
              className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-red-600"
            >
              Back to Sign In
            </button>
          </div>
        ) : (
          <>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-red-600/10 text-red-600 flex items-center justify-center mx-auto">
                <KeyRound size={24} />
              </div>
              <h1 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">Reset Password</h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Enter your registered account email to receive a password recovery link.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs py-3.5 rounded-xl shadow-xl shadow-red-600/30 transition-all"
              >
                Send Reset Link
              </button>
            </form>

            <button
              onClick={() => setPageView('login')}
              className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <ArrowLeft size={14} />
              <span>Back to Login</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
