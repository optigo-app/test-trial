import React from "react";
import {
    Box,
    Typography,
    Stack,
    IconButton,
    Link,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import CloseIcon from "@mui/icons-material/Close"; // as X icon placeholder

export default function Footer({theme, pageType}) {
    return <></>
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "#000",
                color: "#fff",
                py: 3,
                mt: 5,
                px: { xs: 2, md: 6 },
            }}
        >
            {/* Top row */}
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                spacing={2}
            >
                {/* Logo */}
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    sonasons.
                    <Typography
                        component="span"
                        variant="caption"
                        sx={{ display: "block", fontWeight: 400, letterSpacing: 2 }}
                    >
                        LUXURY JEWELRY
                    </Typography>
                </Typography>

                {/* Links */}
                <Stack direction="row" spacing={3}>
                    <Link href="#" underline="none" sx={{ color: "#fff", fontWeight: 600 }}>
                        Terms & Conditions
                    </Link>
                    <Link href="#" underline="none" sx={{ color: "#fff", fontWeight: 600 }}>
                        Privacy Policy
                    </Link>
                    <Link href="#" underline="none" sx={{ color: "#fff", fontWeight: 600 }}>
                        About Us
                    </Link>
                    <Link href="#" underline="none" sx={{ color: "#fff", fontWeight: 600 }}>
                        Contact Us
                    </Link>
                </Stack>

                {/* Socials */}
                <Stack direction="row" spacing={1}>
                    <IconButton sx={{ color: "#fff" }}><InstagramIcon /></IconButton>
                    <IconButton sx={{ color: "#fff" }}><CloseIcon /></IconButton>
                    <IconButton sx={{ color: "#fff" }}><FacebookIcon /></IconButton>
                    <IconButton sx={{ color: "#fff" }}><PinterestIcon /></IconButton>
                    <IconButton sx={{ color: "#fff" }}><PlayCircleFilledIcon /></IconButton>
                </Stack>
            </Stack>

            {/* Bottom row */}
            <Typography
                variant="body2"
                sx={{ textAlign: "center", mt: 3, fontWeight: 500 }}
            >
                © 2025, ORAIL DESIGNS
            </Typography>
        </Box>
    );
}