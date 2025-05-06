/**
 * Represents a product with its details.
 */
export interface Product {
  id: string;
  name: string;
  description: string; // Short description for cards
  longDescription: string; // Detailed description for product page
  price: number;
  imageUrl: string; // Main image for card
  category: string;
  skinType?: string[];
  ingredients: string[];
  usage: string;
  isFeatured?: boolean;
  images: { url: string; alt: string; dataAiHint?: string }[]; // Gallery images for product page
  stock: number; // Basic stock info
  rating?: number; // Optional average rating
  reviewCount?: number; // Optional number of reviews
  dataAiHint?: string; // AI hint for the main image
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Lavender Dream Soap",
    description: "Calming lavender soap for a peaceful cleanse.",
    longDescription: "Indulge in the soothing aroma of our Lavender Dream Soap. Made with pure lavender essential oil and nourishing shea butter, this soap gently cleanses while calming your senses. Perfect for a relaxing bath or shower before bedtime.",
    price: 7.99,
    imageUrl: "https://picsum.photos/seed/lavenderdream/400/300",
    dataAiHint: "lavender soap",
    category: "Bar Soaps",
    skinType: ["All", "Sensitive"],
    ingredients: ["Saponified Olive Oil", "Coconut Oil", "Shea Butter", "Lavender Essential Oil", "Dried Lavender Buds"],
    usage: "Lather with water and apply to skin. Rinse thoroughly. Avoid contact with eyes.",
    isFeatured: true,
    images: [
      { url: "https://picsum.photos/seed/lavenderdream_1/600/400", alt: "Lavender Dream Soap bar", dataAiHint: "lavender soap" },
      { url: "https://picsum.photos/seed/lavenderdream_2/600/400", alt: "Lavender Dream Soap texture", dataAiHint: "soap texture" },
      { url: "https://picsum.photos/seed/lavenderdream_3/600/400", alt: "Lavender field inspiration", dataAiHint: "lavender field" },
    ],
    stock: 50,
    rating: 4.8,
    reviewCount: 120,
  },
  {
    id: "2",
    name: "Tea Tree Power Scrub",
    description: "Invigorating tea tree scrub for a deep cleanse.",
    longDescription: "Awaken your skin with our Tea Tree Power Scrub. Infused with tea tree oil and exfoliating natural particles, this scrub helps to purify pores and remove dead skin cells, leaving your skin feeling refreshed and revitalized. Ideal for oily or acne-prone skin.",
    price: 9.49,
    imageUrl: "https://picsum.photos/seed/teatreescrub/400/300",
    dataAiHint: "tea tree scrub",
    category: "Scrubs & Exfoliants",
    skinType: ["Oily", "Combination", "Acne-prone"],
    ingredients: ["Saponified Coconut Oil", "Pumice", "Tea Tree Essential Oil", "Peppermint Essential Oil", "Vitamin E"],
    usage: "Apply to damp skin and gently massage in circular motions. Rinse thoroughly. Use 2-3 times a week.",
    isFeatured: true,
    images: [
      { url: "https://picsum.photos/seed/teatreescrub_1/600/400", alt: "Tea Tree Power Scrub product", dataAiHint: "tea tree scrub" },
      { url: "https://picsum.photos/seed/teatreescrub_2/600/400", alt: "Tea Tree Power Scrub texture", dataAiHint: "scrub texture" },
    ],
    stock: 35,
    rating: 4.6,
    reviewCount: 85,
  },
  {
    id: "3",
    name: "Oatmeal & Honey Soother",
    description: "Gentle oatmeal and honey soap for sensitive skin.",
    longDescription: "Our Oatmeal & Honey Soother bar is specially formulated for sensitive and dry skin. Colloidal oatmeal and raw honey work together to calm irritation, moisturize, and provide a gentle, comforting cleanse.",
    price: 8.29,
    imageUrl: "https://picsum.photos/seed/oatmealhoney/400/300",
    dataAiHint: "oatmeal honey soap",
    category: "Bar Soaps",
    skinType: ["Sensitive", "Dry", "All"],
    ingredients: ["Saponified Olive Oil", "Goat Milk", "Colloidal Oatmeal", "Raw Honey", "Vitamin E"],
    usage: "Lather with water and apply to skin. Rinse thoroughly. Suitable for daily use.",
    images: [
      { url: "https://picsum.photos/seed/oatmealhoney_1/600/400", alt: "Oatmeal & Honey Soother bar", dataAiHint: "oatmeal honey soap" },
      { url: "https://picsum.photos/seed/oatmealhoney_2/600/400", alt: "Oatmeal & Honey Soother ingredients", dataAiHint: "oatmeal honey" },
    ],
    stock: 60,
    rating: 4.9,
    reviewCount: 150,
  },
  {
    id: "4",
    name: "Citrus Burst Body Wash",
    description: "Energizing citrus body wash to start your day.",
    longDescription: "Experience an invigorating burst of citrus with our Citrus Burst Body Wash. A blend of orange, lemon, and grapefruit essential oils creates a zesty lather that cleanses and uplifts, leaving your skin feeling soft and smelling fresh.",
    price: 12.99,
    imageUrl: "https://picsum.photos/seed/citrusburst/400/300",
    dataAiHint: "citrus body wash",
    category: "Body Washes",
    skinType: ["All", "Normal"],
    ingredients: ["Aqua", "Potassium Oleate", "Potassium Cocoate", "Glycerin", "Orange Peel Oil", "Lemon Peel Oil", "Grapefruit Peel Oil", "Citric Acid"],
    usage: "Apply to a loofah or directly to skin, lather, and rinse.",
    isFeatured: true,
    images: [
      { url: "https://picsum.photos/seed/citrusburst_1/600/400", alt: "Citrus Burst Body Wash bottle", dataAiHint: "citrus body wash" },
      { url: "https://picsum.photos/seed/citrusburst_2/600/400", alt: "Citrus fruits", dataAiHint: "citrus fruit" },
    ],
    stock: 40,
    rating: 4.7,
    reviewCount: 95,
  },
  {
    id: "5",
    name: "Rose Petal Facial Toner",
    description: "Hydrating rose petal toner for a radiant complexion.",
    longDescription: "Refresh and balance your skin with our Rose Petal Facial Toner. Made with pure rosewater and witch hazel, this gentle toner helps to hydrate, reduce redness, and refine pores, preparing your skin for moisturizers and serums.",
    price: 15.00,
    imageUrl: "https://picsum.photos/seed/rosetoner/400/300",
    dataAiHint: "rose facial toner",
    category: "Skincare",
    skinType: ["All", "Dry", "Mature"],
    ingredients: ["Rosa Damascena (Rose) Flower Water", "Hamamelis Virginiana (Witch Hazel) Water", "Glycerin", "Aloe Barbadensis Leaf Juice"],
    usage: "After cleansing, apply to a cotton pad and gently wipe over face and neck. Can also be spritzed directly onto skin.",
    images: [
      { url: "https://picsum.photos/seed/rosetoner_1/600/400", alt: "Rose Petal Facial Toner bottle", dataAiHint: "rose facial toner" },
      { url: "https://picsum.photos/seed/rosetoner_2/600/400", alt: "Rose petals", dataAiHint: "rose petals" },
    ],
    stock: 25,
    rating: 4.9,
    reviewCount: 70,
  },
  {
    id: "6",
    name: "Charcoal Detox Bar",
    description: "Deep-cleansing charcoal soap for purifying pores.",
    longDescription: "Our Charcoal Detox Bar uses activated charcoal to draw out impurities, toxins, and excess oils from your skin. Combined with tea tree and eucalyptus essential oils, it provides a powerful cleanse that leaves skin feeling clear and balanced. Excellent for oily and blemish-prone skin.",
    price: 8.99,
    imageUrl: "https://picsum.photos/seed/charcoaldetox/400/300",
    dataAiHint: "charcoal soap",
    category: "Bar Soaps",
    skinType: ["Oily", "Combination", "Acne-prone"],
    ingredients: ["Saponified Coconut Oil", "Olive Oil", "Activated Charcoal Powder", "Tea Tree Essential Oil", "Eucalyptus Essential Oil"],
    usage: "Lather with water and apply to face or body. Rinse thoroughly. Use 2-3 times per week or as needed.",
    images: [
      { url: "https://picsum.photos/seed/charcoaldetox_1/600/400", alt: "Charcoal Detox Bar", dataAiHint: "charcoal soap" },
      { url: "https://picsum.photos/seed/charcoaldetox_2/600/400", alt: "Activated charcoal powder", dataAiHint: "charcoal powder" },
    ],
    stock: 45,
    rating: 4.5,
    reviewCount: 110,
  }
];

/**
 * Asynchronously retrieves a list of products, optionally filtered.
 * @param filters Optional filters, e.g., { category: "Bar Soaps" }
 * @returns A promise that resolves to an array of Product objects.
 */
export async function getProducts(filters?: { category?: string; featured?: boolean }): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  
  let products = mockProducts;
  if (filters?.category) {
    products = products.filter(p => p.category === filters.category);
  }
  if (filters?.featured !== undefined) {
    products = products.filter(p => p.isFeatured === filters.featured);
  }
  return products;
}

/**
 * Asynchronously retrieves a single product by its ID.
 * @param productId The ID of the product to retrieve.
 * @returns A promise that resolves to a Product object or undefined if not found.
 */
export async function getProductById(productId: string): Promise<Product | undefined> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockProducts.find(product => product.id === productId);
}

/**
 * Asynchronously retrieves a list of featured products.
 * @returns A promise that resolves to an array of Product objects.
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 150));
  return mockProducts.filter(product => product.isFeatured);
}

/**
 * Asynchronously retrieves a list of all unique product categories.
 * @returns A promise that resolves to an array of category strings.
 */
export async function getCategories(): Promise<string[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 50));
  const categories = mockProducts.map(p => p.category);
  return [...new Set(categories)]; // Unique categories
}
