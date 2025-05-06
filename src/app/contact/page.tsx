'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { siteConfig } from '@/config/site';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    // In a real app, you would send this data to your backend
    console.log('Contact Form Data:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question about our products, an order, or just want to say hello, feel free to reach out.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Question about an order" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message..." rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8 sticky top-24">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Contact Details</h2>
          <div className="bg-muted/50 p-6 rounded-lg shadow-md">
            {siteConfig.contact.email && (
              <div className="flex items-start mb-4">
                <Mail className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            )}
            {siteConfig.contact.phone && (
              <div className="flex items-start mb-4">
                <Phone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">{siteConfig.contact.phone}</p>
                </div>
              </div>
            )}
            {siteConfig.contact.address && (
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">{siteConfig.contact.address}</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Optional: Map Placeholder */}
          <div className="bg-muted/50 p-4 rounded-lg shadow-md h-64 flex items-center justify-center">
            <p className="text-muted-foreground italic">(Map Placeholder - e.g., Google Maps Embed)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
