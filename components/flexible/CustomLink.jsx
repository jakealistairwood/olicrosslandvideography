import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { topLineAnimation, bottomLineAnimation } from "@/utils/animations";

const CustomLink = ({ 
    type = "", 
    url = "", 
    label = "", 
    include_icon = false,
    icon_type = "play",
    reverse_direction = false,
    center_link = false,
    display_icon_by_default = false,
}) => {
    const [hovered, setHovered] = useState(false);

    const hasUrl = url && url.length > 0;
    const hasLabel = label && label.length > 0;

    const wrapperClasses = [];
    const labelClasses = [];

    const renderIcon = (iconType) => {
        if (iconType === "play") return <PlayIcon />;
        if (iconType === "down") return <DownIcon />;
        return <PlayIcon />;
    }

    if (reverse_direction) wrapperClasses.push("row-reverse");
    if (center_link) wrapperClasses.push("mx-auto");
    if (type === "bordered") {
        wrapperClasses.push("px-5 py-4 border border-white/25 rounded-lg");
        labelClasses.push("font-medium text-sm");
    }
    if (type === "button") {
        wrapperClasses.push("bg-[#262628] px-5 py-4 rounded-lg");
        labelClasses.push("font-medium text-sm");
    }

    const iconAnimation = {
        initial: {
            scale: 0,
            width: "0",
            overflow: "hidden",
        },
        show: {
            scale: 1,
            width: "auto",
            overflow: "visible"
        }
    }

    const maskAnimation = {
        initial: {
            scaleY: "0%",
        },
        hovered: {
            scaleY: "102%",
        }
    }


    return (hasUrl && hasLabel) && (
        <Link 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            className={`flex ${wrapperClasses.join(" ")} items-center gap-x-3 w-fit ${(type === "button" && hovered) ? "text-black" : "text-white"} overflow-hidden relative`} 
            href={url || ""}
        >
            <span className={`font-body relative flex flex-col z-[3] uppercase ${labelClasses.join(" ")} tracking-[0.15em] h-[1.4em] overflow-hidden`}>
                <span className="inline-block relative opacity-0">{label}</span>
                <motion.span variants={topLineAnimation} initial="initial" animate={hovered ? "hovered" : "initial"} className="inline-block absolute left-0">{label}</motion.span>
                <motion.span variants={bottomLineAnimation} initial="initial" animate={hovered ? "hovered" : "initial"} className="inline-block absolute left-0">{label}</motion.span>
            </span>
            {include_icon && (
                <>
                    {display_icon_by_default ? (
                        <div className="flex items-center justify-center relative z-[3]">
                            {renderIcon(icon_type)}
                        </div>
                    ) : (
                        <motion.div variants={iconAnimation} initial="initial" animate={hovered ? "show" : "initial"} className="flex items-center justify-center relative z-[3]">
                            {renderIcon(icon_type)}
                        </motion.div>
                    )}
                </>
            )}
            {type === "button" && (
                <motion.div variants={maskAnimation} initial="initial" animate={hovered ? "hovered" : "initial"} className={`absolute inset-0 origin-bottom ${type === "button" ? "bg-white" : "bg-accent"} w-full h-full`} />
            )}
        </Link>
    )
}

export default CustomLink;


const PlayIcon = () => {
    return (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.75 11L10.25 6.5L2.75 2V11Z" fill="currentColor"/>
        </svg>
    )
}

const DownIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.853 14.159C21.8074 14.1117 21.753 14.0739 21.6928 14.0476C21.6326 14.0214 21.5678 14.0073 21.5022 14.0061C21.4365 14.0049 21.3713 14.0166 21.3102 14.0406C21.2491 14.0646 21.1933 14.1004 21.146 14.146L17 18.293V9.389C16.9987 8.22537 16.5358 7.10978 15.713 6.28697C14.8902 5.46416 13.7746 5.00132 12.611 5H3.5C3.36739 5 3.24021 5.05268 3.14645 5.14645C3.05268 5.24021 3 5.36739 3 5.5C3 5.63261 3.05268 5.75979 3.14645 5.85355C3.24021 5.94732 3.36739 6 3.5 6H12.611C13.5095 6.00106 14.3709 6.35845 15.0062 6.99378C15.6415 7.62912 15.9989 8.49051 16 9.389V18.293L11.853 14.147C11.7587 14.0559 11.6324 14.0055 11.5013 14.0067C11.3702 14.0078 11.2448 14.0604 11.1521 14.1531C11.0594 14.2458 11.0068 14.3712 11.0057 14.5023C11.0045 14.6334 11.0549 14.7597 11.146 14.854L16.146 19.854C16.1925 19.9004 16.2477 19.9372 16.3085 19.9622C16.3692 19.9873 16.4343 20.0001 16.5 20C16.511 20 16.52 19.995 16.53 19.994C16.5858 19.9922 16.6409 19.9811 16.693 19.961C16.7536 19.9357 16.8087 19.8986 16.855 19.852L21.853 14.854C21.9431 14.7608 21.9935 14.6362 21.9935 14.5065C21.9935 14.3768 21.9431 14.2522 21.853 14.159Z" fill="currentColor"/>
        </svg>
    )
}