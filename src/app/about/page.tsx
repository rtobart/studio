import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Leaf, ShieldCheck, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-primary mb-4">{siteConfig.name}</h1>
        <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
          Discover the Art of Natural Care.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <Image
            src="https://picsum.photos/seed/aboutus_main/600/400"
            alt="Natural ingredients and handcrafted products"
            width={600}
            height={400}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="natural ingredients soap"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-foreground">Our Philosophy</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At {siteConfig.name}, we are passionate about creating high-quality, artisanal soaps and skincare products that harness the power of nature. We believe that what you put on your body is just as important as what you put in it. That's why we meticulously select the finest natural ingredients, from nourishing botanical oils and butters to aromatic essential oils and sustainably sourced herbs.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our journey began with a simple desire: to offer a pure, gentle, and effective alternative to mass-produced personal care items laden with synthetic chemicals. Each product is handcrafted in small batches with love and attention to detail, ensuring freshness and potency.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-foreground text-center mb-10">What Makes Us Different</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pure Ingredients</h3>
            <p className="text-muted-foreground">We use only natural, plant-based ingredients, free from harsh chemicals, parabens, and artificial fragrances.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Handcrafted with Care</h3>
            <p className="text-muted-foreground">Each product is made by hand in small batches to ensure the highest quality and attention to detail.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Eco-Conscious</h3>
            <p className="text-muted-foreground">We are committed to sustainable practices, from responsibly sourcing ingredients to using eco-friendly packaging.</p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-12">
         <div className="space-y-6 md:order-2">
          <h2 className="text-3xl font-semibold text-foreground">Our Commitment</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are dedicated to transparency and honesty. We list all our ingredients clearly, so you know exactly what you're applying to your skin. Our mission is to provide products that not only make you look good but also feel good, knowing they are safe for you and kind to the planet.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Thank you for joining us on this journey towards a more natural and mindful approach to personal care. We hope you love our products as much as we love making them for you.
          </p>
        </div>
        <div className="md:order-1">
          <Image
            src="https://picsum.photos/seed/aboutus_commitment/600/400"
            alt="Happy person using natural products"
            width={600}
            height={400}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="woman skincare natural"
          />
        </div>
      </section>
    </div>
  );
}
