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
        once: true,
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
            <header ref={headerRef} className="flex flex-col items-center text-center gap-y-4 relative z-[2] pt-[80px] pointer-events-none">
                {heading && heading?.length > 0 && (
                    <h1 className="!font-heading leading-[1.1] ~text-[3.5rem]/[8rem] sm:~text-[4rem]/[10rem] uppercase tracking-[0.04em] text-white-80 overflow-hidden relative">
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
                <LogoMarquee logos={logoMarquee?.logos} heading={logoMarquee?.heading} />
            )}
        </div>
    )
}

export default HomeMasthead;

const LogoMarquee = ({ logos, heading }) => {
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];
    const hasHeading = heading && heading.length > 0;

    const gcd = (a, b) => {
        return b ? gcd(b, a % b) : a;
    }
      
    const numberToAspectRatio = (number, precision = 2) => {
        // Convert number to a string to handle precision
        let strNum = number.toFixed(precision);
        
        // Extract the integer and decimal parts
        let [intPart, decPart] = strNum.split('.').map(Number);
        
        // If there is no decimal part, return the integer as the ratio
        if (!decPart) {
            return `${intPart}:1`;
        }
        
        // Find the numerator and denominator
        let numerator = intPart * Math.pow(10, precision) + decPart;
        let denominator = Math.pow(10, precision);
        
        // Simplify the fraction
        let divisor = gcd(numerator, denominator);
        
        // Return the simplified ratio
        return `${numerator / divisor}/${denominator / divisor}`;
    }

    return (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[4] w-full pointer-events-none">
            <div className="container">
                <div className="flex flex-col items-center text-center gap-y-10">
                    {hasHeading && <p className="font-heading text-lg uppercase !tracking-[0.2em] text-white/80 font-light">{heading}</p>}
                    <Marquee className="w-full flex gap-x-20">
                        {duplicatedLogos?.map((logo, i) => {
                            const aspectRatio = numberToAspectRatio(logo?.image?.asset?.metadata?.dimensions?.aspectRatio);

                            console.log(aspectRatio);

                            return (
                                <div key={`logo-marquee-item-${i}`} className="relative h-full w-auto mr-20 min-h-[28px] max-h-[28px]" style={{ aspectRatio: aspectRatio }}>
                                    <Image 
                                        src={urlForImage(logo?.image?.asset)} 
                                        className="object-contain w-full h-full" 
                                        height={logo?.image?.asset?.metadata?.dimensions?.height} 
                                        width={logo?.image?.asset?.metadata?.dimensions?.width}
                                        alt={logo?.image?.alt_text || ""}
                                        loading="eager"
                                    />
                                </div>
                            )
                        })}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}