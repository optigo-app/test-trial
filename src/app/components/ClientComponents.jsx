"use client";

import React, { useEffect, useRef } from "react";
import { Grid, Box, Typography, Card } from "@mui/material";
import Image from "next/image";
import { getDynamicImages } from "@/utils/apis/ProductList";
import { useRouter } from "next/navigation";

const ClientComponents = ({ data }) => {
  const containerRef = useRef(null);
  const router = useRouter();

  const handleCardClick = (product) => {
    const { autocode, designno, metalid } = product;
    router.push(`/p/${autocode}-${designno}-${metalid}`);
  };
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = async (e) => {
      const card = e.target.closest("[data-designno]");
      if (!card) return;

      const designno = card.dataset.designno;
      const autocode = card.dataset.autocode;
      const metalid = card.dataset.metalid;

      handleCardClick({ autocode, designno, metalid });
    };

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <Grid container spacing={2} ref={containerRef}>
        {data?.map((product, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx} data-designno={product?.designno} data-autocode={product?.autocode} data-metalid={product?.MetalTypeid}>
            <Card
              elevation={2}
              sx={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
                <Image src={getDynamicImages(product.designno) || "/placeholder.png"} alt={product.designname} width={300} height={300} style={{ objectFit: "contain", borderRadius: 4 }} />
                <Typography variant="h6" mt={1}>
                  {product.designname}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.category}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ClientComponents;
