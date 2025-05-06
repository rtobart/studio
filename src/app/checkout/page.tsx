'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const shippingSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  firstName: z.string().min(1, { message: 'First name is required.' }),
  lastName: z.string().min(1, { message: 'Last name is required.' }),
  address: z.string().min(1, { message: 'Address is required.' }),
  apartment: z.string().optional(),
  city: z.string().min(1, { message: 'City is required.' }),
  country: z.string().min(1, { message: 'Country is required.' }),
  postalCode: z.string().min(1, { message: 'Postal code is required.' }),
  phone: z.string().optional(),
});

type ShippingFormData = z.infer<typeof shippingSchema>;

export default function CheckoutPage() {
  const { cartItems, getTotalPrice, getItemCount } = useCart();
  const form = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
        country: "United States" // Example default value
    }
  });

  const onSubmit: SubmitHandler<ShippingFormData> = (data) => {
    console.log('Shipping Data:', data);
    // Here you would typically proceed to payment processing
    // For now, we can redirect to a confirmation page (placeholder)
    // router.push('/checkout/confirmation');
    alert('Order Submitted (Placeholder)\nShipping details: ' + JSON.stringify(data, null, 2));
  };

  if (getItemCount() === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-semibold mb-4">Your cart is empty.</h1>
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Shipping Form */}
        <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main St" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="apartment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apartment, suite, etc. (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Apt 4B" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="grid sm:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Anytown" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Input placeholder="United States" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="postalCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Postal Code</FormLabel>
                      <FormControl>
                        <Input placeholder="12345" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
               <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone (optional)</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="(555) 123-4567" {...field} />
                    </FormControl>
                    <FormDescription>For shipping updates.</FormDescription>
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full">
                Continue to Payment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Form>
        </div>

        {/* Order Summary */}
        <div className="bg-muted/50 p-6 sm:p-8 rounded-lg shadow-lg lg:sticky lg:top-24">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
          <div className="space-y-4 max-h-96 overflow-y-auto mb-4 pr-2">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded overflow-hidden border shrink-0">
                  <Image 
                    src={item.imageUrl || siteConfig.fallbackProductImage} 
                    alt={item.name} 
                    fill
                    sizes="64px" 
                    className="object-cover"
                    data-ai-hint={item.dataAiHint || "product image"}
                  />
                  <Badge variant="secondary" className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full h-6 w-6 p-0 flex items-center justify-center text-xs">{item.quantity}</Badge>
                </div>
                <div className="flex-grow">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                </div>
                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <Separator className="my-6" />
          <div className="space-y-2 mb-6">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-primary">FREE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Taxes</span>
              <span>Calculated at next step</span>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex justify-between text-xl font-bold mb-6">
            <span>Total</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground mt-4">
            <ShieldCheck className="h-5 w-5 mr-2 text-primary" />
            Secure Checkout
          </div>
        </div>
      </div>
    </div>
  );
}
