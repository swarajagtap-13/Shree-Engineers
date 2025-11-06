'use client';

import Link from 'next/link';
import { useState } from 'react';
import { DraftingCompass, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-card/95 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-1 sm:gap-2 text-lg sm:text-xl md:text-2xl font-bold text-primary font-headline">
            <DraftingCompass className="h-6 w-6 sm:h-8 sm:w-8" />
            <span>SHREE ENGINEERS</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Button key={link.href} asChild variant="ghost" className={cn(
                'text-base font-medium',
                pathname === link.href ? 'text-primary font-bold' : 'text-foreground/80'
              )}>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
            <Button asChild className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
              <Link href="/request-a-quote">Request a Quote</Link>
            </Button>
          </nav>
          <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-sm border-t">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {navLinks.map((link) => (
               <Button key={link.href} asChild variant="ghost" className={cn(
                'justify-start text-lg font-medium',
                pathname === link.href ? 'text-primary bg-secondary' : 'text-foreground/80'
              )} onClick={() => setIsMenuOpen(false)}>
                 <Link href={link.href}>{link.label}</Link>
               </Button>
            ))}
            <Button asChild className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full" onClick={() => setIsMenuOpen(false)}>
              <Link href="/request-a-quote">Request a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
