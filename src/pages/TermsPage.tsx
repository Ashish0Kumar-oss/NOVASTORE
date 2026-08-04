import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FileText, Shield, AlertTriangle, Scale, CheckCircle2, Printer, Search, ArrowRight, HelpCircle } from 'lucide-react';

export const TermsPage: React.FC = () => {
  const { setPageView } = useStore();
  const [searchQuery, setSearchQuery] = useState('');

  const sections = [
    {
      id: 'agreement',
      title: '1. Agreement to Terms',
      content: `By accessing, browsing, or placing an order on NovaStore ("Website," "we," "us," or "our"), you ("User," "Customer," or "Visitor") agree to be bound by these Terms & Conditions, our Privacy Policy, and all applicable laws and regulations. If you do not agree with any portion of these terms, you are prohibited from using this site.`
    },
    {
      id: 'eligibility',
      title: '2. User Eligibility & Account Responsibilities',
      content: `• Age Requirement: You must be at least 18 years of age or accessing under the supervision of a parent or legal guardian.
• Account Security: You are responsible for maintaining the confidentiality of your account credentials and password. NovaStore is not liable for unauthorized account access resulting from user negligence.
• Accuracy of Information: You represent that all registration, shipping, and billing details provided are accurate, complete, and up to date.`
    },
    {
      id: 'products-pricing',
      title: '3. Product Catalog, Accuracy & Pricing',
      content: `• Pricing Errors: All prices are displayed in USD ($) and are subject to change without prior notice. While we strive for complete precision, pricing or typographical errors may occur. In the event a product is listed at an incorrect price due to a system error, NovaStore reserves the right to cancel or refuse any orders placed for that item.
• Product Descriptions: We make every effort to display product colors, materials, and specifications as accurately as possible. However, actual display output depends on your device monitor.
• Order Acceptance: Receipt of an order confirmation does not signify our final acceptance. We reserve the right to accept or decline orders at any time for stock limits, payment verification, or suspected fraud.`
    },
    {
      id: 'intellectual-property',
      title: '4. Intellectual Property Rights',
      content: `All original content, graphics, logos, brand trademarks, UI icons, imagery, product descriptions, and software code on NovaStore are the exclusive property of NovaStore and protected by international copyright, trademark, and trade secret laws. No material may be reproduced, distributed, modified, or republished without prior written authorization.`
    },
    {
      id: 'user-conduct',
      title: '5. Prohibited User Conduct',
      content: `When using NovaStore, you agree NOT to:
• Use the site for unlawful purposes or prohibited commercial exploitation.
• Post malicious code, viruses, or scrape data using automated bots or spiders.
• Submit fraudulent product reviews, false identity credentials, or misleading feedback.
• Attempt to breach site security firewalls, server infrastructure, or payment networks.`
    },
    {
      id: 'advertising-adsense',
      title: '6. Third-Party Links & Google AdSense Advertisements',
      content: `NovaStore contains links to third-party websites, sponsors, and advertisements served by Google AdSense and affiliate networks. We do not endorse, guarantee, or assume responsibility for the content, safety, or privacy practices of external websites. Your interactions with third-party advertisers are solely between you and the advertiser.`
    },
    {
      id: 'limitation-liability',
      title: '7. Limitation of Liability & Warranties',
      content: `To the maximum extent permitted by applicable law, NovaStore provides all services and products "as is" and "as available." We disclaim all implied warranties, including merchantability and fitness for a particular purpose. NovaStore shall not be liable for direct, indirect, incidental, punitive, or consequential damages resulting from site use or purchased goods beyond the purchase price of the item.`
    },
    {
      id: 'governing-law',
      title: '8. Governing Law & Dispute Resolution',
      content: `These Terms & Conditions are governed by and construed in accordance with the laws of the State of New York, United States, without regard to conflict of law principles. Any legal disputes arising from these terms shall be settled through binding arbitration in New York, NY.`
    },
    {
      id: 'changes',
      title: '9. Revisions to Terms',
      content: `NovaStore reserves the right to update or modify these Terms & Conditions at any time. Continued use of the Website following published changes constitutes your binding acceptance of the revised terms.`
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
            <Scale size={14} />
            <span>Official E-Commerce Terms of Service</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Terms & <span className="text-red-600">Conditions</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Please read these Terms & Conditions carefully. They govern your use of NovaStore, user accounts, product orders, and legal responsibilities.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-2 text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
            <span>Last Updated: August 2026</span>
            <span>•</span>
            <span>Version 2.4</span>
            <span>•</span>
            <button
              onClick={() => window.print()}
              className="text-red-500 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Printer size={13} />
              <span>Print Terms</span>
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
              <FileText size={15} className="text-red-600" />
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
                className="w-full text-left text-xs font-bold px-3 py-2.5 rounded bg-red-600 text-white flex items-center justify-between"
              >
                <span>Terms & Conditions</span>
                <ArrowRight size={14} />
              </button>
              <button
                onClick={() => setPageView('return-refund-policy')}
                className="w-full text-left text-xs font-bold px-3 py-2.5 rounded text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Return & Refund Policy
              </button>
              <button
                onClick={() => setPageView('disclaimer')}
                className="w-full text-left text-xs font-bold px-3 py-2.5 rounded text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Disclaimer & AdSense Notice
              </button>
            </div>

            <hr className="border-zinc-200 dark:border-white/5" />

            {/* Quick Search */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Search In Terms</label>
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="e.g. Refunds, Intellectual Property..."
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

          {/* Help Contact Banner */}
          <div className="bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                <HelpCircle size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">Questions About Terms?</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Our customer care and legal department can clarify any contract questions.</p>
              </div>
            </div>
            <button
              onClick={() => setPageView('contact')}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded transition-all shadow-md shadow-red-600/20 whitespace-nowrap"
            >
              Contact Legal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
