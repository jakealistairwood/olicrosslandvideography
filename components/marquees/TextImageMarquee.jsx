import React from "react";
import Marquee from "react-fast-marquee";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

const TextImageMarquee = (props) => {
    const { marquee_items } = props;
    const duplicatedItems = [...marquee_items, ...marquee_items];
    return (
        <Marquee className="bg-accent text-black flex items-center py-3 pointer-events-none">
            {duplicatedItems?.map((item, i) => (
                <div key={`text-image-marquee-item-${i}`} className="flex items-center gap-x-[60px] pr-[60px]">
                    <div className="relative">
                        <Image src={urlForImage(item?.image?.asset)} height={20} width={40} objectFit="contain" alt="" />
                    </div>
                    <span className="uppercase tracking-[0.15em] text-sm">{item?.text}</span>
                </div>
            ))}
        </Marquee>
    )
}

export default TextImageMarquee;