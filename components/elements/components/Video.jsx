import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const Video = ({ add_thumbnail = false, thumbnail, title = "", video_id = "" }) => {
    const [playVideo, setPlayVideo] = useState(false);

    const fadeOutThumbnail = {
        initial: {
            opacity: 1,
            pointerEvents: "auto",
            visibility: "visible",
        },
        hidden: {
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
        }
    }

    return (
        <div style={{ paddingTop: "56.25%", position: "relative" }}>
            {add_thumbnail && thumbnail?.asset && (
                <motion.button type="button" variants={fadeOutThumbnail} initial="initial" animate={playVideo ? "hidden" : "initial"} className="absolute inset-0 z-[2]" onClick={() => setPlayVideo(true)}>
                    <Image className="w-full h-full" src={urlForImage(thumbnail?.asset)} fill alt="" />
                </motion.button>
            )}
            <iframe 
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video_id}?autohide=1&enablejsapi=1autoplay=1`}
                title={title || ""}
                allowFullScreen
                allow="autoplay; fullscreen"
                width="100%"
                height="100%"
            />
        </div>
    )
}

export default Video;