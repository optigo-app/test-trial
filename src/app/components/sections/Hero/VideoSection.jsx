import { Box } from "@mui/material";

export default function VideoSection() {
  return (
    <Box component="section" sx={{ minHeight: 550, p: 2 }}>
      <video
        autoPlay
        muted
        playsInline
        loop
        controls={false}
        poster="/homepageVideoPoster.webp"
        disablePictureInPicture
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <source src="/homepagemainvideo.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}
