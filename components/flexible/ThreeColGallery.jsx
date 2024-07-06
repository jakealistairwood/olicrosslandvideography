import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const ThreeColGallery = ({ gallery }) => {
    return (
        <div className="w-full flex flex-col md:flex-row gap-10 md:max-h-[440px] overflow-hidden">
            {gallery?.map((image, i) => (
                <GalleryImage key={`gallery-image-${image?._key}`} {...image} />
            ))}
        </div>
    )
}

export default ThreeColGallery;

const GalleryImage = ({ aspect_ratio, asset }) => {
    const getAspectRatio = {
        "1:1": "aspect-[16/9] md:aspect-[1/1] md:max-w-[32.5%]",
        "16:9": "aspect-[16/9] md:max-w-[48%]",
        "1:2": "aspect-[16/9] md:aspect-[1/2] md:max-w-[19.5%]"
    }
    return (
        <div className={`relative w-full h-full ${getAspectRatio[aspect_ratio]}`}>
            <Image src={urlForImage(asset)} fill className="object-cover md:object-bottom h-full w-full" />
        </div>
    )
}