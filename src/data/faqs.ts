export interface FAQItem {
  id: string;
  category: 'Shipping' | 'Returns' | 'Payment' | 'Orders' | 'Support';
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Shipping',
    question: 'How long does standard shipping take?',
    answer: 'Standard shipping takes 3-5 business days within the continental US. International shipping typically delivers in 7-12 business days depending on customs processing.'
  },
  {
    id: 'faq-2',
    category: 'Shipping',
    question: 'Do you offer free shipping?',
    answer: 'Yes! We offer FREE standard express shipping on all orders over $100. Orders under $100 carry a flat $15 delivery fee.'
  },
  {
    id: 'faq-3',
    category: 'Shipping',
    question: 'How can I track my package?',
    answer: 'Once your order is dispatched, you will receive an email notification containing a tracking link. You can also track your shipment live in your NovaStore account dashboard.'
  },
  {
    id: 'faq-4',
    category: 'Returns',
    question: 'What is your return policy?',
    answer: 'We offer a hassle-free 30-day return policy. If you are not completely satisfied with your purchase, return it in original condition with tags attached for a full refund or exchange.'
  },
  {
    id: 'faq-5',
    category: 'Returns',
    question: 'Are return shipping labels prepaid?',
    answer: 'Yes, for all domestic returns in the US, we provide a prepaid return shipping label via your return portal.'
  },
  {
    id: 'faq-6',
    category: 'Payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit cards (Visa, MasterCard, American Express, Discover), Cash on Delivery (COD), UPI digital payments, Apple Pay, Google Pay, and NovaStore gift cards.'
  },
  {
    id: 'faq-7',
    category: 'Payment',
    question: 'Is my credit card information secure?',
    answer: 'Absolutely. All transactions are encrypted with 256-bit SSL technology. We never store raw credit card details on our servers.'
  },
  {
    id: 'faq-8',
    category: 'Orders',
    question: 'Can I cancel or modify my order after placing it?',
    answer: 'Orders can be modified or cancelled within 1 hour of placement before dispatch. Contact our 24/7 support line or use the Order History tab in your account.'
  },
  {
    id: 'faq-9',
    category: 'Orders',
    question: 'Can I apply multiple promo codes?',
    answer: 'Only one promo or coupon code can be applied per order. However, coupon codes can be combined with sitewide markdown discounts!'
  },
  {
    id: 'faq-10',
    category: 'Support',
    question: 'How do I reach NovaStore customer support?',
    answer: 'Our customer care team is available 24/7 via live chat, email at support@novastore.com, or by phone at +1 (800) 555-NOVA.'
  }
];
