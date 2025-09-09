import { GetProductList } from "@/utils/apis/ProductList";
import { Box, Typography } from "@mui/material";
import ClientComponents from "./components/ClientComponents";

const ProductsPage = async () => {
  const products = await GetProductList();
  const data = products?.rd;

  return (
    <>
      <Box px={4} py={2}>
        <Typography variant="h4" gutterBottom>
          Product List
        </Typography>
        <ClientComponents data={data} />
      </Box>
    </>
  );
};

export default ProductsPage;
