import React from "react";
import {
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Stack,
} from "@mui/material";
import { GetBestSeller, getDynamicImages } from "@/utils/apis/Bestseller";

const staticBestseller = [
    {
        designno: "BN E 03524Y",
        title: "Pear Cut Diamond Split Shank Ring",
        Gwt: "4.747",
        Nwt: "4.600",
        Dwt: "0.734",
        Dpcs: "31",
        UnitCostWithMarkUpIncTax: "79,378",
        ImageCount: 1,
    },
    {
        designno: "R 05767WY",
        title: "Marquise Cut Hexa Diamond Bracelet",
        Gwt: "6.119",
        Nwt: "5.930",
        Dwt: "0.943",
        Dpcs: "55",
        UnitCostWithMarkUpIncTax: "1,01,908",
        ImageCount: 1,
    },
    {
        designno: "E 11093R",
        title: "Gold Bangle",
        Gwt: "3.200",
        Nwt: "3.000",
        Dwt: "0.200",
        Dpcs: "12",
        UnitCostWithMarkUpIncTax: "45,600",
        ImageCount: 1,
    },
    {
        designno: "P E BL 01923WY",
        title: "Diamond Necklace",
        Gwt: "5.000",
        Nwt: "4.800",
        Dwt: "1.100",
        Dpcs: "40",
        UnitCostWithMarkUpIncTax: "2,50,000",
        ImageCount: 1,
    },
];

export default async function BestSeller({ theme, pageType }) {

    const data = await GetBestSeller();
    const dynamicBestseller = data?.rd || [];

    const bestSeller = pageType === "static" ? staticBestseller : dynamicBestseller;

    return (
        <Box sx={{ width: "100%", bgcolor: "#fff" }}>
            <Typography variant="h4" sx={{ px: 4, textAlign: "center", mt: 4 }} gutterBottom>
                Best Seller
            </Typography>
            <Grid container>
                {/* Left: 2x2 product grid */}
                <Grid item sx={{ width: "100%", px: 0, mx: 0 }}>
                    <Grid container spacing={0} sx={{ width: '70%', marginInline: "auto" }}>
                        {bestSeller?.slice(0, 4).map((p, index) => {
                            const code = p.designno;
                            const title = p.TitleLine;
                            const gwt = p.Gwt;
                            const nwt = p.Nwt;
                            const dwt = `${p.Dwt}/${p.Dpcs}`;
                            const price = `INR ${p.UnitCostWithMarkUpIncTax.toLocaleString()}`;

                            // If your API returns image path, build URL here
                            const image =
                                (p.ImageCount > 0)
                                    ? `${getDynamicImages(p.designno)}`
                                    : "/noimage.jpg";

                            return (
                                <Grid key={index} item sm={6} md={3} sx={{ p: "10px", width: "25%" }}>
                                    <Card
                                        elevation={0}
                                        sx={{ boxShadow: "none", bgcolor: "transparent" }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                bgcolor: "#f9f9f9",
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                image={image}
                                                alt={title}
                                                sx={{ objectFit: "contain", maxHeight: "100%" }}
                                            />
                                        </Box>
                                        <CardContent sx={{ px: 0 }}>
                                            <Typography variant="body2" color="text.secondary">
                                                {code} - {title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ mt: 0.5 }}
                                            >
                                                GWT: {gwt} | NWT: {nwt} | DWT: {dwt}
                                            </Typography>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{ mt: 1, fontWeight: 600 }}
                                            >
                                                {price}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
