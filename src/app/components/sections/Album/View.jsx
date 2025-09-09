"use client";
import React, { useState } from "react";
import {
    Box,
    Tabs,
    Tab,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
} from "@mui/material";
import { getDynamicImages } from "@/utils/apis/Album";

const AlbumSection = ({ albums }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Box sx={{ textAlign: "center", py: 4 }}>
            {/* Title */}
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                ALBUM
            </Typography>

            {/* Tabs */}
            <Tabs
                value={activeTab}
                onChange={handleChange}
                centered
                sx={{
                    mb: 4,
                    "& .MuiTab-root": {
                        borderRadius: "20px",
                        px: 3,
                        textTransform: "capitalize",
                    },
                }}
            >
                {albums.map((album, idx) => (
                    <Tab key={album.Albumid} label={album.AlbumName} />
                ))}
            </Tabs>

            {/* Tab content */}
            {albums.map((album, idx) => {
                if (idx !== activeTab) return null;

                let designs = [];
                try {
                    designs = JSON.parse(album.Designdetail || "[]");
                } catch (e) {
                    console.error("Invalid design data:", e);
                }

                return (
                    <Grid container spacing={3} justifyContent="center" key={album.Albumid}>
                        {designs.map((design) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={design.autocode}>
                                <Card sx={{ p: 1 }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={
                                            design.ImageCount > 0
                                                ? getDynamicImages(design.designno)
                                                : "/noimage.jpg"
                                        }
                                        alt={design.TitleLine}
                                        sx={{ objectFit: "contain", bgcolor: "#f5f5f5", height: "100%" }}
                                    />
                                    <CardContent>
                                        <Typography variant="body1" fontWeight="500">
                                            {design.TitleLine}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Net Wt: {design.Nwt}g | Gross Wt: {design.Gwt}g
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Diamonds: {design.Dpcs} pcs | {design.Dwt} ct
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            fontWeight="bold"
                                            sx={{ mt: 1 }}
                                        >
                                            HKD {design.UnitCostWithMarkUpIncTax}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                );
            })}
        </Box>
    );
};

export default AlbumSection;
