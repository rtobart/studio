import Link from 'next/link';
import { siteConfig, getLogo } from '@/config/site';
import Image from 'next/image';

export default function Footer() {
  const logo = getLogo();
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            {typeof logo === 'string' ? (
              <h3 className="text-xl font-bold text-primary mb-2">{logo}</h3>
            ) : (
              <Link href="/" className="mb-4 inline-block">
                <Image src={logo.src} alt={logo.alt} width={140} height={45} />
              </Link>
            )}
            <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Company</h4>
            <ul className="space-y-2">
              {siteConfig.footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Support</h4>
            <ul className="space-y-2">
              {siteConfig.footerNavigation.support.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Legal</h4>
            <ul className="space-y-2">
              {siteConfig.footerNavigation.legal.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground order-2 md:order-1 mt-4 md:mt-0">
            {siteConfig.copyright}
          </p>
          <div className="flex space-x-4 order-1 md:order-2">
            {siteConfig.socialLinks.map((link) => (
              <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-muted-foreground hover:text-primary transition-colors">
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
