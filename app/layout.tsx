import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Guardcore Technologies | Leading Electro-Mechanical, Telecom & IT Solutions in Kenya",
  description:
    "Discover top-tier electro-mechanical engineering, telecommunications, security systems, and IT solutions at Guardcore Technologies. Enhance your business performance with our certified professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hidden">
      <body className="scrollbar-hidden relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
