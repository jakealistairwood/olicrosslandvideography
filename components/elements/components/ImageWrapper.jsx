import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const ImageWrapper = ({ asset, alt_text, priority = false, }) => {
    return (
        <>
            {asset && <Image className="w-full h-full object-cover" src={urlForImage(asset)} alt={alt_text || ""} fill objectFit="cover" priority={priority} />}
        </>
    )
}

export default ImageWrapper;