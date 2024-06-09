import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const HomeMasthead = ({ heading = "", tagline = "", image }) => {

    return (
        <div className="relative w-full min-h-screen">
            <Image className="z-[1] relative" src={urlForImage(image?.asset)} fill objectFit="cover" priority />
            <header className="flex flex-col items-center text-center relative z-[2] pt-[80px]">
                {heading && heading?.length > 0 && <h1 className="font-heading text-[7.875rem] uppercase tracking-[0.04em] text-white-80">{heading}</h1>}
                {tagline && tagline?.length > 0 && <h2 className="font-heading text-accent uppercase font-light tracking-[0.13em] text-[2.5rem] -mt-6">{tagline}</h2>}
            </header>
        </div>
    )
}

export default HomeMasthead;