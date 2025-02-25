// app/components/footer.tsx

import Link from 'next/link';
import React from 'react';
import { Facebook, Linkedin, Mail, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background border-t border-background/10">
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Guardcore Technologies</h3>
            <p className="text-sm text-muted-foreground">
              Delivering robust technical solutions with certified expertise and innovation.
            </p>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                Power Systems
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                Electrical Installations
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                Security Systems
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                All Solutions
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <a href="mailto:info@guardcore.co.ke" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                  info@guardcore.co.ke
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <a href="tel:+254704969444" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                  +254 704 969 444
                </a>
              </div>
            </div>
          </div>

          {/* Social/Newsletter Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Row */}
        <div className="border-t border-background/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Guardcore Technologies. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;