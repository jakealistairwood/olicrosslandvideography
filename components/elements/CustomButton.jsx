import React, { useState } from "react";
import { motion } from "framer-motion";
import { topLineAnimation, bottomLineAnimation } from "@/utils/animations";

const CustomButton = ({ type = "button", classNames = "", handleButton, label = "", disabled = false }) => {
    const [hovered, setHovered] = useState(false);

    const wrapperClasses = [];
    const labelClasses = [];

    if (type === "button") {
        wrapperClasses.push("bg-[#262628] px-5 py-4 rounded-lg");
        labelClasses.push("font-medium text-sm");
    }

    const maskAnimation = {
        initial: {
            scaleY: "0%",
        },
        hovered: {
            scaleY: "102%",
        }
    }

    return (
        <button
            type={type}
            className={`button w-fit text-xs ml-auto px-6 bg-white text-black font-bold rounded-md py-3 border border-white/20 relative overflow-hidden ${classNames}`}
            onClick={handleButton}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            disabled={disabled}
        >
            <span className={`font-body relative flex flex-col z-[3] uppercase ${labelClasses.join(" ")} tracking-[0.15em] h-[1.4em] overflow-hidden`}>
                <span className="inline-block relative opacity-0">{label}</span>
                <motion.span variants={topLineAnimation} initial="initial" animate={hovered ? "hovered" : "initial"} className="inline-block absolute left-0">{label}</motion.span>
                <motion.span variants={bottomLineAnimation} initial="initial" animate={hovered ? "hovered" : "initial"} className="inline-block absolute left-0">{label}</motion.span>
            </span>
        </button>
    )
}

export default CustomButton;