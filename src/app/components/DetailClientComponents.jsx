"use client";

import { Box, Typography, Button, Chip, Divider, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { getDynamicImages } from "@/utils/apis/ProductList";

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
  const imageUrl =
    getDynamicImages(product.designno, product.DefaultImageName) || "/placeholder.png";

  return (
    <Container>
      {/* Left: Product Image */}
      <ImageBox>
        <Image
          src={imageUrl}
          alt={product.TitleLine}
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
        />
      </ImageBox>

      {/* Right: Product Info */}
      <InfoSection>
        <Box>
          <Typography variant="h5" fontWeight={600}>
            {product.TitleLine}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            Design No: {product.designno}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          {product.IsBestSeller ? <Chip label="Best Seller" color="primary" /> : null}
          {product.IsTrending ? <Chip label="Trending" color="secondary" /> : null}
          {product.IsNewArrival ? <Chip label="New Arrival" variant="outlined" /> : null}
          {product.IsInReadyStock ? <Chip label="In Stock" color="success" /> : <Chip label="Made to Order" />}
        </Box>

        <PriceTag>₹{product.UnitCostWithMarkUpIncTax.toLocaleString()}</PriceTag>

        <Divider />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <MetaRow>
              <strong>Collection</strong>
              <span>{product.collection}</span>
            </MetaRow>
            <MetaRow>
              <strong>Category</strong>
              <span>{product.category}</span>
            </MetaRow>
            <MetaRow>
              <strong>Style</strong>
              <span>{product.style}</span>
            </MetaRow>
          </Grid>

          <Grid item xs={12} sm={6}>
            <MetaRow>
              <strong>Metal</strong>
              <span>{product.MetalTypePurity}</span>
            </MetaRow>
            <MetaRow>
              <strong>Weight</strong>
              <span>{product.Nwt} g</span>
            </MetaRow>
            <MetaRow>
              <strong>Diamond</strong>
              <span>{product.Dwt ? `${product.Dwt} ct (${product.Dpcs} pcs)` : "—"}</span>
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
