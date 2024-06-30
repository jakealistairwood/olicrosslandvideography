import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const ThreeColGallery = ({ gallery }) => {
    return (
        <div className="w-full flex gap-10 max-h-[440px] overflow-hidden">
            {gallery?.map((image, i) => (
                <GalleryImage key={`gallery-image-${image?._key}`} {...image} />
            ))}
        </div>
    )
}

export default ThreeColGallery;

const GalleryImage = ({ aspect_ratio, asset }) => {
    const getAspectRatio = {
        "1:1": "aspect-[1/1] max-w-[32.5%]",
        "16:9": "aspect-[16/9] max-w-[48%]",
        "1:2": "aspect-[1/2] max-w-[19.5%]"
    }
    return (
        <div className={`relative w-full h-full ${getAspectRatio[aspect_ratio]}`}>
            <Image src={urlForImage(asset)} fill className="object-cover object-bottom h-full w-full" />
        </div>
    )
}