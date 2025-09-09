import { Box, CircularProgress, Skeleton } from "@mui/material";
import React from "react";

const Loading = () => {
  const showSpinner = Math.random() > 0.5; // flips a coin on every render

  return showSpinner ? (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <Box p={2}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={400}
        sx={{ borderRadius: 2 }}
      />
      <Skeleton width="60%" height={40} sx={{ mt: 2 }} />
      <Skeleton width="40%" height={30} />
    </Box>
  );
};

export default Loading;
