'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getProductById, type Product } from '@/services/product';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/cart-context';
import { Heart, Minus, Plus, Share2, ShoppingBag, Star } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import ProductCard from '@/components/product-card'; // For related products
import { Skeleton } from '@/components/ui/skeleton';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null | undefined>(undefined); // undefined for loading state
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    if (params.id) {
      getProductById(params.id).then(fetchedProduct => {
        setProduct(fetchedProduct);
        if (fetchedProduct?.images?.[0]?.url) {
          setSelectedImage(fetchedProduct.images[0].url);
        } else if (fetchedProduct?.imageUrl) {
           setSelectedImage(fetchedProduct.imageUrl);
        }
        // Fetch related products (mock logic)
        // getProducts({ category: fetchedProduct?.category }).then(related => {
        //   setRelatedProducts(related.filter(p => p.id !== fetchedProduct?.id).slice(0, 4));
        // });
      });
    }
  }, [params.id]);

  if (product === undefined) { // Loading state
    return (
      <div className="container mx-auto py-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <Skeleton className="w-full aspect-square rounded-lg" />
            <div className="flex gap-2 mt-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="w-20 h-20 rounded" />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center py-12 text-xl">Product not found.</div>;
  }

  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square w-full overflow-hidden rounded-lg border mb-4 shadow-md">
            <Image
              src={selectedImage || product.imageUrl || siteConfig.fallbackProductImage}
              alt={product.name}
              width={600}
              height={600}
              className="object-cover w-full h-full transition-opacity duration-300"
              data-ai-hint={product.images?.find(img => img.url === selectedImage)?.dataAiHint || product.dataAiHint || "product image"}
            />
          </div>
          {product.images && product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image.url)}
                  className={`w-20 h-20 rounded border-2 overflow-hidden shrink-0 ${selectedImage === image.url ? 'border-primary ring-2 ring-primary' : 'border-transparent hover:border-muted-foreground/50'}`}
                >
                  <Image
                    src={image.url}
                    alt={image.alt || `${product.name} - view ${index + 1}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                     data-ai-hint={image.dataAiHint || "product thumbnail"}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">{product.name}</h1>
          
          {product.rating && (
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.round(product.rating!) ? 'fill-current' : ''}`} />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">({product.reviewCount || 0} reviews)</span>
            </div>
          )}

          <p className="text-2xl font-semibold text-primary">${product.price.toFixed(0)}</p>
          
          <p className="text-muted-foreground leading-relaxed">{product.longDescription}</p>

          <Separator />

          {/* Quantity Selector and Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch">
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)} aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
                className="w-16 text-center border-0 focus-visible:ring-0 h-10"
                aria-label="Product quantity"
              />
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)} aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button 
              size="lg" 
              onClick={() => addToCart(product, quantity)} 
              className="flex-grow"
              aria-label={`Add ${quantity} ${product.name} to cart`}
            >
              <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
          </div>
          
          <div className="flex gap-4">
            <Button variant="outline" className="flex-1">
              <Heart className="mr-2 h-4 w-4" /> Wishlist
            </Button>
            <Button variant="outline" className="flex-1">
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
          </div>

          <Separator />

          {/* Additional Info Tabs (Ingredients, Usage) - Placeholder */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
            <p className="text-sm text-muted-foreground list-disc list-inside">{product.ingredients.join(', ')}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">How to Use</h3>
            <p className="text-sm text-muted-foreground">{product.usage}</p>
          </div>
          
          {product.category && <p className="text-sm text-muted-foreground">Category: <span className="font-medium text-foreground">{product.category}</span></p>}
          {product.skinType && product.skinType.length > 0 && <p className="text-sm text-muted-foreground">Skin Type: <span className="font-medium text-foreground">{product.skinType.join(', ')}</span></p>}

        </div>
      </div>

      {/* Related Products Section - Placeholder */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* {relatedProducts.map(related => (
              <ProductCard key={related.id} product={related} />
            ))} */}
          </div>
        </section>
      )}
    </div>
  );
}
