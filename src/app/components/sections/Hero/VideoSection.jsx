import React from "react";

const VideoSection = () => {

    return (
        <div style={{ minHeight: "550px", padding: "10px" }}>
            <video
                autoPlay
                muted
                playsInline
                controls={false}
                loop
                style={{ width: "100%", height: "auto" }}
                poster="/homepageVideoPoster.webp"
                disablePictureInPicture
            >
                <source src="/homepagemainvideo.webm" type="video/webm" />
            </video>
        </div>
    );
};

export default VideoSection;
