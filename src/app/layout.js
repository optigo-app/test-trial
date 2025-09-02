import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Optigo Apps | Cloud ERP for Diamond and Jewellery",
  description: "Beautiful software for your business processes — specialized by industry, engineered for speed in a cloud-first world.",
  icons: {
    icon: '/faviconV2.jpg',
    shortcut: '/faviconV2.jpg',
    apple: '/faviconV2.jpg',
  },
  openGraph: {
    title: "Optigo Apps | Cloud ERP for Diamond and Jewellery",
    description: "Beautiful software for your business processes — specialized by industry, engineered for speed in a cloud-first world.",
    url: "https://optigoapps.com/",
    type: "website",
    images: [
      {
        url: "https://optigoapps.com/wp-content/uploads/2013/06/img1.png",
        width: 1200,
        height: 630,
        alt: "OptigoApps",
      },
    ],
    siteName: "OptigoApps",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
