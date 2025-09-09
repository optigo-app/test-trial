"use client"
import React from 'react'
import { getDynamicImages } from "@/utils/apis/ProductList";
import { Card, Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const ProductCard = ({ product }) => {
  const router = useRouter();
  const href = `/p/${product?.autocode}-${product?.designno}-${product?.MetalTypeid}`;
  const handleMouseEnter = () => {
    router.push(href);
  };

  return (
    <Card
      elevation={2}
      sx={{
        width: "100%",
        height: "100%",
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
      }}
      onClick={handleMouseEnter}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
        <Image src={getDynamicImages(product.designno) || "/placeholder.png"} alt={`${product.designname}`} width={300} height={300} style={{ objectFit: "contain", borderRadius: 4 }} />
        <Typography variant="h6" mt={1}>
          {product.designname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>
      </Box>
    </Card>
  )
}

export default ProductCard