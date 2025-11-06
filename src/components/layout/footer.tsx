import Link from 'next/link';
import { DraftingCompass, Mail, MapPin, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/request-a-quote', label: 'Request a Quote' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline">
              <DraftingCompass className="h-8 w-8" />
              <span>SHREE ENGINEERS</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Your trusted land surveying and developing contractors since 1998.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:underline text-primary-foreground/80 hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0" />
                <span className="text-sm text-primary-foreground/80">D-9/F-1, Sunder Garden, Manikbaug, Sinhgad Road, Pune- 411051</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <a href="tel:+919309114870" className="text-sm hover:underline text-primary-foreground/80 hover:text-primary-foreground">9309114870 / 9371054308 / 9922691595</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <a href="mailto:shreeengineers2008@gmail.com" className="text-sm hover:underline text-primary-foreground/80 hover:text-primary-foreground">shreeengineers2008@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline">Business Hours</h3>
            <div className="mt-4 text-sm text-primary-foreground/80">
              <p>Monday - Sunday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Shree Engineers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
