"use client";

import { Box, Typography, Button, Chip, Divider, Grid, Paper, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { getDynamicImages } from "@/utils/apis/ProductList";
import { useQuery } from "@tanstack/react-query";
import { GetDetailProduct } from "@/utils/apis/DetailProduct";
import { useState, useEffect } from "react";

// ---- Styled Wrappers ----
const Container = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(6),
  alignItems: "start",
  padding: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

const ImageBox = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  overflow: "hidden",
  boxShadow: theme.shadows[3],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
  background: theme.palette.background.default,
}));

const InfoSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

const PriceTag = styled(Typography)(({ theme }) => ({
  fontSize: "1.75rem",
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

const MetaRow = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "120px 1fr",
  fontSize: "0.9rem",
  color: theme.palette.text.secondary,
  "& strong": {
    color: theme.palette.text.primary,
    fontWeight: 500,
  },
}));

// ---- Component ----
const DetailClientComponents = ({ product }) => {
  const { autocode, designno, MetalTypeid } = product;
  const [queryStart, setQueryStart] = useState(null);
  const [queryTime, setQueryTime] = useState(null);

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["product", autocode, designno, MetalTypeid],
    queryFn: async () => {
      setQueryStart(performance.now());
      const res = await GetDetailProduct({ autocode, designno, MetalTypeid });
      console.log("🚀 ~ DetailClientComponents ~ res:", res)
      setQueryTime(performance.now() - (queryStart || performance.now()));
      console.log("🚀 ~ DetailClientComponents ~ performance.now():", performance.now())
      return res;
    },
    initialData: { rd: [product] }, // use server data first
    staleTime: 1000 * 60 * 5, // 5min
    refetchOnWindowFocus: true,
  });

  const productData = data?.rd?.[0];
  const imageUrl = getDynamicImages(product.designno, product.DefaultImageName) || "/placeholder.png";

  return (
    <Container>
      {/* Left: Product Image */}
      <ImageBox>
        {isFetching && (
          <CircularProgress
            size={40}
            sx={{ position: "absolute", color: "primary.main" }}
          />
        )}
        <Image
          src={imageUrl}
          alt={productData?.TitleLine}
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
        />
      </ImageBox>

      {/* Right: Product Info */}
      <InfoSection>
        <Box>
          <Typography variant="h5" fontWeight={600}>
            {productData?.TitleLine}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            Design No: {productData?.designno}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          {productData?.IsBestSeller ? <Chip label="Best Seller" color="primary" /> : null}
          {productData?.IsTrending ? <Chip label="Trending" color="secondary" /> : null}
          {productData?.IsNewArrival ? <Chip label="New Arrival" variant="outlined" /> : null}
          {productData?.IsInReadyStock ? (
            <Chip label="In Stock" color="success" />
          ) : (
            <Chip label="Made to Order" />
          )}
        </Box>

        <PriceTag>
          ₹{productData?.UnitCostWithMarkUpIncTax?.toLocaleString()}
        </PriceTag>

        {/* Show query time if available */}
        {queryTime && (
          <Typography variant="caption" color="text.secondary">
            Loaded in {Math.round(queryTime)} ms
          </Typography>
        )}

        <Divider />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <MetaRow>
              <strong>Collection</strong>
              <span>{productData?.collection}</span>
            </MetaRow>
            <MetaRow>
              <strong>Category</strong>
              <span>{productData?.category}</span>
            </MetaRow>
            <MetaRow>
              <strong>Style</strong>
              <span>{productData?.style}</span>
            </MetaRow>
          </Grid>

          <Grid item xs={12} sm={6}>
            <MetaRow>
              <strong>Metal</strong>
              <span>{productData?.MetalTypePurity}</span>
            </MetaRow>
            <MetaRow>
              <strong>Weight</strong>
              <span>{productData?.Nwt} g</span>
            </MetaRow>
            <MetaRow>
              <strong>Diamond</strong>
              <span>
                {productData?.Dwt
                  ? `${productData.Dwt} ct (${productData.Dpcs} pcs)`
                  : "—"}
              </span>
            </MetaRow>
          </Grid>
        </Grid>

        <Divider />

        <Box display="flex" gap={2}>
          <Button variant="contained" size="large" disableElevation>
            Add to Cart
          </Button>
          <Button variant="outlined" size="large">
            Wishlist
          </Button>
        </Box>
      </InfoSection>
    </Container>
  );
};

export default DetailClientComponents;
