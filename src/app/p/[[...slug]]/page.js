import DetailClientComponents from "@/app/components/DetailClientComponents";
import { GetDetailProduct } from "@/utils/apis/DetailProduct";
import { Typography } from "@mui/material";
import { getDynamicImages } from "@/utils/apis/ProductList";
import { cache } from "react";
import { headers } from "next/headers";

const getCachedDetailProduct = cache(GetDetailProduct);

// --- SSR Metadata ---
export async function generateMetadata({ params }) {
  const { slug } = params;
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

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
    getDynamicImages(product.designno, product.DefaultImageName) || "/placeholder.png";

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
      url: `${baseUrl}/p/${slugString}`,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: product.TitleLine || product.designno,
        },
      ],
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
    other: {
      "product:brand": "Daily Wear Collection",
      "product:availability": "in stock",
      "product:condition": "new",
      "product:price:currency": "USD",
    },
  };
}

// --- Product Page ---
const ProductDetailPage = async ({ params }) => {
  const { slug } = await params;
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

  // serialize to avoid Next serialization issues
  const safeProduct = JSON.parse(JSON.stringify(product));

  return <DetailClientComponents product={safeProduct} />;
};

export default ProductDetailPage;
