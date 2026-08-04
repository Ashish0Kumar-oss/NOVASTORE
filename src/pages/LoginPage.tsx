import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Mail, Lock, LogIn, Sparkles, UserCheck } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { login, setPageView, addToast } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      addToast('Please enter both email and password', 'error');
      return;
    }
    login(email, password);
    setPageView('shop');
  };

  const handleDemoFill = () => {
    setEmail('alex.vance@example.com');
    setPassword('password123');
    addToast('Demo account credentials filled!', 'info');
  };

  return (
    <div className="max-w-md mx-auto py-10 px-4 space-y-6">
      <Breadcrumbs />

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-500 text-white font-black text-2xl flex items-center justify-center mx-auto shadow-lg shadow-red-600/30">
            N
          </div>
          <h1 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">Welcome Back</h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Sign in to access your NovaStore VIP account, orders, & saved wishlist.
          </p>
        </div>

        {/* Demo Fill Alert Button */}
        <button
          onClick={handleDemoFill}
          className="w-full flex items-center justify-center gap-2 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-600 dark:text-red-400 text-xs font-bold py-2.5 rounded-xl hover:bg-red-100 transition-colors"
        >
          <Sparkles size={14} />
          <span>Quick Fill Demo Credentials</span>
        </button>

        <form onSubmit={handleLoginSubmit} className="space-y-4">
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

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300">Password</label>
              <button
                type="button"
                onClick={() => setPageView('forgot-password')}
                className="text-[11px] font-semibold text-red-600 dark:text-red-400 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs py-3.5 rounded-xl shadow-xl shadow-red-600/30 transition-all"
          >
            <span>Sign In to Account</span>
            <LogIn size={15} />
          </button>
        </form>

        <div className="text-center text-xs text-zinc-500 dark:text-zinc-400 pt-2 border-t border-zinc-100 dark:border-zinc-800">
          Don't have a NovaStore account?{' '}
          <button
            onClick={() => setPageView('register')}
            className="font-bold text-red-600 dark:text-red-400 hover:underline"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};
