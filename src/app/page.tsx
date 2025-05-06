import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { getFeaturedProducts, type Product } from '@/services/product';
import ProductCard from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default async function HomePage() {
  const featuredProducts: Product[] = await getFeaturedProducts();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-10rem)] min-h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center text-center rounded-lg overflow-hidden shadow-lg">
        <Image
          src={siteConfig.hero.image}
          alt="Hero background image"
          layout="fill"
          objectFit="cover"
          quality={85}
          className="z-0"
          data-ai-hint="natural skincare products"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 p-6 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
            {siteConfig.hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 drop-shadow-sm">
            {siteConfig.hero.subtitle}
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-shadow">
            <Link href={siteConfig.hero.ctaLink}>
              {siteConfig.hero.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold text-foreground">{siteConfig.featuredProducts.title}</h2>
            <Button variant="outline" asChild>
              <Link href={siteConfig.featuredProducts.ctaLink}>
                {siteConfig.featuredProducts.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* About Us Preview Section */}
      <section className="bg-muted/70 p-8 md:p-12 rounded-lg shadow">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-foreground mb-4">{siteConfig.aboutPreview.title}</h2>
          <p className="text-lg text-muted-foreground mb-6">
            {siteConfig.aboutPreview.content}
          </p>
          <Button asChild variant="link" className="text-primary hover:text-primary/80 text-lg">
            <Link href={siteConfig.aboutPreview.ctaLink}>
              {siteConfig.aboutPreview.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Call to Action / Newsletter (Optional) */}
      <section className="py-12 bg-gradient-to-r from-secondary via-primary/30 to-secondary rounded-lg shadow">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-primary-foreground mb-3">Stay Connected</h2>
          <p className="text-lg text-primary-foreground/90 mb-6">
            Subscribe to our newsletter for updates on new products and special offers.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 rounded-md border border-border focus:ring-2 focus:ring-primary-foreground/50 focus:border-transparent outline-none text-foreground"
              aria-label="Email for newsletter"
            />
            <Button type="submit" size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
