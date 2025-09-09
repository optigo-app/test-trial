import React from "react";
import {
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
} from "@mui/material";
import { getDynamicImages, GetTrending } from "@/utils/apis/Trending";

// Replace these imports with your real image imports or URLs

const staticTrending = [
    {
        designno: "P 02599R",
        title: "Gold ring",
        Gwt: "4.747",
        Nwt: "4.600",
        Dwt: "0.734",
        Dpcs: "31",
        ImageCount: 1,
        UnitCostWithMarkUpIncTax: "79,378",
    },
    {
        designno: "E 07975WY",
        title: "Gold Chain",
        Gwt: "6.119",
        Nwt: "5.930",
        Dwt: "0.943",
        Dpcs: "55",
        ImageCount: 1,
        UnitCostWithMarkUpIncTax: "1,01,908",
    },
    {
        designno: "P E BL 07910Y",
        title: "Gold Bracelets",
        Gwt: "3.200",
        Nwt: "3.000",
        Dwt: "0.200",
        Dpcs: "12",
        ImageCount: 1,
        UnitCostWithMarkUpIncTax: "45,600",
    },
    {
        designno: "E E BU 02394Y",
        title: "Diamond Earring",
        Gwt: "5.000",
        Nwt: "4.800",
        Dwt: "1.100",
        Dpcs: "40",
        ImageCount: 1,
        UnitCostWithMarkUpIncTax: "2,50,000",
    },
];

export default async function Trending({ theme, pageType }) {

    const data = await GetTrending();
    const dynamicTrending = data?.rd || [];

    const trending = pageType === "static" ? staticTrending : dynamicTrending;

    return (
        <Box sx={{ width: "100%", bgcolor: "#fff" }}>
            <Typography variant="h4" sx={{ px: 4, textAlign: "center", mt: 4 }} gutterBottom>
                Trending
            </Typography>
            <Grid container>
                {/* Left: 2x2 product grid */}
                <Grid item sx={{ width: "100%", px: 0, mx: 0 }}>
                    <Grid container spacing={0} sx={{ width: '70%', marginInline: "auto" }}>
                        {trending?.slice(0, 4).map((p, index) => {
                            const id = p.DesignId;
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
