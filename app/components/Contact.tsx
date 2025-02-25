// app/components/contact.tsx

import Link from 'next/link';
import React from 'react';
import Button from './Button';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <section id='contact' className={`${className} py-16 md:py-24 px-4 md:px-8 bg-foreground`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-background">
              Get in Touch Today!
            </h2>
            
            <p className="text-lg md:text-xl text-background-light">
              Whether you&apos;re seeking a tailored solution or have questions, our team 
              delivers prompt, professional service to every client.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100/20 rounded-lg p-3 flex-shrink-0">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-background">Email</h3>
                  <a href="mailto:info@guardcore.co.ke" className="text-background-light hover:text-blue-600 transition-colors">
                    info@guardcore.co.ke
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100/20 rounded-lg p-3 flex-shrink-0">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-background">Contact</h3>
                  <div className="space-y-1">
                    <a href="tel:+254704969444" className="block text-background-light hover:text-blue-600 transition-colors">
                      +254 704 969 444 (Office)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100/20 rounded-lg p-3 flex-shrink-0">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-background">Location</h3>
                  <p className="text-background-light">
                    Ambassador Court, Milimani Road, Nairobi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-background rounded-3xl shadow-2xl p-6 md:p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-foreground mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-muted/20 border border-muted focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-muted/20 border border-muted focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your.email@domain.com"
                />
              </div>

              <div>
                <label className="block text-foreground mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg bg-muted/20 border border-muted focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="+254 700 000 000"
                />
              </div>

              <div>
                <label className="block text-foreground mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-muted/20 border border-muted focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="How can we assist you?"
                ></textarea>
              </div>

              <Button 
                type="submit"
                label="Request Consultation"
                className="w-full"
              />
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 flex flex-col items-center">
          <p className="text-lg md:text-xl text-center text-background-light mb-6 max-w-3xl mx-auto">
            Reach out for a consultation or detailed proposal. Your journey to 
            robust solutions begins with a single click.
          </p>

          <Link href="#contact" className=''>
            <Button 
              label="Start Your Project Now"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;