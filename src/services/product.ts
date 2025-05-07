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

// New product data provided by the user
const newProductData = [
    {
        "id": "1b8cdff7-7eb9-4e24-a00c-dcdaeef7d56a",
        "name": "Aceite Esencial de Árbol de Té",
        "long_description": "Potente antiséptico natural, ideal para pieles con tendencia acneica y para purificar el ambiente. 100% puro y orgánico.",
        "description": "Antiséptico y purificante.",
        "ingredients": [
            "aceite esencial de melaleuca alternifolia (árbol de té)"
        ],
        "usage": "Diluir unas gotas en un aceite portador para uso tópico. Usar en difusor para aromaterapia.",
        "cost": 3,
        "price_min": 7,
        "price_last": 7.5,
        "price": 7.2,
        "image_url": "https://picsum.photos/seed/aceitearbolte/400/300",
        "data_ai_hint": "aceite esencial arbol te acne",
        "is_featured": true,
        "stock": 30,
        "rating": 4.9,
        "review_count": 85,
        "created_at": "2025-05-07T00:54:16.222773+00:00",
        "product_category": [
            {
                "id": "c534df0f-ee72-42ca-876b-0018e11bfee7",
                "name": "Aceites Esenciales"
            }
        ],
        "product_skin_type": [
            {
                "id": "d73b7576-1b75-4d38-97de-46111c2c1c55",
                "name": "Piel Grasa"
            }
        ],
        "product_images": [
            {
                "id": "1fb70919-f2d9-4f58-9ef5-51649d6c95f9",
                "url": "https://picsum.photos/seed/aceitearbolte_img1/600/400",
                "alt_text": "Botella de aceite de árbol de té con gotero",
                "sort_order": 1
            }
        ]
    },
    {
        "id": "364e7451-a55c-4fbd-8f67-ae44dbdfe174",
        "name": "Jabón de Lavanda Relajante",
        "long_description": "Nuestro jabón artesanal de lavanda es perfecto para calmar la piel y la mente. Elaborado con aceite esencial de lavanda pura y manteca de karité.",
        "description": "Calmante y suavizante, ideal para la noche.",
        "ingredients": [
            "aceite de oliva virgen extra",
            "aceite de coco",
            "manteca de karité",
            "aceite esencial de lavanda",
            "hidróxido de sodio",
            "agua destilada"
        ],
        "usage": "Humedecer la piel, frotar el jabón hasta obtener espuma y enjuagar. Uso diario.",
        "cost": 2.5,
        "price_min": 5,
        "price_last": 5.5,
        "price": 5.5,
        "image_url": "https://picsum.photos/seed/jabonlavanda/400/300",
        "data_ai_hint": "jabon lavanda organico relajante",
        "is_featured": true,
        "stock": 50,
        "rating": 4.8,
        "review_count": 120,
        "created_at": "2025-05-07T00:54:16.222773+00:00",
        "product_category": [
            {
                "id": "c8debe59-5085-4a78-944e-22ca1022f449",
                "name": "Jabones en Barra"
            }
        ],
        "product_skin_type": [
            {
                "id": "dda43c8e-dc61-47ce-a510-08261fa2547d",
                "name": "Piel Normal"
            },
            {
                "id": "d79c6ac3-3d1a-4f92-bd1f-50daf88b681a",
                "name": "Piel Sensible"
            }
        ],
        "product_images": [
            {
                "id": "ec64739b-19b3-4c4e-a16f-6d6107fac571",
                "url": "https://picsum.photos/seed/jabonlavanda_img1/600/400",
                "alt_text": "Jabón de lavanda vista frontal",
                "sort_order": 1
            },
            {
                "id": "12d4f090-9576-43e0-89e6-bdcf1ed914f8",
                "url": "https://picsum.photos/seed/jabonlavanda_img2/600/400",
                "alt_text": "Jabón de lavanda en uso con espuma",
                "sort_order": 2
            }
        ]
    },
    {
        "id": "4442c410-06fe-4866-b3da-24531ad3bb97",
        "name": "Jabón de Avena y Miel",
        "long_description": "Un jabón suave y nutritivo, perfecto para pieles delicadas o secas. La avena exfolia suavemente mientras la miel hidrata.",
        "description": "Suave, nutritivo e hidratante.",
        "ingredients": [
            "aceite de oliva",
            "aceite de coco",
            "miel pura de abeja",
            "avena coloidal",
            "hidróxido de sodio",
            "agua destilada"
        ],
        "usage": "Ideal para la limpieza diaria de rostro y cuerpo. Especialmente recomendado para pieles secas y sensibles.",
        "cost": 2.8,
        "price_min": 6,
        "price_last": 6.5,
        "price": 6.2,
        "image_url": "https://picsum.photos/seed/jabonavena/400/300",
        "data_ai_hint": "jabon avena miel piel seca sensible",
        "is_featured": true,
        "stock": 45,
        "rating": 4.9,
        "review_count": 150,
        "created_at": "2025-05-07T00:54:16.222773+00:00",
        "product_category": [
            {
                "id": "c8debe59-5085-4a78-944e-22ca1022f449",
                "name": "Jabones en Barra"
            }
        ],
        "product_skin_type": [
            {
                "id": "66c2520e-537c-451f-96f5-b570e487b149",
                "name": "Piel Seca"
            },
            {
                "id": "d79c6ac3-3d1a-4f92-bd1f-50daf88b681a",
                "name": "Piel Sensible"
            }
        ],
        "product_images": [
            {
                "id": "9eb4e200-a78c-425f-9d60-c0f578ad2d35",
                "url": "https://picsum.photos/seed/jabonavena_img1/600/400",
                "alt_text": "Jabón de avena y miel primer plano",
                "sort_order": 1
            }
        ]
    },
    {
        "id": "48c7020b-b2ad-4e02-82f2-de2eccae2090",
        "name": "Crema Corporal de Caléndula",
        "long_description": "Crema rica y nutritiva con extracto de caléndula, conocida por sus propiedades calmantes y regeneradoras. Ideal para pieles sensibles o irritadas.",
        "description": "Calmante y regeneradora para piel sensible.",
        "ingredients": [
            "agua destilada",
            "aceite de almendras dulces",
            "manteca de cacao",
            "cera de abeja",
            "extracto de caléndula",
            "vitamina E",
            "aceite esencial de manzanilla"
        ],
        "usage": "Aplicar sobre la piel limpia y seca con un suave masaje hasta su completa absorción.",
        "cost": 4,
        "price_min": 9,
        "price_last": 10,
        "price": 9.5,
        "image_url": "https://picsum.photos/seed/cremacalendula/400/300",
        "data_ai_hint": "crema calendula piel sensible bebe",
        "is_featured": false,
        "stock": 40,
        "rating": 4.7,
        "review_count": 65,
        "created_at": "2025-05-07T00:54:16.222773+00:00",
        "product_category": [
            {
                "id": "8fb610c9-bb58-4484-b0da-3b3a70c820ef",
                "name": "Cremas Corporales"
            }
        ],
        "product_skin_type": [
            {
                "id": "66c2520e-537c-451f-96f5-b570e487b149",
                "name": "Piel Seca"
            },
            {
                "id": "d79c6ac3-3d1a-4f92-bd1f-50daf88b681a",
                "name": "Piel Sensible"
            },
            {
                "id": "81d423ae-57ac-4fb1-bfe4-d9ea248b2769",
                "name": "Piel Madura"
            }
        ],
        "product_images": [
            {
                "id": "cbe60db1-4839-4ddf-a912-ed599454e161",
                "url": "https://picsum.photos/seed/cremacalendula_img1/600/400",
                "alt_text": "Textura de la crema de caléndula",
                "sort_order": 1
            }
        ]
    },
    {
        "id": "666e1eee-7776-4216-ba19-fe19d073cc8f",
        "name": "Exfoliante Facial de Café y Coco",
        "long_description": "Renueva tu piel con este exfoliante natural a base de café molido y aceite de coco. Estimula la circulación y deja la piel suave y luminosa.",
        "description": "Estimulante y suavizante.",
        "ingredients": [
            "café molido orgánico",
            "azúcar de coco",
            "aceite de coco virgen",
            "aceite esencial de naranja dulce"
        ],
        "usage": "Aplicar sobre el rostro húmedo con movimientos circulares suaves, evitando el contorno de ojos. Enjuagar con abundante agua. Usar 1-2 veces por semana.",
        "cost": 3.5,
        "price_min": 8,
        "price_last": 8.5,
        "price": 8,
        "image_url": "https://picsum.photos/seed/exfoliantecafe/400/300",
        "data_ai_hint": "exfoliante cafe coco celulitis",
        "is_featured": true,
        "stock": 25,
        "rating": 4.6,
        "review_count": 92,
        "created_at": "2025-05-07T00:54:16.222773+00:00",
        "product_category": [
            {
                "id": "9874254f-c1b9-497f-ba36-74559fdda395",
                "name": "Exfoliantes"
            }
        ],
        "product_skin_type": [
            {
                "id": "dda43c8e-dc61-47ce-a510-08261fa2547d",
                "name": "Piel Normal"
            },
            {
                "id": "fba06416-d5df-4c39-b993-4bf7c02ba863",
                "name": "Piel Mixta"
            },
            {
                "id": "d73b7576-1b75-4d38-97de-46111c2c1c55",
                "name": "Piel Grasa"
            }
        ],
        "product_images": [
            {
                "id": "428de800-1b67-4824-9065-33a7cfc13e28",
                "url": "https://picsum.photos/seed/exfoliantecafe_img1/600/400",
                "alt_text": "Detalle del exfoliante de café y coco",
                "sort_order": 1
            }
        ]
    },
    {
        "id": "cf055d20-c39f-40a7-8278-a48c12092783",
        "name": "Champú Sólido de Romero y Menta",
        "long_description": "Fortalece tu cabello y estimula el cuero cabelludo con nuestro champú sólido. Sin sulfatos ni parabenos, eco-amigable.",
        "description": "Fortalecedor y estimulante capilar.",
        "ingredients": [
            "sodium cocoyl isethionate (SCI)",
            "aceite de ricino",
            "arcilla verde",
            "polvo de romero",
            "aceite esencial de romero",
            "aceite esencial de menta"
        ],
        "usage": "Frotar la pastilla sobre el cabello mojado hasta obtener espuma. Masajear y enjuagar.",
        "cost": 4.5,
        "price_min": 10,
        "price_last": 11,
        "price": 10.5,
        "image_url": "https://picsum.photos/seed/champusolido/400/300",
        "data_ai_hint": "champu solido romero menta anticaida",
        "is_featured": false,
        "stock": 60,
        "rating": 4.5,
        "review_count": 70,
        "created_at": "2025-05-07T00:54:16.222773+00:00",
        "product_category": [
            {
                "id": "955d4a27-0098-4b40-b703-9a4f35de85f0",
                "name": "Champús Sólidos"
            }
        ],
        "product_skin_type": [
            {
                "id": "d73b7576-1b75-4d38-97de-46111c2c1c55",
                "name": "Piel Grasa"
            },
            {
                "id": "dda43c8e-dc61-47ce-a510-08261fa2547d",
                "name": "Piel Normal"
            }
        ],
        "product_images": [
            {
                "id": "f3e316bf-10c7-4cb8-8342-c031380f6f4b",
                "url": "https://picsum.photos/seed/champusolido_img1/600/400",
                "alt_text": "Champú sólido de romero y menta en mano",
                "sort_order": 1
            }
        ]
    }
];

const mockProducts: Product[] = newProductData.map(p => ({
  id: p.id,
  name: p.name,
  description: p.description,
  longDescription: p.long_description,
  price: p.price,
  imageUrl: p.image_url,
  category: p.product_category[0]?.name || "General", // Take the first category name or default
  skinType: p.product_skin_type?.map(st => st.name) || [], // Map skin types to array of names
  ingredients: p.ingredients,
  usage: p.usage,
  isFeatured: p.is_featured,
  images: p.product_images.map(img => ({
    url: img.url,
    alt: img.alt_text,
    // Attempt to generate a simple dataAiHint from alt_text if product's data_ai_hint is not available
    dataAiHint: p.data_ai_hint || img.alt_text.toLowerCase().split(' ').slice(0,2).join(' ') || "product image" 
  })),
  stock: p.stock,
  rating: p.rating,
  reviewCount: p.review_count,
  dataAiHint: p.data_ai_hint,
}));


/**
 * Asynchronously retrieves a list of products, optionally filtered.
 * @param filters Optional filters, e.g., { category: "Jabones en Barra" }
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