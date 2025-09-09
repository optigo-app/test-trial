import React from "react";
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Stack,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const banner = "https://sonasons.optigoapps.com/WebSiteStaticImage/Banner/lookbookbanner1.png";
const image = "https://cdnfs.optigoapps.com/content-global4/sonasonsFLKODXCIH49U0YSR1_Image/Design_Image/Design_Thumb/G25806~1.jpg";

export default function DesignMaster() {
    return (
        <Box sx={{ width: "90%", marginInline: "auto" }}>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 500, md: 600 },
                    backgroundImage: `url(${banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    px: { xs: 2, md: 6 },
                }}
            >
                {/* Floating Product Card */}
                <Card
                    sx={{
                        width: 240,
                        textAlign: "center",
                        borderRadius: 2,
                        boxShadow: 3,
                        bgcolor: "#fff",
                    }}
                >
                    <Box sx={{ p: 2, bgcolor: "#f9f9f9" }}>
                        <CardMedia
                            component="img"
                            image={image}
                            alt="Diamond Necklace"
                            sx={{ objectFit: "contain", maxHeight: 180, mx: "auto" }}
                        />
                    </Box>
                    <CardContent sx={{ p: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                            G25806
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ mt: 0.5, fontWeight: 600, color: "#000" }}
                        >
                            INR 2,12,310
                        </Typography>
                    </CardContent>
                </Card>

                {/* Navigation Buttons */}
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        position: "absolute",
                        bottom: 24,
                        left: "50%",
                        transform: "translateX(-50%)",
                        bgcolor: "#fff",
                        borderRadius: 1,
                        boxShadow: 2,
                        p: 0.5,
                    }}
                >
                    <IconButton size="small">
                        <ChevronLeft />
                    </IconButton>
                    <IconButton size="small">
                        <ChevronRight />
                    </IconButton>
                </Stack>
            </Box>
        </Box>
    );
}