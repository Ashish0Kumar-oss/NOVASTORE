import { Product } from '../types';

export const DEMO_PRODUCTS: Product[] = [
  // ELECTRONICS
  {
    id: 'prod-1',
    name: 'AuraSound Max Wireless ANC Headphones',
    category: 'Electronics',
    brand: 'AuraSound',
    description: 'Experience studio-grade active noise cancellation, 40-hour battery life, spatial audio, and ultra-soft memory foam earcups.',
    specifications: {
      'Driver Size': '40mm Custom Titanium',
      'Battery Life': '40 Hours (ANC On)',
      'Connectivity': 'Bluetooth 5.3 & 3.5mm AUX',
      'Charging': 'USB-C Fast Charge (10 min = 5 hrs)',
      'Weight': '254g'
    },
    price: 349,
    originalPrice: 429,
    discount: 19,
    rating: 4.9,
    reviews: 328,
    stock: 45,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    trending: true,
    bestseller: true,
    colors: ['Space Gray', 'Matte Black', 'Silver Rose'],
    createdAt: '2026-07-15'
  },
  {
    id: 'prod-2',
    name: 'NovaBook Pro 16" M-Series Laptop',
    category: 'Electronics',
    brand: 'NovaTech',
    description: 'Ultra-slim aluminum laptop featuring a Liquid Retina XDR 120Hz display, 16-core GPU, and up to 22 hours of battery life.',
    specifications: {
      'Processor': '12-core CPU / 18-core GPU',
      'RAM': '36GB Unified Memory',
      'Storage': '1TB NVMe SSD',
      'Display': '16.2" Mini-LED (3024 x 1964)',
      'Weight': '2.14kg'
    },
    price: 2499,
    originalPrice: 2799,
    discount: 11,
    rating: 4.95,
    reviews: 184,
    stock: 12,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    trending: true,
    bestseller: false,
    colors: ['Space Gray', 'Silver'],
    createdAt: '2026-06-20'
  },
  {
    id: 'prod-3',
    name: 'VisionX 4K OLED Curved Gaming Monitor 34"',
    category: 'Electronics',
    brand: 'VisionX',
    description: 'Immerse yourself with a 175Hz refresh rate, 0.03ms response time, Quantum Dot OLED display, and HDR True Black 400.',
    specifications: {
      'Resolution': '3440 x 1440 UWQHD',
      'Refresh Rate': '175Hz',
      'Response Time': '0.03ms (GtG)',
      'Curvature': '1800R',
      'Ports': '2x HDMI 2.1, 1x DP 1.4, USB-C 90W'
    },
    price: 999,
    originalPrice: 1199,
    discount: 17,
    rating: 4.8,
    reviews: 95,
    stock: 18,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    trending: true,
    bestseller: false,
    colors: ['Titanium Black'],
    createdAt: '2026-07-01'
  },
  {
    id: 'prod-4',
    name: 'SoundWave Portable Waterproof Speaker',
    category: 'Electronics',
    brand: 'SoundWave',
    description: '360-degree deep bass sound system with IP67 dust/waterproof rating, 24-hour battery, and built-in party light show.',
    specifications: {
      'Output Power': '40W RMS',
      'Battery Life': '24 Hours',
      'Waterproof': 'IP67 Submersible',
      'Connectivity': 'Bluetooth 5.2',
      'Dimensions': '20 x 8 x 8 cm'
    },
    price: 129,
    originalPrice: 159,
    discount: 19,
    rating: 4.7,
    reviews: 512,
    stock: 60,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    trending: false,
    bestseller: true,
    colors: ['Crimson Red', 'Midnight Navy', 'Forest Green'],
    createdAt: '2026-05-10'
  },

  // FASHION
  {
    id: 'prod-5',
    name: 'Minimalist Italian Leather Trench Coat',
    category: 'Fashion',
    brand: 'Zara Luxe',
    description: 'Handcrafted tailored trench coat made from 100% full-grain Italian calfskin leather with a belted waist and double-breasted closure.',
    specifications: {
      'Material': '100% Italian Calfskin Leather',
      'Lining': '100% Silk Satin',
      'Fit': 'Tailored Slim Fit',
      'Care': 'Professional Leather Clean Only',
      'Origin': 'Made in Florence, Italy'
    },
    price: 680,
    originalPrice: 850,
    discount: 20,
    rating: 4.9,
    reviews: 74,
    stock: 15,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    trending: true,
    bestseller: false,
    colors: ['Cognac Brown', 'Classic Black', 'Camel'],
    sizes: ['S', 'M', 'L', 'XL'],
    createdAt: '2026-07-28'
  },
  {
    id: 'prod-6',
    name: 'Pure Organic Cashmere Oversized Sweater',
    category: 'Fashion',
    brand: 'Aura Luxe',
    description: 'Luxuriously soft Mongolian cashmere knit sweater with a cozy rib collar, relaxed shoulders, and timeless silhouette.',
    specifications: {
      'Material': '100% Grade-A Mongolian Cashmere',
      'Knit Type': '12-Gauge 2-Ply',
      'Fit': 'Oversized Comfortable Fit',
      'Care': 'Hand Wash Cold or Dry Clean'
    },
    price: 240,
    originalPrice: 300,
    discount: 20,
    rating: 4.85,
    reviews: 142,
    stock: 28,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    trending: true,
    bestseller: true,
    colors: ['Oatmeal Cream', 'Slate Charcoal', 'Burgundy Red'],
    sizes: ['XS', 'S', 'M', 'L'],
    createdAt: '2026-07-10'
  },
  {
    id: 'prod-7',
    name: 'Tailored Japanese Selvedge Denim Jacket',
    category: 'Fashion',
    brand: 'Kuro Studio',
    description: '14.5oz raw Japanese selvedge denim jacket featuring custom branded copper hardware and vintage wash detailing.',
    specifications: {
      'Material': '14.5oz Japanese Kurabo Cotton',
      'Hardware': 'Solid Brass & Copper Rivets',
      'Pockets': '2 Chest, 2 Handwarmers, 2 Internal',
      'Fit': 'Classic Trucker Fit'
    },
    price: 195,
    originalPrice: 240,
    discount: 18,
    rating: 4.75,
    reviews: 89,
    stock: 35,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    trending: false,
    bestseller: false,
    colors: ['Indigo Raw', 'Washed Vintage Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
    createdAt: '2026-06-15'
  },
  {
    id: 'prod-8',
    name: 'Elegance Silk Evening Slip Dress',
    category: 'Fashion',
    brand: 'Maison Luxe',
    description: 'Flowing bias-cut mulberry silk slip dress with delicate adjustable spaghetti straps and a subtle cowl neckline.',
    specifications: {
      'Material': '100% 19mm Mulberry Silk',
      'Cut': 'Bias Cut for Natural Drape',
      'Length': 'Midi Length',
      'Care': 'Dry Clean Recommended'
    },
    price: 290,
    originalPrice: 360,
    discount: 19,
    rating: 4.9,
    reviews: 110,
    stock: 22,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    trending: false,
    bestseller: true,
    colors: ['Ruby Red', 'Emerald Green', 'Midnight Black'],
    sizes: ['XS', 'S', 'M', 'L'],
    createdAt: '2026-07-22'
  },

  // SHOES
  {
    id: 'prod-9',
    name: 'Nova Pro Carbon Running Sneakers',
    category: 'Shoes',
    brand: 'Nike Nova',
    description: 'Engineered with a full-length carbon fiber plate and reactive dual-density nitrogen foam for maximum marathon propulsion.',
    specifications: {
      'Weight': '198g (Size 9)',
      'Midsole': 'ZoomNitrogen Foam + Carbon Plate',
      'Drop': '8mm Heel-to-Toe',
      'Upper': 'VaporWeave Ultra-light Mesh',
      'Terrain': 'Road & Track'
    },
    price: 260,
    originalPrice: 310,
    discount: 16,
    rating: 4.92,
    reviews: 410,
    stock: 50,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    trending: true,
    bestseller: true,
    colors: ['Electric Crimson', 'Phantom Black', 'Solar Yellow'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    createdAt: '2026-07-30'
  },
  {
    id: 'prod-10',
    name: 'Heritage Handcrafted Chelsea Boots',
    category: 'Shoes',
    brand: 'Chester & Co.',
    description: 'Goodyear welted Chelsea boots crafted from hand-burnished full-grain calfskin leather with durable Vibram rubber lug soles.',
    specifications: {
      'Construction': 'Goodyear 360° Welted',
      'Leather': 'French Calfskin',
      'Sole': 'Vibram Rubber Lug Sole',
      'Elastics': 'Heavy-Duty Reinforced Goring'
    },
    price: 380,
    originalPrice: 450,
    discount: 15,
    rating: 4.88,
    reviews: 165,
    stock: 19,
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    trending: true,
    bestseller: false,
    colors: ['Mahogany Brown', 'Espresso Dark', 'Black Onyx'],
    sizes: ['US 8', 'US 9', 'US 10', 'US 11'],
    createdAt: '2026-06-25'
  },
  {
    id: 'prod-11',
    name: 'Retro Court High-Top Leather Sneakers',
    category: 'Shoes',
    brand: 'NovaStreet',
    description: 'Iconic 80s court silhouette re-imagined with ultra-soft nappa leather uppers, cushioned OrthoLite insoles, and gum outsoles.',
    specifications: {
      'Upper': 'Premium Nappa Leather & Suede',
      'Insole': 'Removable OrthoLite Comfort',
      'Outsole': 'Natural Vulcanized Gum Rubber',
      'Laces': '100% Cotton Flat Laces'
    },
    price: 155,
    originalPrice: 190,
    discount: 18,
    rating: 4.7,
    reviews: 230,
    stock: 42,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    trending: false,
    bestseller: true,
    colors: ['Vintage Red Accent', 'Retro Blue Accent', 'Triple White'],
    sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    createdAt: '2026-05-20'
  },
  {
    id: 'prod-12',
    name: 'Velvet Evening Stiletto Pumps',
    category: 'Shoes',
    brand: 'Zara Luxe',
    description: 'Sophisticated 100mm heel pumps featuring deep red Italian plush velvet, pointed toe box, and padded leather footbeds.',
    specifications: {
      'Heel Height': '100mm (3.9 inches)',
      'Material': 'Italian Silk Velvet',
      'Sole': '100% Italian Leather Sole',
      'Toe Shape': 'Classic Sharp Pointed Toe'
    },
    price: 220,
    originalPrice: 280,
    discount: 21,
    rating: 4.8,
    reviews: 84,
    stock: 14,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    trending: false,
    bestseller: false,
    colors: ['Velvet Red', 'Midnight Black', 'Nude Blush'],
    sizes: ['US 5', 'US 6', 'US 7', 'US 8', 'US 9'],
    createdAt: '2026-07-05'
  },

  // WATCHES
  {
    id: 'prod-13',
    name: 'Chronograph Master Automatic Watch 42mm',
    category: 'Watches',
    brand: 'Aethel Chrono',
    description: 'Swiss-made 28-jewel automatic movement, sapphire crystal with anti-reflective coating, 100m water resistance, and skeleton caseback.',
    specifications: {
      'Movement': 'ETA 7750 Automatic (48hr power reserve)',
      'Case Diameter': '42mm 316L Stainless Steel',
      'Crystal': 'Double-domed Scratchproof Sapphire',
      'Water Resistance': '10 ATM (100 meters / 330 feet)',
      'Strap': 'Genuine Crocodile Leather + Quick-release'
    },
    price: 1450,
    originalPrice: 1800,
    discount: 19,
    rating: 4.96,
    reviews: 156,
    stock: 8,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    trending: true,
    bestseller: true,
    colors: ['Rose Gold / Red Strap', 'Silver / Blue Dial', 'All Black DLC'],
    createdAt: '2026-07-18'
  },
  {
    id: 'prod-14',
    name: 'UltraFit Titanium Smartwatch Series 9',
    category: 'Watches',
    brand: 'NovaTech',
    description: 'Grade-5 aerospace titanium casing, Always-On AMOLED 2000-nit display, ECG, blood oxygen sensor, and offline GPS maps.',
    specifications: {
      'Display': '1.96" Ultra AMOLED 410x502',
      'Battery Life': 'Up to 14 Days (Smart Mode)',
      'Sensors': 'ECG, Optical HR, SpO2, Temperature, Barometer',
      'Water Rating': '50 meters (5 ATM) Swimproof'
    },
    price: 499,
    originalPrice: 599,
    discount: 16,
    rating: 4.87,
    reviews: 389,
    stock: 35,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    trending: true,
    bestseller: true,
    colors: ['Titanium Gray / Orange Band', 'Midnight Black Band', 'Starlight Silicon'],
    createdAt: '2026-07-12'
  },
  {
    id: 'prod-15',
    name: 'Minimalist Bauhaus Quartz Dress Watch',
    category: 'Watches',
    brand: 'Nordic Zeit',
    description: 'Sleek 6mm ultra-thin casing, clean white dial with red second hand, sapphire lens, and mesh stainless steel strap.',
    specifications: {
      'Movement': 'Swiss Ronda 762 Quartz',
      'Case Thickness': '6.2mm Ultra Thin',
      'Glass': 'Sapphire Crystal',
      'Band': 'Mesh Milanese Stainless Steel 20mm'
    },
    price: 185,
    originalPrice: 230,
    discount: 19,
    rating: 4.65,
    reviews: 98,
    stock: 40,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    trending: false,
    bestseller: false,
    colors: ['Silver / Red Accent', 'Gold / White Dial'],
    createdAt: '2026-04-10'
  },

  // FURNITURE
  {
    id: 'prod-16',
    name: 'Eames Silhouette Ergonomic Lounge Chair',
    category: 'Furniture',
    brand: 'Herman Luxe',
    description: 'Iconic mid-century lounge chair with molded walnut plywood shell, hand-upholstered top-grain Italian aniline leather, and swivel base.',
    specifications: {
      'Materials': '7-ply Walnut Veneer & Premium Leather',
      'Base': 'Die-cast Aluminum 5-star Swivel',
      'Ottoman': 'Matching Included',
      'Dimensions': '33"W x 33"D x 32"H',
      'Weight Capacity': '350 lbs'
    },
    price: 1890,
    originalPrice: 2300,
    discount: 17,
    rating: 4.98,
    reviews: 115,
    stock: 6,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    trending: true,
    bestseller: true,
    colors: ['Terracotta Red Leather', 'Classic Black Leather', 'Cognac Tan'],
    createdAt: '2026-06-30'
  },
  {
    id: 'prod-17',
    name: 'Nordic Solid Oak Minimalist Dining Table',
    category: 'Furniture',
    brand: 'Nordic Home',
    description: 'Crafted from 100% sustainably harvested European white oak with soft chamfered edges and matte clear protective lacquer finish.',
    specifications: {
      'Wood': 'Solid White Oak',
      'Capacity': 'Seats 6 to 8 People',
      'Dimensions': '78"L x 36"W x 30"H',
      'Finish': 'Natural Matte UV Oil'
    },
    price: 1150,
    originalPrice: 1400,
    discount: 17,
    rating: 4.89,
    reviews: 62,
    stock: 9,
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    trending: false,
    bestseller: false,
    colors: ['Natural Oak', 'Smoked Dark Oak'],
    createdAt: '2026-05-18'
  },
  {
    id: 'prod-18',
    name: 'Sculptural Arc Brass Floor Lamp',
    category: 'Furniture',
    brand: 'Lumina Design',
    description: 'Heavy solid white marble base supporting a sweeping brushed brass arch with dimmable warm LED illumination.',
    specifications: {
      'Height': '82 inches (208cm)',
      'Materials': 'Carrara Marble & Solid Brushed Brass',
      'Light Source': 'Built-in 2700K Warm Dimmable LED',
      'Switch': 'Stepless Foot Dimmer Switch'
    },
    price: 340,
    originalPrice: 420,
    discount: 19,
    rating: 4.8,
    reviews: 84,
    stock: 20,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    trending: true,
    bestseller: false,
    colors: ['Brushed Brass', 'Matte Black'],
    createdAt: '2026-07-02'
  },

  // BEAUTY
  {
    id: 'prod-19',
    name: 'Radiance Botanical Youth Serum 50ml',
    category: 'Beauty',
    brand: 'Aura Skin',
    description: 'Advanced concentrated anti-aging botanical elixir formulated with cold-pressed rosehip, niacinamide, and triple hyaluronic acid.',
    specifications: {
      'Volume': '50ml / 1.7 fl oz',
      'Key Ingredients': 'Hyaluronic Acid, Niacinamide, Rosehip Oil, CoQ10',
      'Skin Type': 'All Skin Types (Dermatologist Tested)',
      'Formulation': '100% Vegan & Cruelty-Free'
    },
    price: 88,
    originalPrice: 110,
    discount: 20,
    rating: 4.93,
    reviews: 450,
    stock: 75,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608248597261-8132052327c9?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    trending: true,
    bestseller: true,
    colors: [],
    createdAt: '2026-07-24'
  },
  {
    id: 'prod-20',
    name: 'Velvet Matte Lipstick Luxe Trio',
    category: 'Beauty',
    brand: 'Maison Luxe',
    description: 'Set of 3 hydrating velvet matte lipsticks in iconic shades: Crimson Velvet, Rose Nude, and Berry Royale.',
    specifications: {
      'Finish': 'Hydrating Velvet Matte',
      'Wear Time': '12-Hour Smudge-Proof',
      'Infused With': 'Vitamin E & Jojoba Oil',
      'Set Includes': '3 Full-size Lipsticks (3.8g each)'
    },
    price: 65,
    originalPrice: 85,
    discount: 23,
    rating: 4.84,
    reviews: 210,
    stock: 55,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    trending: false,
    bestseller: true,
    colors: ['Red Luxe Collection'],
    createdAt: '2026-06-12'
  },
  {
    id: 'prod-21',
    name: 'Rouge Imperial Eau De Parfum 100ml',
    category: 'Beauty',
    brand: 'Parfums De Nova',
    description: 'An intoxicating oriental floral scent with notes of Damask rose, amber resin, spicy saffron, and smoky sandalwood.',
    specifications: {
      'Concentration': 'Eau De Parfum (20% Oil)',
      'Top Notes': 'Saffron, Pink Pepper, Damask Rose',
      'Heart Notes': 'Amberwood, Jasmine Sambac',
      'Base Notes': 'Sandalwood, Vanilla Bean, Musk'
    },
    price: 195,
    originalPrice: 240,
    discount: 18,
    rating: 4.91,
    reviews: 178,
    stock: 30,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    trending: true,
    bestseller: false,
    colors: [],
    createdAt: '2026-07-08'
  },

  // GAMING
  {
    id: 'prod-22',
    name: 'Apex Pro Wireless Mechanical Keyboard',
    category: 'Gaming',
    brand: 'NovaTech',
    description: 'Custom adjustable magnetic Hall Effect switches (0.1mm actuation), per-key RGB backlight, and 1000Hz polling rate over 2.4GHz wireless.',
    specifications: {
      'Switches': 'OmniPoint 3.0 Magnetic Hall Effect',
      'Keycaps': 'Double-shot PBT Cherry Profile',
      'Connectivity': '2.4GHz Low-Latency, Bluetooth 5.1, Type-C',
      'Battery': 'Up to 100 Hours RGB Off',
      'Chassis': 'CNC Anodized Aluminum'
    },
    price: 219,
    originalPrice: 269,
    discount: 18,
    rating: 4.88,
    reviews: 290,
    stock: 40,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    trending: true,
    bestseller: false,
    colors: ['Crimson Red Accents', 'All Matte Black'],
    createdAt: '2026-07-16'
  },
  {
    id: 'prod-23',
    name: 'Viper Ultra Lightweight Wireless Gaming Mouse',
    category: 'Gaming',
    brand: 'NovaTech',
    description: 'Ultra-light 49-gram magnesium alloy shell with 30,000 DPI optical sensor, optical switches, and 4000Hz wireless polling rate.',
    specifications: {
      'Weight': '49 grams (Ultralight)',
      'Sensor': 'NovaOptical 30K Focus+',
      'Polling Rate': 'Up to 4000Hz Wireless',
      'Battery Life': '90 Hours Continuous Gaming'
    },
    price: 139,
    originalPrice: 169,
    discount: 17,
    rating: 4.9,
    reviews: 340,
    stock: 50,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    trending: true,
    bestseller: true,
    colors: ['Ruby Red', 'Obsidian Black', 'Glacier White'],
    createdAt: '2026-06-22'
  },
  {
    id: 'prod-24',
    name: 'Phantom 7.1 Spatial Gaming Headset',
    category: 'Gaming',
    brand: 'VisionX',
    description: 'Planar magnetic drivers deliver pristine audio spatial accuracy, detachable broadcast-grade mic, and dual wireless bluetooth connection.',
    specifications: {
      'Drivers': '50mm Planar Magnetic',
      'Audio': 'Dolby Atmos 7.1 Surround',
      'Mic': 'Cardioid Noise-Cancelling Broadcast Mic',
      'Compatibility': 'PC, PS5, Xbox Series X, Switch, Mobile'
    },
    price: 189,
    originalPrice: 229,
    discount: 17,
    rating: 4.78,
    reviews: 215,
    stock: 32,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    trending: false,
    bestseller: false,
    colors: ['Black / Red Trim'],
    createdAt: '2026-05-14'
  },

  // ACCESSORIES
  {
    id: 'prod-25',
    name: 'Executive Full-Grain Leather Briefcase',
    category: 'Accessories',
    brand: 'Chester & Co.',
    description: 'Hand-stitched full-grain vegetable-tanned leather briefcase with padded laptop compartment (up to 16"), brass hardware, and shoulder strap.',
    specifications: {
      'Material': 'Full-Grain Tuscan Cowhide Leather',
      'Hardware': 'Solid Antique Brass',
      'Laptop Sleeve': 'Padded fit for 15.6" - 16" Laptops',
      'Dimensions': '16.5"W x 12"H x 4"D'
    },
    price: 360,
    originalPrice: 450,
    discount: 20,
    rating: 4.95,
    reviews: 130,
    stock: 16,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    trending: true,
    bestseller: true,
    colors: ['Vintage Tan', 'Deep Chestnut', 'Classic Black'],
    createdAt: '2026-07-19'
  },
  {
    id: 'prod-26',
    name: 'Polarized Aviator Sunglasses Titanium',
    category: 'Accessories',
    brand: 'VisionX',
    description: 'Ultra-lightweight Japanese beta-titanium frame with gradient polarized HD lenses providing 100% UV400 protection.',
    specifications: {
      'Frame': 'Japanese Beta-Titanium',
      'Lens': 'Tac Polarized 9-Layer UV400',
      'Weight': '16 grams',
      'Includes': 'Leather Hard Case & Microfiber Cloth'
    },
    price: 175,
    originalPrice: 220,
    discount: 20,
    rating: 4.82,
    reviews: 185,
    stock: 45,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    trending: false,
    bestseller: true,
    colors: ['Gold / Brown Polarized', 'Silver / Smoke Grey'],
    createdAt: '2026-06-05'
  },
  {
    id: 'prod-27',
    name: 'Minimalist RFID Slim Metal Wallet',
    category: 'Accessories',
    brand: 'NovaStreet',
    description: 'Aerospace grade aluminum cardholder with integrated elastic cash strap and instant pop-up card trigger mechanism.',
    specifications: {
      'Capacity': 'Holds 1-12 Cards + Cash',
      'Protection': '100% RFID Blocking',
      'Material': '6061-T6 Anodized Aluminum',
      'Weight': '60 grams'
    },
    price: 68,
    originalPrice: 85,
    discount: 20,
    rating: 4.76,
    reviews: 420,
    stock: 80,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    trending: true,
    bestseller: true,
    colors: ['Crimson Red', 'Gunmetal Grey', 'Matte Black'],
    createdAt: '2026-07-07'
  },
  {
    id: 'prod-28',
    name: 'Waterproof Commuter Travel Backpack 28L',
    category: 'Accessories',
    brand: 'NovaStreet',
    description: 'Weatherproof TPU coated ballistic nylon backpack with magnetic Fidlock buckles, hidden passport pocket, and expandable capacity.',
    specifications: {
      'Capacity': '24L expandable to 28L',
      'Material': '840D Ballistic Nylon Waterproof TPU',
      'Laptop Compartment': 'Fits up to 17" Laptops',
      'Zippers': 'YKK Aquaguard Sealed Zippers'
    },
    price: 165,
    originalPrice: 200,
    discount: 18,
    rating: 4.88,
    reviews: 260,
    stock: 35,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    trending: false,
    bestseller: false,
    colors: ['Stealth Black', 'Crimson Red Trim'],
    createdAt: '2026-07-21'
  },
  {
    id: 'prod-29',
    name: 'Smart Ambient Desk Lamp & Wireless Charger',
    category: 'Electronics',
    brand: 'NovaTech',
    description: 'Sleek aluminum arm LED lamp with 15W Qi wireless fast charging pad base, touch slider temperature control, and auto-dimming.',
    specifications: {
      'Wireless Output': '15W Fast Charge Qi Standard',
      'Brightness': '1000 Lux Adjustable',
      'Color Temperature': '2700K - 6500K (5 modes)',
      'Port': 'USB-A 5V/2.1A Passthrough'
    },
    price: 89,
    originalPrice: 119,
    discount: 25,
    rating: 4.79,
    reviews: 195,
    stock: 40,
    image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: false,
    trending: false,
    bestseller: true,
    colors: ['Silver Chrome', 'Space Black'],
    createdAt: '2026-06-18'
  },
  {
    id: 'prod-30',
    name: 'Modernist Velvet Accent Armchair',
    category: 'Furniture',
    brand: 'Maison Luxe',
    description: 'Sculptural curved armchair upholstered in plush stain-resistant jewel red velvet with matte black steel spindle legs.',
    specifications: {
      'Fabric': '100% Performance Velvet',
      'Frame': 'Kiln-Dried Hardwood & Reinforced Steel',
      'Dimensions': '31"W x 30"D x 32"H',
      'Weight Capacity': '300 lbs'
    },
    price: 540,
    originalPrice: 650,
    discount: 17,
    rating: 4.91,
    reviews: 78,
    stock: 10,
    image: 'https://images.unsplash.com/photo-1580481072645-022f9a6d8310?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1580481072645-022f9a6d8310?q=80&w=1000&auto=format&fit=crop'
    ],
    featured: true,
    trending: true,
    bestseller: false,
    colors: ['Crimson Red Velvet', 'Emerald Green Velvet', 'Royal Sapphire Velvet'],
    createdAt: '2026-07-27'
  }
];

export const CATEGORIES_DATA = [
  { name: 'Electronics', count: 6, icon: 'Smartphone', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop' },
  { name: 'Fashion', count: 4, icon: 'Shirt', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=600&auto=format&fit=crop' },
  { name: 'Shoes', count: 4, icon: 'Footprints', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop' },
  { name: 'Watches', count: 3, icon: 'Watch', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop' },
  { name: 'Furniture', count: 4, icon: 'Armchair', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=600&auto=format&fit=crop' },
  { name: 'Beauty', count: 3, icon: 'Sparkles', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop' },
  { name: 'Gaming', count: 3, icon: 'Gamepad2', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=600&auto=format&fit=crop' },
  { name: 'Accessories', count: 4, icon: 'Glasses', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop' },
];

export const BRANDS_LIST = [
  'AuraSound',
  'NovaTech',
  'VisionX',
  'SoundWave',
  'Zara Luxe',
  'Aura Luxe',
  'Kuro Studio',
  'Maison Luxe',
  'Nike Nova',
  'Chester & Co.',
  'NovaStreet',
  'Aethel Chrono',
  'Nordic Zeit',
  'Herman Luxe',
  'Lumina Design',
  'Aura Skin',
  'Parfums De Nova'
];
