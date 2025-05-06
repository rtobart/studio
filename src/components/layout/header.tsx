'use client';

import Link from 'next/link';
import { siteConfig, getLogo } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import type { NavItem as NavItemType } from '@/config/site';
import { useCart } from '@/context/cart-context';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const NavItem = ({ item, onClick }: { item: NavItemType; onClick?: () => void }) => (
  <Link
    href={item.href}
    className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
    onClick={onClick}
  >
    {item.icon && <item.icon className="h-5 w-5" />}
    {item.label}
  </Link>
);

export default function Header() {
  const logo = getLogo();
  const { getItemCount } = useCart();
  const cartItemCount = getItemCount();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          {typeof logo === 'string' ? (
            <span className="text-2xl font-bold text-primary">{logo}</span>
          ) : (
            <Image src={logo.src} alt={logo.alt} width={120} height={40} priority />
          )}
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {siteConfig.navigation.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/cart" passHref>
            <Button variant="ghost" size="icon" aria-label="Shopping Cart" className="relative">
              <siteConfig.cartIcon className="h-6 w-6" />
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 text-xs p-0 flex items-center justify-center rounded-full"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </Link>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <siteConfig.menuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6">
                <div className="flex flex-col space-y-4">
                <SheetClose asChild>
                   <Link href="/" className="flex items-center space-x-2 mb-6">
                      {typeof logo === 'string' ? (
                        <span className="text-xl font-bold text-primary">{logo}</span>
                      ) : (
                        <Image src={logo.src} alt={logo.alt} width={100} height={30} />
                      )}
                    </Link>
                  </SheetClose>
                  {siteConfig.mobileNavigation.map((item) => (
                     <SheetClose asChild key={item.label}>
                        <NavItem item={item} />
                      </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
