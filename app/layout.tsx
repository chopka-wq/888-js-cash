import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "888Starz - Online Casino & Sports Betting | Welcome Bonus 500%",
    template: "%s | 888Starz",
  },
  description:
    "Join 888Starz - the best online casino and sports betting platform. Get up to 500% welcome bonus, play slots, live casino, and bet on sports. Fast registration, secure payments, 24/7 support.",
  keywords: [
    "888starz",
    "online casino",
    "sports betting",
    "casino games",
    "live casino",
    "slots",
    "welcome bonus",
    "betting",
    "gambling",
  ],
  authors: [{ name: "888Starz" }],
  creator: "888Starz",
  publisher: "888Starz",
  metadataBase: new URL(process.env.SITE_URL || "https://888starz.cash"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "888Starz",
    title: "888Starz - Online Casino & Sports Betting | Welcome Bonus 500%",
    description:
      "Join 888Starz - the best online casino and sports betting platform. Get up to 500% welcome bonus, play slots, live casino, and bet on sports.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "888Starz Casino",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "888Starz - Online Casino & Sports Betting",
    description:
      "Join 888Starz - the best online casino and sports betting platform. Get up to 500% welcome bonus.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "888Starz",
    url: process.env.SITE_URL || "https://888starz.cash",
    logo: `${process.env.SITE_URL || "https://888starz.cash"}/logo.jpg`,
    description:
      "888Starz - Fast-growing international betting and casino platform with strong bonus focus",
    sameAs: [
      "https://www.facebook.com/888starz",
      "https://twitter.com/888starz",
      "https://www.instagram.com/888starz",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English"],
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
