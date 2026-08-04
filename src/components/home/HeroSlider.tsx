import React, { useState, useEffect } from 'react';
import { useStore } from '../../context/StoreContext';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Zap, Award, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SLIDES = [
  {
    id: 1,
    subtitle: 'LUXURY AUDIO & TECH 2026',
    title: 'AuraSound Max Wireless Studio',
    desc: 'Immerse yourself in active noise-canceling spatial audio, custom 40mm titanium drivers, and 40-hour ultra-battery life.',
    price: '$349',
    originalPrice: '$429',
    ctaText: 'Shop AuraSound',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    productId: 'prod-1'
  },
  {
    id: 2,
    subtitle: 'PERFORMANCE ATHLETIC FOOTWEAR',
    title: 'Nova Pro Carbon Race Sneaker',
    desc: 'Engineered with nitrogen-infused responsive foam and full-length carbon plate for record-breaking marathon propulsion.',
    price: '$260',
    originalPrice: '$310',
    ctaText: 'Explore Running',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    productId: 'prod-9'
  },
  {
    id: 3,
    subtitle: 'HAUTE COUTURE APPAREL',
    title: 'Italian Leather Trench Coat',
    desc: 'Handcrafted in Florence from 100% full-grain calfskin leather with luxury silk satin lining and double-breasted cut.',
    price: '$680',
    originalPrice: '$850',
    ctaText: 'View Collection',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop',
    productId: 'prod-5'
  }
];

export const HeroSlider: React.FC = () => {
  const { setPageView, openProductDetails } = useStore();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] text-white rounded-2xl my-6 border border-white/10 shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-[520px] lg:min-h-[580px] flex items-center"
        >
          {/* Background Image with Dark Gradient overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#0A0A0A]/90 to-red-950/60" />
          </div>

          {/* Content container */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-red-600 font-bold tracking-[0.3em] text-xs sm:text-sm mb-4 uppercase block">
                {slide.subtitle}
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-none mb-6 italic text-white">
                {slide.title.split(' ')[0]} <br />
                <span className="font-black text-red-600 not-italic uppercase tracking-tighter">
                  {slide.title.split(' ').slice(1).join(' ')}
                </span>
              </h1>

              <p className="text-zinc-400 max-w-md text-sm sm:text-base leading-relaxed mb-8">
                {slide.desc}
              </p>

              <div className="flex items-baseline gap-4 pt-2">
                <span className="text-3xl sm:text-4xl font-black text-red-500">{slide.price}</span>
                <span className="text-lg text-zinc-500 line-through">{slide.originalPrice}</span>
                <span className="text-[10px] bg-red-600 text-white font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  SAVE OVER 18%
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => openProductDetails(slide.productId)}
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-xs rounded transition-all shadow-lg shadow-red-600/20 active:scale-95"
                >
                  {slide.ctaText}
                </button>

                <button
                  onClick={() => setPageView('shop')}
                  className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-xs rounded transition-all active:scale-95"
                >
                  View Catalog
                </button>
              </div>
            </div>

            {/* Floating Glass Stats Badge */}
            <div className="hidden lg:flex lg:col-span-5 flex-col items-end justify-center space-y-4">
              <div className="bg-[#0F0F0F]/90 border border-white/10 rounded-xl p-6 backdrop-blur-md max-w-xs shadow-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-600/20 text-red-500 border border-red-600/40 flex items-center justify-center">
                    <Star size={20} className="fill-red-500" />
                  </div>
                  <div>
                    <div className="text-base font-black text-white">4.9 / 5.0 Rating</div>
                    <div className="text-xs text-zinc-400">Over 3,400+ Verified Buyers</div>
                  </div>
                </div>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between text-xs text-zinc-300">
                  <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-red-500" /> 2-Yr Warranty</span>
                  <span className="flex items-center gap-1.5"><Award size={14} className="text-red-500" /> Official Retailer</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation Controls & Index Trackers */}
      <div className="absolute bottom-6 left-6 lg:left-12 z-20 hidden sm:flex gap-6 text-[10px] tracking-[0.2em] font-medium text-zinc-500 uppercase">
        <span className={currentSlide === 0 ? 'text-red-500 font-bold' : ''}>01 / Hero</span>
        <span className={currentSlide === 1 ? 'text-red-500 font-bold' : ''}>02 / Featured</span>
        <span className={currentSlide === 2 ? 'text-red-500 font-bold' : ''}>03 / Catalogue</span>
      </div>

      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
        <button
          onClick={() => setCurrentSlide(prev => (prev - 1 + SLIDES.length) % SLIDES.length)}
          className="p-2.5 rounded bg-zinc-900 hover:bg-red-600 text-white border border-white/10 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="text-xs font-bold px-2 text-zinc-400 uppercase tracking-widest">
          0{currentSlide + 1} / 0{SLIDES.length}
        </span>
        <button
          onClick={() => setCurrentSlide(prev => (prev + 1) % SLIDES.length)}
          className="p-2.5 rounded bg-zinc-900 hover:bg-red-600 text-white border border-white/10 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
};
