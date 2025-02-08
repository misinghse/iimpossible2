import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IIM Possible",
  description: "Personalized Coaching for CAT and Top IIMs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Load Google Tag Manager
    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-16845254499";
    script1.async = true;
    document.head.appendChild(script1);

    // Configure Google gtag
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16845254499');
    `;
    document.head.appendChild(script2);

    // Add conversion event tracking
    const eventScript = document.createElement("script");
    eventScript.innerHTML = `
      gtag('event', 'conversion', {
        'send_to': 'AW-16845254499/gIkKCQ_Yg5caEOPeuOA-',
        'value': 1.0,
        'currency': 'INR',
      });
    `;
    document.head.appendChild(eventScript);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
