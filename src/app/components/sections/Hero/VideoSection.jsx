
"use client"
import { Box } from "@mui/material";
import React, { useEffect } from "react";

const VideoSection = () => {
    return (
        
        <Box sx={{ minHeight: "550px", padding: "10px" }}>
            <video
                autoPlay
                muted
                playsInline
                controls={false}
                loop
                poster="/homepageVideoPoster.webp"
                disablePictureInPicture
            >
                <source src="/homepagemainvideo.webm" type="video/webm" />
            </video>
        </Box>
    );
};

export default VideoSection;
