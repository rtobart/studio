'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/services/product';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useCart } from '@/context/cart-context';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-xl">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} className="block overflow-hidden aspect-[4/3] relative">
          <Image
            src={product.imageUrl || siteConfig.fallbackProductImage}
            alt={product.name}
            width={400}
            height={300}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={product.dataAiHint || "product image"}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-semibold mb-1 hover:text-primary transition-colors">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-2 h-10 overflow-hidden">
          {product.description}
        </CardDescription>
        <p className="text-base font-bold text-primary">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 border-t mt-auto">
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={() => addToCart(product)}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
