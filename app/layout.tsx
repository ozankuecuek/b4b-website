// Metadata is now handled by the localized layout in app/[lang]/layout.tsx
import { Geist, Geist_Mono, Lexend, Poppins, Source_Code_Pro } from "next/font/google";
import "./globals.css";

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} ${poppins.variable} ${sourceCodePro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
