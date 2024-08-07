import React from "react";
import { motion } from "framer-motion"

import { textMaskAnimation } from "@/utils/animations";

const PortfolioMasthead = ({ activeCategory, setActiveCategory, categories }) => {

    return (
        <header>
            <div className="container">
                <div className="flex flex-col gap-y-4">
                    <motion.h1 
                        className="font-heading ~text-[3.5rem]/[7.875rem] uppercase leading-[1.1] tracking-[0.04em] text-ice font-medium pt-20"
                        initial="initial"
                        animate="animate"
                        variants={textMaskAnimation(true)}
                    >
                        My Portfolio
                    </motion.h1>
                    {categories && categories.length > 0 && (
                        <motion.div 
                            className="flex items-center gap-x-4 lg:gap-x-8 w-full flex-wrap font-light font-heading text-sm md:text-lg lg:text-2xl uppercase tracking-[0.13em]"
                            initial="initial"
                            animate="animate"
                            variants={textMaskAnimation(true)}
                        >
                            <button key={`project-category-button-${0}`} onClick={() => setActiveCategory(0)} className={`text-left uppercase ${activeCategory === 0 ? "opacity-100" : "opacity-40"} hover:opacity-100 duration-300 ease transition-opacity`} type="button">All</button>
                            {categories?.map((category, i) => (
                                <button key={`project-category-button-${i + 1}`} onClick={() => setActiveCategory(i + 1)} className={`text-left uppercase ${activeCategory === (i + 1) ? "opacity-100" : "opacity-40"} hover:opacity-100 duration-300 ease transition-opacity`} type="button">{category?.category_name}</button>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default PortfolioMasthead;