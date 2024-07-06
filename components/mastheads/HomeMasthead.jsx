import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { motion, useInView } from "framer-motion";
import Marquee from "react-fast-marquee";

const HomeMasthead = ({ heading = "", tagline = "", image, logoMarquee }) => {
    const [domLoaded, setDomLoaded] = useState(false);
    const headerRef = useRef(null);

    const displayLogoMarquee = logoMarquee?.logos && logoMarquee?.logos.length > 0;
    
    const isInView = useInView(headerRef, {
        amount: 0.2,
        once: false,
    });

    const animateText = {
        initial: {
            opacity: 0,
            y: "110%",
        },
        animate: (i) => ({
            opacity: 1,
            y: "0%",
            transition: {
                duration: 1.5,
                ease: [0.23, 1, 0.32, 1],
                delay: i * 0.5,
            }
        })
    }

    useEffect(() => {
       setDomLoaded(true);
    }, []);

    return (
        <div className="relative w-full min-h-screen">
            <Image className="z-[1] relative" src={urlForImage(image?.asset)} fill objectFit="cover" priority />
            <header ref={headerRef} className="flex flex-col items-center text-center gap-y-4 relative z-[2] pt-[80px]">
                {heading && heading?.length > 0 && (
                    <h1 className="!font-heading text-[3.5rem] leading-[1.1] sm:~text-[4rem]/[10rem] uppercase tracking-[0.04em] text-white-80 overflow-hidden relative">
                        <motion.span variants={animateText} initial="initial" custom={0} animate={isInView && domLoaded ? "animate" : "initial"} className="will-change-transform inline-block">{heading}</motion.span>
                    </h1>
                )}
                {tagline && tagline?.length > 0 && (
                    <h2 className="!font-heading text-accent uppercase font-light tracking-[0.13em] text-[1.2rem] sm:~text-[1.5rem]/[2.5rem] -mt-[0.8em] overflow-hidden">
                        <motion.span variants={animateText} initial="initial" custom={1} animate={isInView && domLoaded? "animate" : "initial"} className="will-change-transform inline-block">{tagline}</motion.span>
                    </h2>
                )}
            </header>
            {displayLogoMarquee && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <div className="container">
                        <Marquee className="">
                            {logoMarquee?.logos?.map((logo, i) => (
                                <div key={`logo-marquee-item-${i}`} className="relative max-h-[48px] h-full w-auto">
                                    <Image src={urlForImage(logo?.image?.asset)} className="object-contain w-full h-full" fill alt={logo?.image?.alt_text || ""} />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HomeMasthead;