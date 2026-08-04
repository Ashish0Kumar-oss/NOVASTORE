import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { RotateCcw, PackageCheck, DollarSign, Clock, ShieldCheck, AlertCircle, Printer, Search, ArrowRight, HelpCircle, Truck } from 'lucide-react';

export const ReturnRefundPage: React.FC = () => {
  const { setPageView } = useStore();
  const [searchQuery, setSearchQuery] = useState('');

  const returnSteps = [
    {
      step: '01',
      title: 'Submit Return Request',
      desc: 'Go to your NovaStore account order history or contact support at returns@novastore.com with your order ID within 30 days of delivery.'
    },
    {
      step: '02',
      title: 'Receive Pre-Paid Shipping Label',
      desc: 'Our customer concierge will review your request and issue an RMA (Return Merchandise Authorization) along with a pre-paid printable shipping label.'
    },
    {
      step: '03',
      title: 'Pack & Ship Items',
      desc: 'Repack items securely in their original luxury box with all tags, accessories, and warranty cards attached. Drop off at any authorized courier location.'
    },
    {
      step: '04',
      title: 'Inspection & Instant Refund',
      desc: 'Once received at our distribution center, items undergo a 24-hour quality inspection. Your refund will be processed within 3-5 business days back to your original payment method.'
    }
  ];

  const sections = [
    {
      id: 'overview',
      title: '1. 30-Day Risk-Free Return Guarantee',
      content: `At NovaStore, customer satisfaction is at the core of our philosophy. If you are not completely satisfied with your purchase, you may return eligible items within 30 days of receipt for a full refund or exchange. No restocking fees apply for standard standard items.`
    },
    {
      id: 'eligibility-conditions',
      title: '2. Return Eligibility & Product Condition',
      content: `To qualify for a full refund, returned items must strictly meet the following criteria:
• Original Condition: Items must be unworn, unused, unwashed, and undamaged with no signs of wear.
• Packaging & Tags: Must include all original product tags, dust bags, designer boxes, manuals, and accessories.
• Proof of Purchase: Orders must be accompanied by the original packing slip or order number.`
    },
    {
      id: 'non-returnable',
      title: '3. Non-Returnable & Final Sale Items',
      content: `For hygiene, safety, and customization reasons, the following categories are strictly NON-RETURNABLE:
• Final Sale Clearance items explicitly marked "Final Sale".
• Personalized or custom-engraved merchandise (monogrammed watches, bespoke apparel).
• Intimate apparel, underwear, and unsealed beauty/cosmetic items due to health guidelines.`
    },
    {
      id: 'damaged-defective',
      title: '4. Damaged, Defective, or Incorrect Items',
      content: `If you receive an item that is defective or damaged during transit, please notify us within 48 hours of delivery:
• Email photos of the damaged item and packaging box to support@novastore.com.
• We will immediately dispatch a brand-new replacement at zero cost or issue a 100% full refund including expedited shipping charges.`
    },
    {
      id: 'refund-timeline',
      title: '5. Refund Processing Timeframe & Payment Methods',
      content: `• Credit/Debit Cards: Refunds take 3-5 business days to post after inspection completion depending on your financial institution.
• UPI & Instant Wallet: Refunds post within 24-48 hours.
• Store Credit: Instant issue upon inspection approval with an extra 5% bonus credit applied to your NovaStore account.`
    },
    {
      id: 'exchanges',
      title: '6. Size & Color Exchanges',
      content: `Need a different size or color? We offer FREE size/color exchanges. Simply submit an exchange request through your Orders panel. We will ship out the replacement item as soon as the carrier scans your return package.`
    }
  ];

  const filteredSections = sections.filter(sec =>
    sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sec.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-16">
      <Breadcrumbs />

      {/* Hero Header */}
      <div className="bg-gradient-to-tr from-black via-[#0F0F0F] to-red-950/60 border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 border border-red-500/30 rounded text-red-500 text-[10px] font-bold uppercase tracking-widest">
            <RotateCcw size={14} />
            <span>30-Day Money Back Guarantee</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Return & <span className="text-red-600">Refund Policy</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Hassle-free returns and instant refunds. We stand behind every product sold at NovaStore with an uncompromising 30-day satisfaction guarantee.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-2 text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
            <span>Return Window: 30 Days</span>
            <span>•</span>
            <span>Restocking Fee: $0.00</span>
            <span>•</span>
            <button
              onClick={() => window.print()}
              className="text-red-500 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Printer size={13} />
              <span>Print Policy</span>
            </button>
          </div>
        </div>
      </div>

      {/* Visual Step-by-Step Return Process */}
      <div className="bg-white dark:bg-[#0F0F0F] border border-zinc-200 dark:border-white/5 rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-zinc-100 dark:border-white/5 pb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">Simple Process</span>
          <h2 className="text-xl font-black uppercase text-zinc-900 dark:text-zinc-100 mt-1">
            How Returns Work In 4 Easy Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {returnSteps.map((stepItem) => (
            <div
              key={stepItem.step}
              className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 rounded-xl p-5 space-y-3 relative"
            >
              <span className="text-2xl font-black text-red-600/40 dark:text-red-500/30 font-mono">
                {stepItem.step}
              </span>
              <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">
                {stepItem.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {stepItem.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white dark:bg-[#0F0F0F] border border-zinc-200 dark:border-white/5 rounded-xl p-5 shadow-sm space-y-3 sticky top-24">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <PackageCheck size={15} className="text-red-600" />
              <span>Legal Center</span>
            </h3>
            <div className="space-y-1">
              <button
                onClick={() => setPageView('privacy-policy')}
                className="w-full text-left text-xs font-bold px-3 py-2.5 rounded text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setPageView('terms-conditions')}
                className="w-full text-left text-xs font-bold px-3 py-2.5 rounded text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => setPageView('return-refund-policy')}
                className="w-full text-left text-xs font-bold px-3 py-2.5 rounded bg-red-600 text-white flex items-center justify-between"
              >
                <span>Return & Refund Policy</span>
                <ArrowRight size={14} />
              </button>
              <button
                onClick={() => setPageView('disclaimer')}
                className="w-full text-left text-xs font-bold px-3 py-2.5 rounded text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Disclaimer & AdSense Notice
              </button>
            </div>

            <hr className="border-zinc-200 dark:border-white/5" />

            {/* Action Button */}
            <button
              onClick={() => setPageView('orders')}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest py-3 rounded transition-all shadow-md shadow-red-600/20 text-center"
            >
              Start Return In Orders
            </button>
          </div>
        </div>

        {/* Main Document Content */}
        <div className="lg:col-span-3 space-y-6">
          {filteredSections.map(sec => (
            <div
              key={sec.id}
              id={sec.id}
              className="bg-white dark:bg-[#0F0F0F] border border-zinc-200 dark:border-white/5 rounded-xl p-6 sm:p-8 shadow-sm space-y-3"
            >
              <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight flex items-center gap-2 border-b border-zinc-100 dark:border-white/5 pb-3">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                {sec.title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
                {sec.content}
              </p>
            </div>
          ))}

          {/* Assistance Banner */}
          <div className="bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                <Truck size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">Need Return Assistance?</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Our concierge support team is ready 24/7 to create pre-paid return labels.</p>
              </div>
            </div>
            <button
              onClick={() => setPageView('contact')}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded transition-all shadow-md shadow-red-600/20 whitespace-nowrap"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
