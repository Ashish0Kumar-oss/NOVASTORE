import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Award, ShieldCheck, Users, Globe, Zap, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-12">
      <Breadcrumbs />

      {/* Hero Narrative */}
      <div className="relative overflow-hidden bg-zinc-950 text-white rounded-3xl p-8 sm:p-16 border border-zinc-800 shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="inline-block bg-red-600/20 border border-red-500/30 text-red-400 font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
            Our Brand Story
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-none">
            Redefining Modern Luxury Retail
          </h1>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Founded in 2026, NovaStore was built on a simple promise: curated luxury products, uncompromising craftsmanship, and a seamless client shopping experience from discovery to delivery.
          </p>
        </div>
      </div>

      {/* Stats counter */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl text-center shadow-md">
          <div className="text-3xl sm:text-4xl font-black text-red-600 dark:text-red-500">120K+</div>
          <div className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mt-1">Happy Global Clients</div>
        </div>
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl text-center shadow-md">
          <div className="text-3xl sm:text-4xl font-black text-red-600 dark:text-red-500">35+</div>
          <div className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mt-1">Countries Served</div>
        </div>
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl text-center shadow-md">
          <div className="text-3xl sm:text-4xl font-black text-red-600 dark:text-red-500">99.8%</div>
          <div className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mt-1">Satisfaction Rate</div>
        </div>
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl text-center shadow-md">
          <div className="text-3xl sm:text-4xl font-black text-red-600 dark:text-red-500">24/7</div>
          <div className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mt-1">VIP Concierge</div>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">Pillars of Excellence</span>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 mt-1">
            Why Discerning Buyers Choose NovaStore
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-600/10 text-red-600 flex items-center justify-center">
              <Award size={24} />
            </div>
            <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">Verified Authenticity</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Every item in our boutique catalog undergoes strict quality assurance inspection before receiving the NovaStore Seal of Excellence.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-600/10 text-red-600 flex items-center justify-center">
              <Zap size={24} />
            </div>
            <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">Lightning Express Shipping</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              We partner directly with leading international air logistics networks to deliver your orders securely within 48 to 72 hours.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-600/10 text-red-600 flex items-center justify-center">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">Client First Guarantee</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Enjoy 30-day effortless returns, no-questions-asked refunds, and 2-year warranty coverage on all electronic and watch purchases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
