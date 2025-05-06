'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart, type CartItem } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart, getItemCount } = useCart();

  if (getItemCount() === 0) {
    return (
      <div className="text-center py-20">
        <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground mb-6" />
        <h1 className="text-3xl font-semibold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild size="lg">
          <Link href="/products">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item: CartItem) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full sm:w-24 h-24 sm:h-auto aspect-square relative rounded overflow-hidden shrink-0">
                <Image
                  src={item.imageUrl || siteConfig.fallbackProductImage}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 96px"
                  className="object-cover"
                  data-ai-hint={item.dataAiHint || "product image"}
                />
              </div>
              <div className="flex-grow">
                <Link href={`/products/${item.id}`} className="text-lg font-semibold hover:text-primary transition-colors">
                  {item.name}
                </Link>
                <p className="text-sm text-muted-foreground">{item.category}</p>
                <p className="text-md font-medium text-primary mt-1">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex flex-col sm:items-end justify-between gap-2 sm:gap-0">
                <div className="flex items-center border rounded-md w-min self-start sm:self-end">
                  <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10) || 1)}
                    className="w-12 text-center border-0 focus-visible:ring-0 h-9 px-0"
                    aria-label={`${item.name} quantity`}
                  />
                  <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                 <p className="text-lg font-semibold sm:hidden">${(item.price * item.quantity).toFixed(2)}</p> {/* Total for item on small screens */}
                <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)} className="text-destructive hover:text-destructive/80 self-start sm:self-end" aria-label={`Remove ${item.name} from cart`}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
               <div className="hidden sm:flex flex-col items-end justify-center w-20">
                 <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
               </div>
            </div>
          ))}
          <Button variant="outline" onClick={clearCart} className="text-destructive border-destructive hover:bg-destructive/10">
            <Trash2 className="mr-2 h-4 w-4" /> Clear Cart
          </Button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1 p-6 border rounded-lg shadow-lg sticky top-24 bg-card">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal ({getItemCount()} items)</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-primary">FREE</span> {/* Placeholder */}
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Estimated Tax</span>
              <span>$0.00</span> {/* Placeholder */}
            </div>
          </div>
          <Separator className="my-6"/>
          <div className="flex justify-between text-xl font-bold mb-6">
            <span>Total</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          <Button asChild size="lg" className="w-full">
            <Link href="/checkout">
              Proceed to Checkout <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            Shipping and taxes calculated at checkout.
          </p>
        </div>
      </div>
    </div>
  );
}
