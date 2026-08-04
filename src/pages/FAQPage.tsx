import React, { useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FAQS_DATA } from '../data/faqs';
import { Search, ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const FAQPage: React.FC = () => {
  const { setPageView } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const filteredFaqs = FAQS_DATA.filter(
    f =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-12 max-w-4xl mx-auto">
      <Breadcrumbs />

      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
          Knowledge Base & Support
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-100">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
          Everything you need to know about NovaStore shipping, luxury packaging, returns, and payment options.
        </p>

        {/* FAQ Search */}
        <div className="relative max-w-md mx-auto pt-4">
          <Search size={18} className="absolute left-4 top-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search questions (e.g., returns, shipping, warranty)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl pl-11 pr-4 py-3 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600 shadow-lg"
          />
        </div>
      </div>

      {/* Accordions List */}
      <div className="space-y-4">
        {filteredFaqs.map(faq => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-zinc-900 dark:text-zinc-100 hover:text-red-600 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase font-black bg-red-600/10 text-red-600 px-2.5 py-1 rounded-md shrink-0">
                    {faq.category}
                  </span>
                  <span>{faq.question}</span>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-zinc-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-600' : ''}`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Need more help banner */}
      <div className="bg-zinc-900 text-white rounded-3xl p-8 text-center space-y-3 mt-8 shadow-xl">
        <HelpCircle size={32} className="text-red-500 mx-auto" />
        <h3 className="text-xl font-bold">Still Have Questions?</h3>
        <p className="text-xs text-zinc-400 max-w-sm mx-auto">
          Our VIP Concierge customer service specialists are ready to help you 24/7.
        </p>
        <button
          onClick={() => setPageView('contact')}
          className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md inline-flex items-center gap-2"
        >
          <MessageCircle size={15} />
          <span>Contact Concierge Desk</span>
        </button>
      </div>
    </div>
  );
};
