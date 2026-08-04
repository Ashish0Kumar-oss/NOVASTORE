import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AlertCircle, ShieldAlert, DollarSign, ExternalLink, Printer, Search, ArrowRight, HelpCircle } from 'lucide-react';

export const DisclaimerPage: React.FC = () => {
  const { setPageView } = useStore();
  const [searchQuery, setSearchQuery] = useState('');

  const sections = [
    {
      id: 'website-disclaimer',
      title: '1. General Website Disclaimer',
      content: `The information provided on NovaStore ("Website," "we," "us," or "our") is for general informational and e-commerce retail purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, or completeness of any product specification or article content on the site.`
    },
    {
      id: 'adsense-advertising',
      title: '2. Google AdSense & Third-Party Advertising Disclosure',
      content: `• AdSense Ads: NovaStore is a participant in Google AdSense and third-party publisher advertising networks. These advertisements help support our platform maintenance and continuous product curation.
• Automated Content: Advertisements displayed on NovaStore via Google AdSense are automatically generated based on user interest, cookies, and context. NovaStore does not explicitly endorse or guarantee products or services advertised in third-party ad banners.
• DART Cookie Compliance: Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites. Users may opt out of personalized advertising by visiting Google Ad Settings.`
    },
    {
      id: 'affiliate-disclosure',
      title: '3. Affiliate Links & Promotional Disclosures',
      content: `NovaStore may contain links to partner websites or affiliate programs. If you click on an affiliate link and make a purchase on the destination site, NovaStore may receive a small commission at zero additional cost to you. We only recommend products or brand partners that meet our high luxury standards.`
    },
    {
      id: 'product-disclaimer',
      title: '4. E-Commerce Product Information & Color Disclaimer',
      content: `• Display Accuracy: Product images are rendered under high-definition professional studio lighting. Actual colors, finishes, and textures may vary slightly depending on monitor calibration and lighting environments.
• Manufacturer Specifications: Technical specifications, dimensions, and battery life estimates are provided directly by brand manufacturers and may vary under individual usage conditions.`
    },
    {
      id: 'external-links',
      title: '5. External Links Disclaimer',
      content: `NovaStore may contain links to external third-party websites or services that are not owned or controlled by NovaStore. We assume no responsibility or liability for the content, privacy policies, or business practices of any third-party websites.`
    },
    {
      id: 'limitation-liability-disclaimer',
      title: '6. Limitation of Liability',
      content: `Under no circumstance shall NovaStore or its team members be held liable for any loss or damage of any kind incurred as a result of the use of our site or reliance on any information provided on the site. Your use of the site and reliance on any content is solely at your own risk.`
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
            <AlertCircle size={14} />
            <span>AdSense & Legal Disclosure</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Website <span className="text-red-600">Disclaimer</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Legal disclosures, Google AdSense advertising notices, affiliate links policy, and product warranty disclaimers for NovaStore visitors.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-2 text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
            <span>Last Updated: August 2026</span>
            <span>•</span>
            <span>AdSense Publisher Notice</span>
            <span>•</span>
            <button
              onClick={() => window.print()}
              className="text-red-500 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Printer size={13} />
              <span>Print Disclaimer</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white dark:bg-[#0F0F0F] border border-zinc-200 dark:border-white/5 rounded-xl p-5 shadow-sm space-y-3 sticky top-24">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <ShieldAlert size={15} className="text-red-600" />
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
                className="w-full text-left text-xs font-bold px-3 py-2.5 rounded text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Return & Refund Policy
              </button>
              <button
                onClick={() => setPageView('disclaimer')}
                className="w-full text-left text-xs font-bold px-3 py-2.5 rounded bg-red-600 text-white flex items-center justify-between"
              >
                <span>Disclaimer & AdSense Notice</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <hr className="border-zinc-200 dark:border-white/5" />

            {/* Search */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Search In Disclaimer</label>
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="e.g. AdSense, Affiliates..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
                />
              </div>
            </div>
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

          {/* Contact Banner */}
          <div className="bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                <HelpCircle size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">Questions Regarding Disclaimers?</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Reach out to our compliance department for any policy clarifications.</p>
              </div>
            </div>
            <button
              onClick={() => setPageView('contact')}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded transition-all shadow-md shadow-red-600/20 whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
