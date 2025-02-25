// app/components/whatsapp-button.tsx

"use client"

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+254704969444'; // Replace with your number
  const message = encodeURIComponent(
    "Hello Guardcore Technologies, I'm interested in your services. Could you please provide more information?"
  );

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-end p-4" onClick={() => setIsOpen(false)}
>
          <div className="bg-white rounded-lg shadow-2xl max-w-sm w-full animate-fade-in-up">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Chat with Us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <p className="text-gray-600">
                Hi there! 👋 We&apos;re here to help. Click below to start a chat on WhatsApp.
              </p>

              <a
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Start Chat
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;