import { Box, Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const Wrapper = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
}));

export default function PremiumSkeleton({
  variant = "detail",
  height = 300,
}) {
  if (variant === "card") {
    return (
      <Wrapper p={2}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={height}
          sx={{ borderRadius: 2, mb: 2 }}
        />
        <Skeleton width="70%" height={28} sx={{ mb: 1 }} />
        <Skeleton width="50%" height={24} />
      </Wrapper>
    );
  }

  if (variant === "list") {
    return (
      <Box>
        {Array.from({ length: 5 }).map((_, i) => (
          <Box key={i} display="flex" alignItems="center" mb={2}>
            <Skeleton variant="circular" width={40} height={40} sx={{ mr: 2 }} />
            <Box flex={1}>
              <Skeleton width="60%" height={22} />
              <Skeleton width="40%" height={18} />
            </Box>
          </Box>
        ))}
      </Box>
    );
  }

  if (variant === "detail") {
    return (
      <Box p={2}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={400}
          sx={{ borderRadius: 3, mb: 3 }}
        />
        <Skeleton width="80%" height={36} sx={{ mb: 1 }} />
        <Skeleton width="60%" height={28} sx={{ mb: 2 }} />
        <Skeleton width="90%" height={20} />
        <Skeleton width="85%" height={20} />
        <Skeleton width="70%" height={20} />
      </Box>
    );
  }

  return null;
}
