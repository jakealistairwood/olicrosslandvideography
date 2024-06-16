import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const AnimatedNavLink = ({ url, label }) => {
    const [hovered, setHovered] = useState(false);

    const topLineAnimation = {
        initial: {
            y: "0",
            filter: "blur(0px)",
        },
        animate: (i) => ({
            filter: blur("12px"),
            y: "-100%",
            transition: {
                ease: "easeIn",
                delay: i * 0.02,
                duration: 0.2,
            }
        })
    }
    const bottomLineAnimation = {
        initial: {
            y: "0%",
            filter: "blur(12px)",
        },
        animate: (i) => ({
            y: "-100%",
            filter: "blur(0px)",
            transition: {
                ease: "easeIn",
                delay: i * 0.02,
                duration: 0.2,
            }
        })
    }
    
    return (
        <Link href={url || ""} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="block relative overflow-hidden h-[1.5em]">
            <div className="flex items-center">
                {label.split("").map((char, i) => (
                    <motion.div key={`letter-${i}`} variants={topLineAnimation} initial="initial" custom={i} animate={hovered ? "animate" : "initial"} className="">{char}</motion.div>
                ))}
            </div>
            <div className="flex items-center">
                {label.split("").map((char, i) => (
                    <motion.div key={`letter-${i}`} variants={bottomLineAnimation} initial="initial" custom={i} animate={hovered ? "animate" : "initial"} className="">{char}</motion.div>
                ))}
            </div>
        </Link>
    )
}

export default AnimatedNavLink;