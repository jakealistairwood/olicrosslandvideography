import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const Video = ({ add_thumbnail = false, thumbnail, title = "", video_id = "" }) => {
    return (
        <div style={{ paddingTop: "56.25%", position: "relative" }}>
            {add_thumbnail && thumbnail?.asset && (
                <div className="absolute inset-0 z-[2]">
                    <Image className="w-full h-full" src={urlForImage(thumbnail?.asset)} fill alt="" />
                </div>
            )}
            <iframe 
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video_id}?autohide=1&enablejsapi=1autoplay=1`}
                title="showcase reel"
                allowFullScreen
                allow="autoplay; fullscreen"
                width="100%"
                height="100%"
            />
        </div>
    )
}

export default Video;