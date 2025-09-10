import "./globals.css";
import ThemeRegistry from "./themeRegistry";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
