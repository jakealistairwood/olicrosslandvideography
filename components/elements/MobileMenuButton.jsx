"use client";

import { motion } from "framer-motion";

const animateText = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transiton: { duration: 0.3 }
    },
    closed: {
        opacity: 0,
        transition: { duration: 0.3 }
    }
}

function MobileMenuButton({ menuOpen, setMenuOpen }) {
    return (
        <button type="button" className="block lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="flex items-center justify-center gap-2 cursor-pointer">
                <div className="flex items-center relative font-mono uppercase text-sm text-white-80">
                    <motion.span variants={animateText} animate={!menuOpen ? "open" : "closed"} >Menu</motion.span>
                    <motion.span className="absolute left-0" variants={animateText} animate={menuOpen ? "open" : "closed"}>Close</motion.span>
                </div>
            </div>
        </button>
    )
}

export default MobileMenuButton;