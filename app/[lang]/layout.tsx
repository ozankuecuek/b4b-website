import type { Metadata } from "next";
import { Geist, Geist_Mono, Lexend, Poppins, Source_Code_Pro } from "next/font/google";
import "../globals.css";
import LanguageSelector from "@/components/language-selector"
// Analytics is gated by explicit user consent
import AnalyticsGate from "@/components/analytics-gate";
import CookieConsent from "@/components/cookie-consent";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Locale } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add your custom fonts using Next.js font optimization
const lexend = Lexend({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-tertiary",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Define translations for SEO metadata
function getSEOTranslations(locale: Locale) {
  if (locale === "de") {
    return {
      title: "b4b - Social Login für B2B-E-Commerce",
      description: "Bringen Sie reibungslose Social Logins (Google, Apple) in den B2B-E-Commerce. Sofortiges Onboarding, Kreditlinien und Bestellungen ohne Risiko. Start in Deutschland 2026.",
      keywords: "B2B Social Login, Business-Authentifizierung, B2B-E-Commerce, Social Sign-in, Business-Login-Lösungen",
      ogTitle: "b4b - Social Login für B2B-E-Commerce",
      ogDescription: "Bringen Sie reibungslose Social Logins in den B2B-E-Commerce. Melden Sie sich für unsere Warteliste an und erhalten Sie frühzeitigen Zugang.",
      twitterTitle: "b4b - Social Login für B2B-E-Commerce",
      twitterDescription: "Bringen Sie reibungslose Social Logins in den B2B-E-Commerce. Melden Sie sich für unsere Warteliste an und erhalten Sie frühzeitigen Zugang.",
    };
  }
  
  return {
    title: "b4b - Social Login Built for B2B E-commerce",
    description: "Bring frictionless social login (Google, Apple) to B2B e-commerce. Instant onboarding, credit lines, and orders with zero risk. Launching in Germany 2026.",
    keywords: "B2B social login, business authentication, B2B e-commerce, social sign-in, business login solutions",
    ogTitle: "b4b - Social Login Built for B2B E-commerce",
    ogDescription: "Bring frictionless social login to B2B e-commerce. Join our waitlist for early access.",
    twitterTitle: "b4b - Social Login Built for B2B E-commerce",
    twitterDescription: "Bring frictionless social login to B2B e-commerce. Join our waitlist for early access.",
  };
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'de' },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang === "de" ? "de" : "en") as Locale;
  const seo = getSEOTranslations(locale);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: "b4b ID UG i. G." }],
    creator: "b4b ID UG i. G.",
    publisher: "b4b ID UG i. G.",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://b4b.network'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'de': '/de',
      },
    },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
      siteName: "b4b",
      url: `/${locale}`,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.twitterTitle,
      description: seo.twitterDescription,
      creator: "@b4bnetwork",
      site: "@b4bnetwork",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: "/lexend_icon_svg.svg",
      shortcut: "/lexend_icon_svg.svg",
      apple: "/lexend_icon_svg.svg",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang: langParam } = await params;
  const lang = langParam === "de" ? "de" : "en";
  const seo = getSEOTranslations(lang as Locale);
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "b4b",
    "description": seo.description,
    "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://b4b.network',
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/PreOrder"
    },
    "publisher": {
      "@type": "Organization",
      "name": "b4b ID UG i. G.",
      "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://b4b.network',
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://b4b.network'}/lexend_icon_svg.svg`
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Leuthener Straße 13",
        "addressLocality": "Berlin",
        "postalCode": "10829",
        "addressCountry": "DE"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@b4b.network",
        "contactType": "customer service"
      }
    }
  };
  
  return (
    <html lang={lang}>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} ${poppins.variable} ${sourceCodePro.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="fixed top-[35px] right-6 sm:right-10 lg:top-[40px] lg:right-32 z-50">
          <LanguageSelector />
        </div>
        {children}
        <CookieConsent />
        <AnalyticsGate />
        <SpeedInsights />
      </body>
    </html>
  );
}
