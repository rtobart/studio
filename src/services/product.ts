/**
 * Represents a product with its details for the frontend.
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

/**
 * Represents the raw product data structure as received from the API.
 * Based on the provided newProductData structure.
 */
interface ApiProduct {
  id: string;
  name: string;
  long_description: string;
  description: string;
  ingredients: string[];
  usage: string;
  cost: number; // Not in Product interface, but present in API data
  price_min: number; // Not in Product interface
  price_last: number; // Not in Product interface
  price: number;
  image_url: string;
  data_ai_hint: string;
  is_featured: boolean;
  stock: number;
  rating?: number; // Rating can be optional
  review_count?: number; // Review count can be optional
  created_at: string; // Not in Product interface
  product_category: {
    id: string;
    name: string;
  }[];
  product_skin_type: {
    id: string;
    name: string;
  }[];
  product_images: {
    id: string; // Not in Product.images, but present in API data
    url: string;
    alt_text: string;
    sort_order: number; // Not in Product.images
  }[];
}

const API_BASE_URL = "https://api-herbazal-staging.onrender.com/api/gateway/V1";

if (!API_BASE_URL) {
  console.warn(
    "Advertencia: NEXT_PUBLIC_API_BASE_URL no está configurada. Las llamadas a la API fallarán."
  );
}

/**
 * Maps an API product object to the frontend Product interface.
 * @param apiProduct The raw product data from the API.
 * @returns A Product object.
 */
function mapApiProductToProduct(apiProduct: ApiProduct): Product {
  return {
    id: apiProduct.id,
    name: apiProduct.name,
    description: apiProduct.description,
    longDescription: apiProduct.long_description,
    price: Math.round(apiProduct.price),
    imageUrl: apiProduct.image_url,
    category: apiProduct.product_category[0]?.name || "General", // Default if no category
    skinType: apiProduct.product_skin_type?.map(st => st.name) || [],
    ingredients: apiProduct.ingredients,
    usage: apiProduct.usage,
    isFeatured: apiProduct.is_featured,
    images: apiProduct.product_images.map(img => ({
      url: img.url,
      alt: img.alt_text,
      // Replicating the mock's dataAiHint logic for gallery images
      dataAiHint: apiProduct.data_ai_hint || img.alt_text.toLowerCase().split(' ').slice(0,2).join(' ') || "product image"
    })),
    stock: apiProduct.stock,
    rating: apiProduct.rating,
    reviewCount: apiProduct.review_count,
    dataAiHint: apiProduct.data_ai_hint,
  };
}

/**
 * Asynchronously retrieves a list of products, optionally filtered.
 * @param filters Optional filters, e.g., { category: "Jabones en Barra", featured: true }
 * @returns A promise that resolves to an array of Product objects.
 */
export async function getProducts(filters?: { category?: string; featured?: boolean }): Promise<Product[]> {
  if (!API_BASE_URL) {
    console.error("API_BASE_URL no está configurado. No se pueden obtener productos.");
    return []; // O lanzar un error
  }
  
  // const queryParams = new URLSearchParams();
  // if (filters?.category) {
    //   // Asumimos que la API filtra por 'category_name' o similar. Ajusta si es diferente.
    //   // Si tu API espera el ID de la categoría, necesitarías una forma de obtener ese ID primero.
    //   queryParams.append('category_name', filters.category);
    // }
    // if (filters?.featured !== undefined) {
      //   queryParams.append('is_featured', String(filters.featured));
      // }
      
    const url = `${API_BASE_URL}/products`;
    console.log('🚀 ~ url:', url)
      
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Error fetching products: ${response.status} ${response.statusText}`);
      // Podrías querer lanzar un error aquí para que el componente que llama lo maneje
      // throw new Error(`Failed to fetch products: ${response.statusText}`);
      return [];
    }
    const apiProducts: ApiProduct[] = await response.json();
    return apiProducts.map(mapApiProductToProduct);
  } catch (error) {
    console.error("Network error or JSON parsing error fetching products:", error);
    return [];
  }
}

/**
 * Asynchronously retrieves a single product by its ID.
 * @param productId The ID of the product to retrieve.
 * @returns A promise that resolves to a Product object or undefined if not found.
 */
export async function getProductById(productId: string): Promise<Product | undefined> {
  if (!API_BASE_URL) {
    console.error("API_BASE_URL no está configurado. No se puede obtener el producto.");
    return undefined;
  }
  if (!productId) {
    console.warn("getProductById llamado sin productId");
    return undefined;
  }

  // Asumimos que la API devuelve un array incluso al filtrar por ID, o que tiene un endpoint específico.
  // Si /products?id=PRODUCT_ID es la forma, usamos eso.
  // Si es /products/PRODUCT_ID, cambia la URL.
  // El ejemplo `newProductData` es un array, así que asumiré que filtrar /products devuelve un array.
  const url = `${API_BASE_URL}/products?id=${productId}`; // Ajusta si el endpoint es /products/${productId}
  console.log('🚀 ~ getProductById ~ url:', url)
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        return undefined; // Not found
      }
      console.error(`Error fetching product by ID ${productId}: ${response.status} ${response.statusText}`);
      return undefined;
    }
    const apiProducts: ApiProduct[] = await response.json();
    if (apiProducts && apiProducts.length > 0) {
      // Si el endpoint /products?id={id} devuelve un array con el producto
      return mapApiProductToProduct(apiProducts[0]);
    } else {
      // Si el endpoint /products/{id} devuelve un solo objeto (no un array)
      // const apiProduct: ApiProduct = await response.json();
      // return mapApiProductToProduct(apiProduct);
      return undefined; // No product found with that ID
    }
  } catch (error) {
    console.error(`Network error or JSON parsing error fetching product by ID ${productId}:`, error);
    return undefined;
  }
}

/**
 * Asynchronously retrieves a list of featured products.
 * @returns A promise that resolves to an array of Product objects.
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  return getProducts({ featured: true });
}

/**
 * Asynchronously retrieves a list of all unique product categories.
 * @returns A promise that resolves to an array of category strings.
 */
export async function getCategories(): Promise<string[]> {
  // Opción 1: Obtener todas las categorías de los productos existentes.
  // Esto puede ser ineficiente si hay muchos productos.
  // Sería mejor si la API tuviera un endpoint /categories.
  try {
    const products = await getProducts(); // Esto ya obtiene y mapea
    const categories = products.map(p => p.category);
    return [...new Set(categories)].sort(); // Devuelve categorías únicas y ordenadas
  } catch (error) {
    console.error("Error fetching categories via products:", error);
    return [];
  }

  // Opción 2: Si tu API tiene un endpoint dedicado para categorías (ej: /categories)
  // if (!API_BASE_URL) return [];
  // try {
  //   const response = await fetch(`${API_BASE_URL}/categories`); // Asume que este endpoint existe
  //   if (!response.ok) {
  //     console.error(`Error fetching categories: ${response.status} ${response.statusText}`);
  //     return [];
  //   }
  //   const apiCategories: { id: string; name: string }[] = await response.json();
  //   return apiCategories.map(cat => cat.name).sort();
  // } catch (error) {
  //   console.error("Network error or JSON parsing error fetching categories:", error);
  //   return [];
  // }
}
