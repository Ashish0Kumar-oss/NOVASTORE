import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ShieldCheck, Lock, Eye, Cookie, FileText, CheckCircle2, Printer, Search, ArrowRight, HelpCircle } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const { setPageView } = useStore();
  const [searchQuery, setSearchQuery] = useState('');

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction & Overview',
      content: `Welcome to NovaStore ("we," "our," or "us"). We are committed to protecting your personal privacy and maintaining transparency regarding how your data is collected, used, and safeguarded. This Privacy Policy outlines our practices when you visit our website, purchase products, or interact with our services in compliance with Google AdSense Policies, the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and applicable global privacy laws.`
    },
    {
      id: 'information-collected',
      title: '2. Information We Collect',
      content: `We collect information directly provided by you as well as automated technical data when you navigate NovaStore:
• Personal Identifiers: Name, email address, shipping and billing address, phone number, and payment credentials (processed securely via encrypted gateways).
• Account Credentials: Passwords, wishlists, order history, and saved preferences.
• Technical & Log Data: IP addresses, browser types, operating system, device identifiers, referring URLs, pages visited, time spent, and clickstream data.
• Communications: Customer support inquiries, feedback, and newsletter subscriptions.`
    },
    {
      id: 'google-adsense-cookies',
      title: '3. Google AdSense & Third-Party Cookies',
      content: `NovaStore uses Google AdSense and third-party advertising partners to display advertisements:
• Google DART Cookies: Google, as a third-party vendor, uses cookies to serve ads based on your visit to NovaStore and other sites on the Internet.
• Personalized Advertising: Users may opt-out of personalized advertising by visiting Google Ads Settings (https://www.google.com/settings/ads) or Network Advertising Initiative opt-out page.
• Web Beacons & Analytics: Third-party ad servers or ad networks use technology in their advertisements and links that appear on NovaStore, sending directly to your browser. They automatically receive your IP address when this occurs.`
    },
    {
      id: 'data-usage',
      title: '4. How We Use Your Information',
      content: `We process your data for legitimate business purposes including:
• Order Processing: Fulfilling orders, delivery logistics, issuing invoices, and providing status updates.
• Customer Care: Handling support requests, returns, and warranty claims.
• Personalization & Analytics: Enhancing user experience, refining product catalogs, and analyzing web traffic trends.
• Security & Fraud Prevention: Detecting suspicious transactions and ensuring compliance with our Terms of Service.
• Marketing Communications: Sending promotional offers and newsletters (only with your explicit opt-in consent).`
    },
    {
      id: 'data-sharing',
      title: '5. Information Sharing & Disclosure',
      content: `We DO NOT sell, rent, or trade your personal information to third parties. We only share data with trusted service providers under strict confidentiality agreements:
• Payment Gateways (Stripe, PayPal, UPI) for secure financial transactions.
• Courier & Fulfillment Partners (FedEx, DHL, UPS) for product delivery.
• Analytics & Hosting Providers (Cloud infrastructure, Google Analytics) to ensure seamless uptime.
• Legal Authorities when required by law, subpoena, or government regulation.`
    },
    {
      id: 'user-rights',
      title: '6. Your Rights & Privacy Choices (GDPR & CCPA)',
      content: `Depending on your location, you hold statutory privacy rights:
• Right to Access: Request a copy of the personal data we hold about you.
• Right to Rectification: Correct inaccurate or incomplete personal records.
• Right to Erasure ("Right to be Forgotten"): Request deletion of your personal records.
• Right to Opt-Out: Unsubscribe from marketing emails at any time using the "Unsubscribe" link or cookie preferences banner.
• California Residents (CCPA): You have the right to request disclosures regarding data collection and opt-out of third-party data sharing.`
    },
    {
      id: 'data-security',
      title: '7. Data Security & Retention',
      content: `We enforce robust physical, technical, and administrative security measures including 256-bit SSL/TLS encryption, secure database firewalls, and strict access controls. We retain personal data only for as long as necessary to fulfill order requirements and satisfy legal tax obligations.`
    },
    {
      id: 'children-privacy',
      title: '8. Children\'s Privacy (COPPA Notice)',
      content: `NovaStore does not knowingly collect or solicit personal data from children under the age of 13. If we discover that a child under 13 has provided personal information without parental consent, we promptly purge such records from our servers.`
    },
    {
      id: 'contact-dpo',
      title: '9. Contact Us & Data Protection Officer',
      content: `For inquiries regarding this Privacy Policy, cookie preferences, or to exercise your privacy rights, please contact our Data Protection Officer:
• Email: privacy@novastore.com / support@novastore.com
• Address: NovaStore Legal Dept., 500 Fifth Avenue, Suite 2400, New York, NY 10001
• Phone: +1 (800) 555-NOVA`
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
            <ShieldCheck size={14} />
            <span>Google AdSense & GDPR Compliant</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Privacy <span className="text-red-600">Policy</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Your privacy is paramount. Learn how NovaStore collects, utilizes, and protects your personal data in strict accordance with international standards.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-2 text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
            <span>Last Updated: August 2026</span>
            <span>•</span>
            <span>Effective Date: Immediate</span>
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
                className="w-full text-left text-xs font-bold px-3 py-2.5 rounded bg-red-600 text-white flex items-center justify-between"
              >
                <span>Privacy Policy</span>
                <ArrowRight size={14} />
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
                className="w-full text-left text-xs font-bold px-3 py-2.5 rounded text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Disclaimer & AdSense Notice
              </button>
            </div>

            <hr className="border-zinc-200 dark:border-white/5" />

            {/* Quick Search */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Search In Privacy Policy</label>
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="e.g. Cookies, GDPR..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-3 text-[11px] text-zinc-600 dark:text-zinc-400 space-y-1">
              <div className="font-bold text-red-600 flex items-center gap-1">
                <Lock size={12} />
                <span>AdSense Compliance</span>
              </div>
              <p className="text-[10px] leading-tight">
                This page meets Google AdSense Publisher Requirements for clear privacy notices regarding cookies and DART advertising.
              </p>
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
                <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">Have Privacy Questions?</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Our privacy compliance team is here to assist with any data inquiries.</p>
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
