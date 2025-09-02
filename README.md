This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



To set `faviconV2.jpg` as your favicon in Next.js, you have a few options:

## Method 1: Direct JPG Favicon (Simple)

1. **Place your image in the public folder:**
```
public/
└── faviconV2.jpg
```

2. **Add to your layout.js (App Router) or _app.js (Pages Router):**

**For App Router (Next.js 13+):**
```javascript
// app/layout.js
export const metadata = {
  title: 'Your App',
  description: 'Your app description',
  icons: {
    icon: '/faviconV2.jpg',
    shortcut: '/faviconV2.jpg',
    apple: '/faviconV2.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

**For Pages Router:**
```javascript
// pages/_app.js
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/faviconV2.jpg" />
        <link rel="shortcut icon" href="/faviconV2.jpg" />
        <link rel="apple-touch-icon" href="/faviconV2.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
```

## Method 2: Convert to ICO/PNG (Recommended)

Since JPG isn't the ideal format for favicons, you should convert it:

### Online Conversion:
1. Go to https://favicon.io/favicon-converter/
2. Upload your `faviconV2.jpg`
3. Download the generated files
4. Place them in your `public` folder:

```
public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
└── android-chrome-192x192.png
```

### Then use this metadata:
```javascript
// app/layout.js
export const metadata = {
  title: 'Your App',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}
```

## Method 3: Quick Fix - Rename to .ico

If you want the simplest solution:

1. **Rename your file:**
   - Change `faviconV2.jpg` to `favicon.ico` 
   - Place it in the `public` folder

2. **Next.js will automatically use it** - no code changes needed!

```
public/
└── favicon.ico  (your renamed faviconV2.jpg)
```

## Method 4: Keep JPG Name with Custom Path

```javascript
// app/layout.js
export const metadata = {
  icons: {
    icon: '/faviconV2.jpg',
  },
}
```

**Note:** Some browsers may not display JPG favicons properly. PNG or ICO formats are more reliable.

## Recommended Approach:

1. Use favicon.io converter to convert `faviconV2.jpg` to proper favicon formats
2. Place the generated files in your `public` folder
3. Use Method 2 above for the metadata

This ensures maximum browser compatibility and optimal display quality!



The error you're encountering is because `product` is not a valid OpenGraph type in Next.js. The valid OpenGraph types are limited to a specific set defined by the Open Graph protocol.

Here's how to fix your code:

```javascript
import DetailClientComponents from "@/app/components/DetailClientComponents";
import { GetDetailProduct } from "@/utils/apis/DetailProduct";
import { Typography } from "@mui/material";
import { getDynamicImages } from "@/utils/apis/ProductList";
import { cache } from "react";

const getCachedDetailProduct = cache(GetDetailProduct);

export async function generateMetadata({ params }) {
  const { slug } = params;
  const slugString = Array.isArray(slug) ? slug[0] : slug;

  const [autocodeRaw, designnoRaw, metalidRaw] = slugString?.split("-") || [];
  const autocode = autocodeRaw ? decodeURIComponent(autocodeRaw) : null;
  const designno = designnoRaw ? decodeURIComponent(designnoRaw) : null;
  const metalid = metalidRaw ? decodeURIComponent(metalidRaw) : null;

  if (!autocode || !designno || !metalid) {
    return { title: "Invalid Product", description: "Invalid product URL" };
  }

  const detail = await getCachedDetailProduct({
    autocode,
    designno,
    MetalTypeid: metalid,
  });

  const product = detail?.rd?.[0];
  if (!product) {
    return { title: "Product Not Found", description: "This product does not exist." };
  }

  const imageUrl =
    getDynamicImages(product.designno, product.DefaultImageName) ||
    "/placeholder.png";

  return {
    title: `${product.TitleLine || product.designno} | Daily Wear Collection`,
    description:
      product.description?.trim() ||
      `Shop ${product.TitleLine || product.designno} in ${product.collection} - ${product.category}. Made with ${product.MetalTypePurity}.`,
    openGraph: {
      title: `${product.TitleLine || product.designno} | Daily Wear Collection`,
      description:
        product.description?.trim() ||
        `Explore ${product.TitleLine || product.designno} crafted in ${product.MetalTypePurity}.`,
      url: `https://yourdomain.com/product/${slugString}`,
      type: "website", // ✅ Changed from "product" to "website"
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: product.TitleLine || product.designno,
        },
      ],
      // ✅ Add product-specific structured data
      siteName: "Daily Wear Collection",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.TitleLine || product.designno}`,
      description:
        product.description?.trim() ||
        `Check out ${product.TitleLine || product.designno} in ${product.MetalTypePurity}.`,
      images: [imageUrl],
    },
    // ✅ Add additional metadata for better SEO
    other: {
      'product:brand': 'Daily Wear Collection',
      'product:availability': 'in stock',
      'product:condition': 'new',
      'product:price:currency': 'USD', // Adjust as needed
    },
  };
}

const ProductDetailPage = async ({ params }) => {
  const { slug } = params;
  const slugString = Array.isArray(slug) ? slug[0] : slug;

  const [autocodeRaw, designnoRaw, metalidRaw] = slugString?.split("-") || [];
  const autocode = autocodeRaw ? decodeURIComponent(autocodeRaw) : null;
  const designno = designnoRaw ? decodeURIComponent(designnoRaw) : null;
  const metalid = metalidRaw ? decodeURIComponent(metalidRaw) : null;

  if (!autocode || !designno || !metalid) {
    return <Typography variant="h6">Invalid product URL</Typography>;
  }

  const detail = await getCachedDetailProduct({
    autocode,
    designno,
    MetalTypeid: metalid,
  });

  const product = detail?.rd?.[0];
  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  // ✅ Ensure it's serializable for client
  const safeProduct = JSON.parse(JSON.stringify(product));

  return (
    <DetailClientComponents product={safeProduct} />
  );
};

export default ProductDetailPage;
```

## Key Changes:

1. **Changed OpenGraph type**: Changed from `type: "product"` to `type: "website"`

2. **Added product metadata**: Used the `other` field to include product-specific meta tags that search engines and social platforms can understand

3. **Added siteName**: Added `siteName` to the OpenGraph object for better branding

## Valid OpenGraph Types in Next.js:
- `website` (most common for product pages)
- `article`
- `book`
- `profile`
- `music.song`
- `music.album`
- `music.playlist`
- `music.radio_station`
- `video.movie`
- `video.episode`
- `video.tv_show`
- `video.other`

For e-commerce product pages, `website` is the most appropriate type. The additional product information can be provided through custom meta tags in the `other` field, which search engines and social platforms will still recognize for rich snippets and product cards.