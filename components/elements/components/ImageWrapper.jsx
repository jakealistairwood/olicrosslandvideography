import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const ImageWrapper = ({ asset, alt_text }) => {
    return (
        <>
            {asset && <Image className="w-full h-full" src={urlForImage(asset)} alt={alt_text || ""} fill objectFit="cover" />}
        </>
    )
}

export default ImageWrapper;