import type { Metadata } from "next";
import { Geist, Geist_Mono, Lexend, Poppins, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import LanguageSelector from "@/components/language-selector"
// Analytics is gated by explicit user consent
import AnalyticsGate from "@/components/analytics-gate";
import CookieConsent from "@/components/cookie-consent";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

// Metadata is now handled by the localized layout in app/[lang]/layout.tsx

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read the current locale param when available to set correct html lang
  const lang = "en"
  try {
    // useLocale is client-only; avoid calling in server. Fallback to en.
    // We'll set html lang heuristically based on pathname later if needed.
  } catch {}
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} ${poppins.variable} ${sourceCodePro.variable} antialiased`}
      >
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
