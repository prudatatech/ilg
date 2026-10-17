export interface Recipe {
  id: number;
  title: string;
  badge: string;
  time: string;
  difficulty: string;
  serves: string;
  image: string;
  category: 'curry' | 'rice' | 'pickle' | 'beverage';
  spicesUsed: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  pairedProduct?: string;
}

export const RECIPES_DATA: Recipe[] = [
  {
    id: 1,
    title: "Punjabi Sarson Ka Saag with Makki Di Roti",
    badge: "Traditional Classic",
    time: "45 mins",
    difficulty: "Medium",
    serves: "4 Persons",
    image: "/assets/recipe-sarson-saag.jpg",
    category: "curry",
    spicesUsed: "Kesari Nandan Pure Kachi Ghani Mustard Oil, Lal Mirch, Haldi Powder",
    description: "The crown jewel of winter Punjabi cuisine. Fresh mustard and spinach greens slow-cooked and tempered with smoky garlic, ginger, and pungent Kesari Nandan Mustard Oil.",
    ingredients: [
      "500g Fresh Sarson (Mustard leaves) & 250g Palak (Spinach)",
      "3 tbsp Kesari Nandan Kachi Ghani Mustard Oil",
      "1 tsp Kesari Nandan Haldi (Turmeric Powder)",
      "1 tbsp Kesari Nandan Lal Mirch Powder",
      "2 tbsp Makki Ka Atta (Maize flour)",
      "8 cloves Garlic & 2 inch Ginger (finely chopped)",
      "2 Green Chilies & 2 medium Onions",
      "Salt to taste & White butter for serving"
    ],
    instructions: [
      "Wash and finely chop fresh mustard leaves (sarson), bathua, and spinach.",
      "Pressure cook the greens with ginger, garlic, green chilies, and a pinch of Kesari Nandan Haldi for 15 minutes.",
      "Mash cooked greens with a traditional wooden masher (madhani) adding 2 tbsp maize flour (makki ka atta) to thicken.",
      "In a traditional iron kadai, heat 3 tablespoons of Kesari Nandan Kachi Ghani Black Mustard Oil until it gently smokes.",
      "Add cumin seeds, chopped garlic, onion, and Kesari Nandan Lal Mirch Powder. Saute until golden.",
      "Pour in the mashed saag and simmer on low flame for 20 minutes until oil glazes on top.",
      "Serve piping hot with fresh Makki Ki Roti and a dollop of white homemade butter (makhan)."
    ],
    pairedProduct: "Kesari Nandan Kachi Ghani Black Mustard Oil"
  },
  {
    id: 2,
    title: "Royal Shahi Kadai Paneer",
    badge: "Chef's Signature",
    time: "30 mins",
    difficulty: "Easy",
    serves: "4 Persons",
    image: "/assets/recipe-kadai-paneer.jpg",
    category: "curry",
    spicesUsed: "Kesari Nandan Jeera Powder, Lal Mirch Powder, Haldi Powder",
    description: "Soft cottage cheese cubes simmered in a velvety, aromatic tomato-cashew gravy roasted with stone-ground Kesari Nandan spices and fresh ginger juliennes.",
    ingredients: [
      "300g Fresh Malai Paneer (cubed)",
      "2 tbsp Kesari Nandan Mustard Oil or Ghee",
      "1.5 tsp Kesari Nandan Lal Mirch Powder",
      "1 tsp Kesari Nandan Jeera Powder",
      "0.5 tsp Kesari Nandan Haldi Powder",
      "4 Ripe Tomatoes & 10 Cashews (pureed)",
      "1 Capsicum & 1 Onion (diced petals)",
      "2 tbsp Fresh Cream & Kasuri Methi"
    ],
    instructions: [
      "Heat 1 tbsp oil in a pan and lightly toss diced paneer and capsicum for 2 minutes. Set aside.",
      "In the same pan, heat remaining Kesari Nandan oil. Add cumin seeds and chopped onions, sauté until golden brown.",
      "Add Kesari Nandan Haldi, Lal Mirch, and Jeera Powder. Stir in the tomato-cashew puree.",
      "Cook on medium heat until the gravy releases oil along the edges (around 8 minutes).",
      "Add 1/2 cup warm water, salt, and crushed kasuri methi. Bring to a gentle boil.",
      "Fold in the sauteed paneer cubes and capsicum. Simmer covered for 5 minutes.",
      "Swirl in fresh cream, garnish with ginger juliennes and serve hot with butter naan or tandoori roti."
    ],
    pairedProduct: "Kesari Nandan Red Chilli Powder (तीखी लाल मिर्च)"
  },
  {
    id: 3,
    title: "Royal Hyderabadi Dum Biryani",
    badge: "Grand Feast",
    time: "50 mins",
    difficulty: "Hard",
    serves: "6 Persons",
    image: "/assets/recipe-dum-biryani.jpg",
    category: "rice",
    spicesUsed: "Kesari Nandan Haldi, Jeera, Black Pepper, Cloves & Saffron",
    description: "Long-grain basmati rice cooked on slow charcoal dum with marinated vegetables, golden fried onions (birista), toasted nuts, and aromatic whole spices.",
    ingredients: [
      "2 cups Aged Basmati Rice (soaked 30 mins)",
      "2 tbsp Kesari Nandan Kachi Ghani Oil / Ghee",
      "1 tsp Kesari Nandan Black Pepper Powder",
      "1 tsp Kesari Nandan Jeera Powder",
      "0.5 tsp Kesari Nandan Haldi Powder",
      "Pinch of Saffron dissolved in warm milk",
      "1 cup Mixed Vegetables (cauliflower, carrots, beans, peas)",
      "1/2 cup Fried Golden Onions (Birista)",
      "Fresh Mint leaves & Coriander leaves"
    ],
    instructions: [
      "Boil rice with whole spices (cloves, cardamom, cinnamon) until 70% cooked; drain immediately.",
      "In a heavy-bottom handi, heat oil and sauté ginger-garlic paste with Kesari Nandan Haldi, Jeera, and Black Pepper.",
      "Add vegetables and yogurt, cooking until 80% tender.",
      "Layer half the cooked basmati rice over the spiced vegetables.",
      "Sprinkle fried onions, chopped mint, coriander, saffron milk, and remaining rice.",
      "Seal the handi rim with wheat dough and heavy lid.",
      "Cook on low flame (dum) for 20 minutes to allow aromas to circulate completely.",
      "Gently fluff layers from the side and serve steaming with cool cucumber mint raita."
    ],
    pairedProduct: "Kesari Nandan Black Pepper Powder"
  },
  {
    id: 4,
    title: "Traditional Punjabi Aam Ka Achar in Mustard Oil",
    badge: "Heirloom Recipe",
    time: "25 mins (+ sunlight)",
    difficulty: "Medium",
    serves: "Jar (1 Kg)",
    image: "/assets/recipe-mango-pickle.jpg",
    category: "pickle",
    spicesUsed: "Kesari Nandan Pure Kachi Ghani Mustard Oil, Haldi, Lal Mirch, Methi, Saunf",
    description: "Crisp raw green mangoes pickled in cold-pressed Kesari Nandan mustard oil with stone-crushed fenugreek, nigella, and vibrant red chili powder.",
    ingredients: [
      "1 kg Raw Green Mangoes (washed, dried & cubed)",
      "250 ml Kesari Nandan Pure Kachi Ghani Yellow Mustard Oil",
      "50g Kesari Nandan Haldi Powder",
      "50g Kesari Nandan Lal Mirch Powder",
      "50g Methi Dana (Fenugreek seeds, coarsely crushed)",
      "50g Saunf (Fennel seeds, coarsely crushed)",
      "25g Kalonji (Nigella seeds)",
      "100g Rock Salt / Sea Salt"
    ],
    instructions: [
      "Ensure mango cubes are completely moisture-free by wiping with a clean cloth.",
      "In a large earthen vessel, mix mango cubes with Kesari Nandan Haldi and salt. Leave for 4 hours to release excess water.",
      "In a dry pan, gently warm Kesari Nandan Mustard Oil until it reaches smoking point, then allow it to cool completely.",
      "Mix crushed fennel, fenugreek, kalonji, and Kesari Nandan Lal Mirch Powder into the mangoes.",
      "Pour the cooled mustard oil over the spiced mango mixture and toss thoroughly with a wooden ladle.",
      "Transfer into a clean ceramic barni jar, cover with a cotton muslin cloth, and place in sunlight for 5-7 days.",
      "The mustard oil naturally preserves the pickle for years with an unmatched authentic aroma!"
    ],
    pairedProduct: "Kesari Nandan Yellow Mustard Oil (पीली सरसों तेल)"
  },
  {
    id: 5,
    title: "Summer Special Gujarati Dal Dhokli",
    badge: "Heritage Comfort",
    time: "35 mins",
    difficulty: "Easy",
    serves: "4 Persons",
    image: "/assets/recipe-dal-dhokli.jpg",
    category: "curry",
    spicesUsed: "Kesari Nandan Haldi Powder, Jeera Powder, Mustard Seeds",
    description: "A comforting, sweet, spicy, and tangy Gujarati one-pot meal. Rolled spiced whole wheat dumplings simmered gently in fragrant pigeon pea (tuvar) dal.",
    ingredients: [
      "1 cup Tuvar Dal (Pigeon pea lentils)",
      "1 cup Whole Wheat Flour (Atta)",
      "2 tbsp Kesari Nandan Mustard Oil or Ghee",
      "1 tsp Kesari Nandan Haldi Powder",
      "1 tsp Kesari Nandan Jeera Powder",
      "1 tsp Mustard Seeds & Carom Seeds (Ajwain)",
      "2 tbsp Jaggery & 1 tbsp Lemon Juice / Kokum",
      "Fresh Coriander leaves & Peanuts"
    ],
    instructions: [
      "Boil tuvar dal with a pinch of Kesari Nandan Haldi until completely soft, then blend smoothly.",
      "Knead a stiff dough of whole wheat flour seasoned with ajwain, Kesari Nandan Haldi, and chili powder.",
      "Roll dough thin and cut into diamond-shaped dumplings (dhoklis).",
      "Temper dal with mustard seeds, cumin seeds, curry leaves, ginger, and green chillies in hot Kesari Nandan oil.",
      "Add jaggery, kokum, and simmer. Gently drop dhoklis into the simmering dal.",
      "Cook for 12-15 minutes until dhoklis turn soft and tender. Garnish with chopped coriander and fried peanuts."
    ],
    pairedProduct: "Kesari Nandan Turmeric Powder (हल्दी पाउडर)"
  },
  {
    id: 6,
    title: "Festive Royal Kesari Thandai & Milk Masala",
    badge: "Festive Drink",
    time: "15 mins",
    difficulty: "Easy",
    serves: "6 Persons",
    image: "/assets/recipe-thandai.jpg",
    category: "beverage",
    spicesUsed: "Kesari Nandan Milk Masala, Saffron Strands, Green Cardamom, Nutmeg",
    description: "A revitalizing festive elixir infused with crushed dry fruits, aromatic Kashmiri saffron, fennel, and invigorating cooling spices.",
    ingredients: [
      "1 Liter Fresh Full-Cream Milk",
      "3 tbsp Kesari Nandan Kesar Milk Masala Powder",
      "10-12 Kashmiri Saffron Strands",
      "4 tbsp Sugar or Honey (adjust to taste)",
      "1 tbsp Slivered Almonds and Pistachios",
      "Dried Organic Rose Petals for garnish"
    ],
    instructions: [
      "Boil 1 liter of fresh full-cream milk and let it cool to room temperature.",
      "Add 3 tablespoons of Kesari Nandan Kesar Milk Masala & Thandai powder.",
      "Whisk thoroughly to infuse saffron aroma and rich nut pieces throughout the milk.",
      "Refrigerate for at least 2 hours to allow flavors to fully mature.",
      "Serve chilled in traditional brass or clay kulhads garnished with rose petals and slivered pistachios."
    ],
    pairedProduct: "Kesari Nandan Royal Kesar Milk Masala"
  },
  {
    id: 7,
    title: "Aromatic Kesari Shahi Pulao",
    badge: "Rice Specialty",
    time: "30 mins",
    difficulty: "Easy",
    serves: "4 Persons",
    image: "/assets/pulao-spotlight.jpg",
    category: "rice",
    spicesUsed: "Kesari Nandan Haldi, Jeera, Black Pepper, Bay Leaves",
    description: "Long-grain basmati rice cooked with fresh seasonal vegetables, golden turmeric, toasted cashews, and whole aromatic spices.",
    ingredients: [
      "1.5 cups Long Grain Basmati Rice",
      "2 tbsp Kesari Nandan Kachi Ghani Oil",
      "1 tsp Kesari Nandan Haldi Powder",
      "1 tsp Kesari Nandan Jeera Powder",
      "0.5 tsp Kesari Nandan Black Pepper Powder",
      "Whole spices (Bay leaf, 4 cloves, 1 inch cinnamon)",
      "1 cup Diced Carrots, Green Peas & French Beans",
      "15 Golden Fried Cashews"
    ],
    instructions: [
      "Rinse basmati rice and soak in water for 25 minutes.",
      "Heat 2 tbsp oil in a pot, add bay leaf, cloves, and whole black peppercorns.",
      "Add sliced onions, carrots, and peas; saute for 3 minutes.",
      "Add Kesari Nandan Haldi and Jeera powder, then mix drained rice gently.",
      "Add warm water and salt. Cover and simmer on low heat for 15 minutes.",
      "Rest 5 minutes, fluff gently with a fork, and garnish with golden fried cashews."
    ],
    pairedProduct: "Kesari Nandan Cumin Powder (जीरा पाउडर)"
  }
];

