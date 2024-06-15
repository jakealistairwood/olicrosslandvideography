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
                <motion.button type="button" aria-label="Play Video" variants={fadeOutThumbnail} initial="initial" animate={playVideo ? "hidden" : "initial"} className="absolute inset-0 z-[2]" onClick={() => setPlayVideo(true)}>
                    <Image className="w-full h-full" src={urlForImage(thumbnail?.asset)} fill alt="" />
                    <div className="absolute z-[10] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full bg-white/[12%] backdrop-blur-lg flex items-center justify-center">
                        <svg
                        className="w-[15px] h-[25px] md:w-[28px] md:h-[33px]"
                        width="28"
                        height="33"
                        viewBox="0 0 28 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M27.5625 16.4998C27.5635 16.9136 27.4574 17.3206 27.2545 17.6813C27.0516 18.0419 26.7589 18.3439 26.4047 18.5579L4.455 31.9855C4.08494 32.2121 3.66109 32.3358 3.22723 32.3439C2.79337 32.3519 2.36523 32.244 1.98703 32.0312C1.61243 31.8218 1.30038 31.5163 1.08297 31.1463C0.865555 30.7763 0.750626 30.355 0.75 29.9258V3.07373C0.750626 2.64455 0.865555 2.22329 1.08297 1.85326C1.30038 1.48323 1.61243 1.17778 1.98703 0.968339C2.36523 0.755588 2.79337 0.647657 3.22723 0.655691C3.66109 0.663726 4.08494 0.787435 4.455 1.01404L26.4047 14.4416C26.7589 14.6556 27.0516 14.9576 27.2545 15.3183C27.4574 15.679 27.5635 16.086 27.5625 16.4998Z"
                                fill="white"
                            />
                        </svg>
                    </div>      
                </motion.button>
            )}
            <iframe 
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video_id}?autoplay=1?autohide=1&enablejsapi=1`}
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