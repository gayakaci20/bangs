import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Bangs! - Lightning-fast Search Shortcuts",
  description: "Modern, self-hostable search shortcut service inspired by DuckDuckGo's !bangs. Type commands like !g react, !y lofi mix to jump straight to the right search engine instantly.",
  keywords: ["bangs", "search shortcuts", "DuckDuckGo", "search engine", "productivity", "browser shortcuts"],
  authors: [{ name: "Gaya KACI", url: "https://github.com/gayakaci20" }],
  creator: "Gaya KACI",
  publisher: "Gaya KACI",
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bangs-beta.vercel.app',
    title: 'Bangs! - Lightning-fast Search Shortcuts',
    description: 'Modern, self-hostable search shortcut service inspired by DuckDuckGo\'s !bangs. Type commands like !g react, !y lofi mix to jump straight to the right search engine instantly.',
    siteName: 'Bangs!',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'Bangs! Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bangs! - Lightning-fast Search Shortcuts',
    description: 'Modern, self-hostable search shortcut service inspired by DuckDuckGo\'s !bangs.',
    images: ['/favicon.png'],
    creator: '@gayakaci20',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
