import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { addToast } = useStore();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      addToast('Please complete all required fields', 'error');
      return;
    }
    setSubmitted(true);
    addToast('Your message has been sent to NovaStore VIP Concierge!', 'success');
  };

  return (
    <div className="space-y-8 pb-12">
      <Breadcrumbs />

      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
          We are here for you
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-100">
          Get in Touch with NovaStore Support
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
          Have a question about an order, custom sizing, or luxury product specifications?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Form (7 Cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Message Delivered</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. A dedicated concierge specialist will respond to <strong>{formData.email}</strong> within 1 hour.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-red-600"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-100 mb-2 flex items-center gap-2">
                <MessageSquare size={18} className="text-red-600" />
                <span>Send Us a Direct Message</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Order Inquiry, Product Specs, etc."
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-red-600"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs py-3.5 rounded-xl shadow-xl shadow-red-600/30 transition-all"
              >
                <span>Submit Inquiry</span>
                <Send size={14} />
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Map (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-100 pb-3 border-b border-zinc-100 dark:border-zinc-800">
              Corporate Headquarters
            </h3>

            <div className="space-y-4 text-xs text-zinc-600 dark:text-zinc-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-zinc-900 dark:text-zinc-100">NovaStore Global Flagship</strong>
                  <span>500 Howard Street, Suite 900, San Francisco, CA 94105, USA</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-red-600 shrink-0" />
                <div>
                  <strong className="block text-zinc-900 dark:text-zinc-100">VIP Phone Support</strong>
                  <span>+1 (800) 888-NOVA (6682)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-red-600 shrink-0" />
                <div>
                  <strong className="block text-zinc-900 dark:text-zinc-100">Email Assistance</strong>
                  <span>support@novastore.com</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock size={18} className="text-red-600 shrink-0" />
                <div>
                  <strong className="block text-zinc-900 dark:text-zinc-100">Operating Hours</strong>
                  <span>Mon - Sun: 24/7 Live Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Simulated Map */}
          <div className="relative h-48 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg bg-zinc-900">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
              alt="Store location map"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent flex items-end p-4">
              <div className="flex items-center gap-2 text-white text-xs font-bold">
                <MapPin size={16} className="text-red-500 animate-bounce" />
                <span>San Francisco Flagship Boutique Studio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
