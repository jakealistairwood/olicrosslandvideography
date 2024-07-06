import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { PortableText } from "next-sanity";

const AssetHandler = dynamic(() => import("@/components/elements/AssetHandler"));

import { motion, useInView } from "framer-motion";
import { imageMaskAnimation } from "@/utils/animations";

const AboutMasthead = ({ 
    heading = "", 
    include_contact_details = false,
    about_me = {},
    contactDetails = {},
    masthead_image
}) => {
    const { contactDetails: nestedContactDetails = {} } = contactDetails;
    const { email_address, location } = nestedContactDetails;
    const { aspect_ratio, image, add_grayscale } = masthead_image;
    const { header, content } = about_me;

    const [domLoaded, setDomLoaded] = useState(false);

    const articleHasContent = content && content?.length > 0;

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <>
            <header className="flex flex-col">
                <h1 className="font-heading ~text-[5.5rem]/[7.875rem] uppercase tracking-[0.04em] leading-[1] text-ice font-medium pt-20 text-balance">{heading}</h1>
                {include_contact_details && (
                    <div className="flex flex-col items-start gap-y-6 sm:flex-row sm:justify-between sm:items-center mt-10">
                        <h4 className="uppercase flex items-center flex-wrap font-heading text-normal text-accent tracking-[0.24em]">
                            <span className="text-[#535353] mr-4">Email Address</span>
                            {email_address}
                        </h4>
                        <h4 className="uppercase flex items-center flex-wrap font-heading text-normal text-accent tracking-[0.24em]">
                            <span className="text-[#535353] mr-4">Location</span>
                            {location}
                        </h4>
                </div>
                )}
                {image?.asset && (
                    <div className="w-full relative">
                        <motion.div variants={imageMaskAnimation} initial="initial" animate={domLoaded ? "animate" : "initial"} className="absolute inset-0 z-[3] bg-black" style={{ transformOrigin: "bottom center" }} />
                        <MastheadAssetHandler asset={image} aspect_ratio={aspect_ratio} video_id={null} add_grayscale={add_grayscale} aboveTheFold />
                    </div>
                )}
            </header>
            {articleHasContent && <AboutMeArticle header={header} content={content} />}
        </>
    )
}

export default AboutMasthead;

const MastheadAssetHandler = ({ asset, aspect_ratio, video_id, title, add_grayscale }) => {

    console.log(asset);

    const videoIdExists = video_id && video_id.length > 0;

    const assetType = videoIdExists ? "video" : "image";

    const videoOptions = {
        add_thumbnail: true,
        thumbnail: asset,
        title 
    }

    const getAspectRatio = {
        "16:9": "aspect-[16/9]",
        "3:1": "aspect-[3/1]",
        "3:2": "aspect-[3/2]",
        "4:3": "aspect-[4/3]",
    }

    return (
        <div className={`${assetType === "image" ? getAspectRatio[aspect_ratio] : "aspect-[16/9]"} ${add_grayscale ? "grayscale" : "grayscale-0"} w-full mt-14 relative`}>
            <AssetHandler assetType={assetType} video={videoOptions} image={asset} aboveTheFold />
        </div>
    )
}

const AboutMeArticle = ({ header, content }) => {
    const headerRef = useRef(null);
    const articleRef = useRef(null);

    const headerInView = useInView(headerRef, {
        amount: 0.2,
        once: true,
    })

    const articleInView = useInView(articleRef, {
        amount: 0.2,
        once: true,
    })

    const fadeInAndUp = {
        initial: {
            opacity: 0,
            y: 20,
        },
        animate: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                ease: [0.23, 1, 0.32, 1],
            }
        })
    }

    return (
        <article className="max-w-[780px] w-full flex flex-col pb-[140px]">
            {header && header.length > 0 && (
                <motion.header ref={headerRef} variants={fadeInAndUp} initial="initial" animate={headerInView ? "animate" : "initial"}>
                    <h3 className="~text-[1.5rem]/[2.5rem] tracking-[0.02em] font-light leading-[1.3] text-balance">{header}</h3>
                </motion.header>
            )}
            <motion.div ref={articleRef} variants={fadeInAndUp} initial="initial" animate={articleInView ? "animate" : "initial"} className="prose max-w-[unset] prose--dark ~mt-[2.5rem]/[4rem]">
                <PortableText value={content} />
            </motion.div>
        </article>
    )
}