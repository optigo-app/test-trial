import { Grid, Box, Typography, Card } from "@mui/material";
import ProductCard from "./Card/ProductCard";

const ClientComponents = ({ data }) => {
  return (
    <>
      <Grid container spacing={2}>
        {data?.map((product, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx} data-designno={product?.designno} data-autocode={product?.autocode} data-metalid={product?.MetalTypeid}>
             <ProductCard product={product}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ClientComponents;
