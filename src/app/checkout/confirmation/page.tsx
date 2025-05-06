import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function OrderConfirmationPage() {
  // In a real app, you'd fetch order details using an order ID from query params or context
  const orderNumber = Math.floor(Math.random() * 900000) + 100000; // Placeholder

  return (
    <div className="container mx-auto py-12 text-center">
      <CheckCircle2 className="mx-auto h-20 w-20 text-green-500 mb-6" />
      <h1 className="text-4xl font-bold text-foreground mb-4">Thank You for Your Order!</h1>
      <p className="text-lg text-muted-foreground mb-2">
        Your order <span className="font-semibold text-primary">#{orderNumber}</span> has been placed successfully.
      </p>
      <p className="text-muted-foreground mb-8">
        You will receive an email confirmation shortly with your order details and tracking information.
      </p>
      
      <div className="max-w-md mx-auto bg-muted/50 p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
        <ul className="list-disc list-inside text-left space-y-2 text-muted-foreground">
          <li>Check your email for order confirmation.</li>
          <li>We will notify you when your order ships.</li>
          <li>You can view your order history in your account (if applicable).</li>
        </ul>
      </div>

      <div className="space-x-4">
        <Button asChild size="lg">
          <Link href="/products">Continue Shopping</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/">Go to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}
