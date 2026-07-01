import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from "./components/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QCONIC",
  description: "Minimalistická česká značka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CartProvider>{children}</CartProvider>
        <Script
          src="https://ipex.qconic.com/webchat/loader.js"
          strategy="afterInteractive"
          data-channel-id="dDw4t7znJyzrh8aIxsLQc"
          data-customer-id="019eab8c-f1f2-773c-8340-fff9b1ec7e99"
          data-client-url="https://ipex.qconic.com"
          data-server-url="https://api.qconic.com"
        />
      </body>
    </html>
  );
}
