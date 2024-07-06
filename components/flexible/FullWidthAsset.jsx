import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"
import AssetHandler from "../elements/AssetHandler";
import { imageMaskAnimation } from "@/utils/animations";

const FullWidthAsset = ({ assetOptions, is_page_divider }) => {
    const assetRef = useRef(null);

    const isInView = useInView(assetRef, {
        amount: 0.2,
        once: true,
    })

    const assetAnimation = {
        initial: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1],
            }
        }
    }

    return (
        <motion.div variants={assetAnimation} initial="initial" animate={isInView ? "animate" : "initial"} className={`${is_page_divider ? "min-h-[50vh] lg:min-h-[90vh] relative" : "max-w-[1180px] mx-auto w-full relative"}`} ref={assetRef}>
            {/* <motion.div variants={imageMaskAnimation} initial="initial" animate={isInView ? "animate" : "initial"} className="absolute inset-0 z-[3] bg-black" style={{ transformOrigin: "bottom center" }} /> */}
            <AssetHandler {...assetOptions} />
        </motion.div>
    )
}

export default FullWidthAsset;