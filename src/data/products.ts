export interface ProductVariant {
  size: string;
  price: number;
  original?: number;
}

export interface Product {
  id: number;
  name: string;
  category: 'Grounded Spices' | 'Mustard Oils' | 'Whole Spices' | 'Blended Spices' | 'Kesari Specials' | 'New Arrivals';
  rating: number;
  reviews: number;
  image: string;
  description: string;
  variants: ProductVariant[];
  badge?: string;
  isNew?: boolean;
}

export const PRODUCTS_DATA: Product[] = [
  // 1. GROUNDED SPICES
  {
    id: 1,
    name: "Kesari Nandan Natural Haldi Powder (हल्दी पाउडर)",
    category: "Grounded Spices",
    rating: 5.0,
    reviews: 148,
    image: "/Haldi Powder.png",
    description: "100% Pure, sun-dried turmeric roots stone-ground to preserve natural curcumin and aromatic essential oils. Imparts radiant golden color and immunity-boosting goodness to every Indian curry and dal.",
    variants: [
      { size: "100g", price: 38, original: 45 },
      { size: "200g", price: 72, original: 85 },
      { size: "500g", price: 165, original: 195 },
      { size: "1kg", price: 310, original: 360 }
    ],
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Kesari Nandan Natural Lal Mirch Powder (तीखी लाल मिर्च)",
    category: "Grounded Spices",
    rating: 4.9,
    reviews: 172,
    image: "/Laal Mirch Powder.png",
    description: "Carefully selected stemless red chillies, sun-ripened and pulverized to deliver the perfect balance of fiery heat, rich crimson color, and authentic pungent flavor without artificial additives or fillers.",
    variants: [
      { size: "100g", price: 46, original: 55 },
      { size: "200g", price: 88, original: 105 },
      { size: "500g", price: 205, original: 240 },
      { size: "1kg", price: 395, original: 460 }
    ],
    badge: "Authentic Heat"
  },
  {
    id: 3,
    name: "Kesari Nandan Natural Jeera Powder (भुना जीरा पाउडर)",
    category: "Grounded Spices",
    rating: 4.8,
    reviews: 116,
    image: "/Jeera Powder.png",
    description: "Freshly roasted and gently ground cumin seeds with an intensely warm, earthy fragrance. Essential for tempering dals, curries, buttermilk (chaas), and aromatic raitas.",
    variants: [
      { size: "100g", price: 68, original: 80 },
      { size: "200g", price: 130, original: 155 },
      { size: "500g", price: 310, original: 370 }
    ],
    badge: "Aromatic"
  },
  {
    id: 4,
    name: "Kesari Nandan Natural Black Pepper Powder (काली मिर्च)",
    category: "Grounded Spices",
    rating: 5.0,
    reviews: 88,
    image: "/Black Pepper Powder.png",
    description: "Grade-A Malabar black peppercorns, coarsely ground to unleash instant pungent warmth, piperine goodness, and sharp zest for egg dishes, soups, stir-fries, and gravies.",
    variants: [
      { size: "50g", price: 75, original: 90 },
      { size: "100g", price: 140, original: 165 },
      { size: "250g", price: 330, original: 390 }
    ],
    badge: "Malabar Pepper"
  },

  // 2. MUSTARD OILS (COLD-PRESSED)
  {
    id: 5,
    name: "Kesari Nandan Pure Kachi Ghani Black Mustard Oil (1L)",
    category: "Mustard Oils",
    rating: 5.0,
    reviews: 215,
    image: "/Black Mustard Oil 1ltr.png",
    description: "Extracted from premium black mustard seeds through the traditional cold-pressed kachi ghani process. High in pungent aroma, natural antioxidants, and monounsaturated fatty acids for peak heart health and authentic culinary flavor.",
    variants: [
      { size: "500ml", price: 110, original: 130 },
      { size: "1 Litre", price: 210, original: 245 },
      { size: "5 Litre", price: 980, original: 1150 }
    ],
    badge: "Heart Health"
  },
  {
    id: 6,
    name: "Kesari Nandan Pure Kachi Ghani Yellow Mustard Oil (1L)",
    category: "Mustard Oils",
    rating: 4.9,
    reviews: 94,
    image: "/Yellow Mustard Oil 1 lt .png",
    description: "Premium cold-pressed oil made from high-grade yellow mustard seeds (Peeli Sarson). Milder and smoother pungency than black mustard oil, imparting a rich golden shimmer to artisanal curries, pickles, and sautes.",
    variants: [
      { size: "500ml", price: 125, original: 145 },
      { size: "1 Litre", price: 235, original: 270 },
      { size: "5 Litre", price: 1120, original: 1290 }
    ],
    badge: "Cold-Pressed"
  },
  {
    id: 7,
    name: "Kesari Nandan Yellow Mustard Oil (500ml Bottle)",
    category: "Mustard Oils",
    rating: 4.8,
    reviews: 64,
    image: "/Yellow Mustard Oil 500 ml .png",
    description: "Convenient 500ml bottle of 100% natural cold pressed yellow mustard oil. Unadulterated and non-GMO, perfect for daily heart-healthy cooking and traditional delicacies.",
    variants: [
      { size: "500ml", price: 125, original: 145 }
    ],
    badge: "Compact"
  },
  {
    id: 8,
    name: "Kesari Nandan Artisanal Kachi Ghani Mustard Oil",
    category: "Mustard Oils",
    rating: 4.9,
    reviews: 78,
    image: "/Yellow Mustard Oil .png",
    description: "Traditional wood-pressed golden mustard oil extracted at slow speeds under 40°C to preserve natural vitamins A, D, and E with an authentic pungent aroma.",
    variants: [
      { size: "1 Litre", price: 240, original: 280 },
      { size: "2 Litre", price: 460, original: 530 }
    ],
    badge: "Wood Pressed"
  },

  // 3. WHOLE SPICES (साबुत मसाले)
  {
    id: 9,
    name: "Kesari Nandan Sabut Malabar Black Pepper (साबुत काली मिर्च)",
    category: "Whole Spices",
    rating: 5.0,
    reviews: 92,
    image: "/Black Pepper Powder.png",
    description: "Selected large-berry Malabar black peppercorns, sun-dried to lock in rich piperine oils. Perfect for whole-spice tempering, biryanis, and rasam.",
    variants: [
      { size: "100g", price: 85, original: 100 },
      { size: "250g", price: 195, original: 230 },
      { size: "500g", price: 380, original: 440 }
    ],
    badge: "Whole Spice"
  },
  {
    id: 10,
    name: "Kesari Nandan Royal Sabut Shahi Jeera (साबुत जीरा)",
    category: "Whole Spices",
    rating: 4.9,
    reviews: 108,
    image: "/Jeera Powder.png",
    description: "Sun-ripened royal whole cumin seeds boasting distinct earthy fragrance and crisp crackle when tempered in hot Kesari Nandan Mustard Oil.",
    variants: [
      { size: "100g", price: 75, original: 90 },
      { size: "250g", price: 175, original: 210 },
      { size: "500g", price: 340, original: 395 }
    ],
    badge: "Crisp Aroma"
  },
  {
    id: 11,
    name: "Kesari Nandan Whole Yellow Mustard Seeds (पीली सरसों दाना)",
    category: "Whole Spices",
    rating: 4.8,
    reviews: 74,
    image: "/Yellow Mustard Oil .png",
    description: "Clean, high-oil yellow mustard seeds ideal for traditional Indian pickling (Aam & Nimbu Achar) and South Indian tempering (Tadka).",
    variants: [
      { size: "200g", price: 65, original: 80 },
      { size: "500g", price: 150, original: 180 },
      { size: "1kg", price: 280, original: 330 }
    ],
    badge: "Pickle Essential"
  },
  {
    id: 12,
    name: "Kesari Nandan Whole Stemless Red Chillies (साबुत लाल मिर्च)",
    category: "Whole Spices",
    rating: 4.9,
    reviews: 86,
    image: "/Laal Mirch Powder.png",
    description: "Vibrant whole dried red chillies, de-stemmed and sun-ripened. Delivers deep appetizing red color and sharp flavor to tadka and chutneys.",
    variants: [
      { size: "100g", price: 55, original: 65 },
      { size: "250g", price: 130, original: 155 },
      { size: "500g", price: 250, original: 295 }
    ],
    badge: "Sun Dried"
  },

  // 4. BLENDED SPICES (मसाला ब्लेंड्स)
  {
    id: 13,
    name: "Kesari Nandan Royal Shahi Garam Masala (शाही गरम मसाला)",
    category: "Blended Spices",
    rating: 5.0,
    reviews: 184,
    image: "/assets/recipe-kadai-paneer.jpg",
    description: "A master blend of 16 hand-roasted royal spices including black cardamom, mace, cinnamon, and cloves. Imparts regal aroma to gravies and curries.",
    variants: [
      { size: "50g", price: 60, original: 75 },
      { size: "100g", price: 115, original: 140 },
      { size: "200g", price: 220, original: 260 }
    ],
    badge: "Chef's Secret"
  },
  {
    id: 14,
    name: "Kesari Nandan Mumbai Chowpatty Pav Bhaji Masala",
    category: "Blended Spices",
    rating: 4.9,
    reviews: 132,
    image: "/Haldi Powder.png",
    description: "The authentic roadside taste of Mumbai's iconic buttery pav bhaji, slow-blended with dried mango powder, coriander, and star anise.",
    variants: [
      { size: "100g", price: 65, original: 80 },
      { size: "200g", price: 125, original: 150 }
    ],
    badge: "Street Special"
  },
  {
    id: 15,
    name: "Kesari Nandan Amritsari Chana & Chole Masala",
    category: "Blended Spices",
    rating: 5.0,
    reviews: 167,
    image: "/assets/recipe-dum-biryani.jpg",
    description: "Tangy, dark, and deeply aromatic spice blend crafted with dried pomegranate seeds (anardana), dry ginger, and black salt for dhaba-style chole.",
    variants: [
      { size: "100g", price: 70, original: 85 },
      { size: "200g", price: 135, original: 160 }
    ],
    badge: "Dhaba Style"
  },
  {
    id: 16,
    name: "Kesari Nandan Signature Kitchen King Masala",
    category: "Blended Spices",
    rating: 4.8,
    reviews: 142,
    image: "/Laal Mirch Powder.png",
    description: "The all-rounder curry spice blend that elevates everyday sabzis, paneer dishes, and koftas with harmonious taste and warm aroma.",
    variants: [
      { size: "100g", price: 68, original: 80 },
      { size: "200g", price: 130, original: 155 },
      { size: "500g", price: 310, original: 360 }
    ],
    badge: "All Rounder"
  },

  // 5. KESARI SPECIALS
  {
    id: 17,
    name: "Kesari Nandan Royal Kesar Milk Masala & Thandai",
    category: "Kesari Specials",
    rating: 5.0,
    reviews: 156,
    image: "/assets/recipe-thandai.jpg",
    description: "An opulent royal formulation of Kashmiri saffron (kesar), pistachios, almonds, green cardamom, nutmeg, and dry rose petals. Turns warm or chilled milk into an invigorating festive celebration.",
    variants: [
      { size: "100g", price: 185, original: 220 },
      { size: "250g", price: 440, original: 510 }
    ],
    badge: "Royal Blend"
  },
  {
    id: 18,
    name: "Kesari Nandan Kashmiri Pure Kesar Saffron Strands",
    category: "Kesari Specials",
    rating: 5.0,
    reviews: 98,
    image: "/assets/pulao-spotlight.jpg",
    description: "100% Grade-1 Mongra Kashmiri saffron strands harvested from Pampore valley. Imparts intense crimson color and intoxicating royal aroma to biryanis and sweets.",
    variants: [
      { size: "1g Box", price: 340, original: 400 },
      { size: "2g Box", price: 650, original: 760 },
      { size: "5g Tin", price: 1550, original: 1800 }
    ],
    badge: "Grade 1 Saffron"
  },
  {
    id: 19,
    name: "Kesari Nandan Heirloom Kadai Chai Masala",
    category: "Kesari Specials",
    rating: 4.9,
    reviews: 112,
    image: "/assets/recipe-thandai.jpg",
    description: "The soul of morning tea: aromatic combination of green cardamom, dried ginger (sonth), cinnamon, cloves, and black pepper.",
    variants: [
      { size: "100g", price: 95, original: 115 },
      { size: "200g", price: 180, original: 215 }
    ],
    badge: "Morning Bliss"
  },
  {
    id: 20,
    name: "Kesari Nandan Achar Special Pickle Masala (अचार मसाला)",
    category: "Kesari Specials",
    rating: 4.9,
    reviews: 83,
    image: "/assets/recipe-mango-pickle.jpg",
    description: "Traditional grandmother's blend of crushed mustard, fenugreek, fennel, nigella, and hot red chilli. Just add Kesari Nandan Mustard Oil for instant pickles!",
    variants: [
      { size: "200g", price: 85, original: 100 },
      { size: "500g", price: 195, original: 230 }
    ],
    badge: "Pickle Master"
  },

  // 6. NEW ARRIVALS
  {
    id: 21,
    name: "Kesari Nandan Fresh Wooden Ghani Cold-Pressed Mustard Oil",
    category: "New Arrivals",
    rating: 5.0,
    reviews: 43,
    image: "/Black Mustard Oil 1ltr.png",
    description: "Newly launched traditional wooden mortar-and-pestle (Lakdi Ghani) cold-pressed mustard oil. Unfiltered, single-batch extracted for the ultimate pungent kick.",
    variants: [
      { size: "1 Litre", price: 260, original: 300 },
      { size: "5 Litre", price: 1250, original: 1450 }
    ],
    badge: "New Launch",
    isNew: true
  },
  {
    id: 22,
    name: "Kesari Nandan Organic Stemless Kashmiri Mirch (New Crop)",
    category: "New Arrivals",
    rating: 4.9,
    reviews: 38,
    image: "/Laal Mirch Powder.png",
    description: "Freshly harvested new season Kashmiri red chillies. Low heat, high natural oil, and rich ruby red color for tandoori and restaurant-style gravies.",
    variants: [
      { size: "100g", price: 65, original: 75 },
      { size: "250g", price: 155, original: 180 }
    ],
    badge: "New Crop",
    isNew: true
  },
  {
    id: 23,
    name: "Kesari Nandan Curcumin-Rich Lakadong Turmeric Powder",
    category: "New Arrivals",
    rating: 5.0,
    reviews: 51,
    image: "/Haldi Powder.png",
    description: "Special new harvest from Meghalaya containing a verified 7%+ natural curcumin content. Potent anti-inflammatory and vibrant golden culinary spice.",
    variants: [
      { size: "100g", price: 75, original: 90 },
      { size: "250g", price: 175, original: 210 }
    ],
    badge: "7% Curcumin",
    isNew: true
  },
  {
    id: 24,
    name: "Kesari Nandan Handcrafted Royal Spices Festive Gift Box",
    category: "New Arrivals",
    rating: 5.0,
    reviews: 29,
    image: "/assets/recipe-dum-biryani.jpg",
    description: "Exclusive festive collector's wooden chest containing 4 signature Kesari Nandan stone-ground spices and a 500ml artisan yellow mustard oil.",
    variants: [
      { size: "Gift Hamper Box", price: 899, original: 1100 }
    ],
    badge: "Festive Box",
    isNew: true
  }
];

