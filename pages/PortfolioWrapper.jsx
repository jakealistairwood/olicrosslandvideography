"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { urlForImage } from "@/sanity/lib/image";

import PortfolioMasthead from "@/components/mastheads/PortfolioMasthead";
const ProjectCard = dynamic(() => import("@/components/elements/ProjectCard"));

const PortfolioWrapper = ({ portfolio, categories }) => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [filteredProjects, setFilteredProjects] = useState(portfolio);

    useEffect(() => {
        if (activeCategory !== 0) {
            setFilteredProjects(portfolio.filter(project => {
                const projectCategory = project?.category?.category_name.toLowerCase();
                const chosenCategory = categories[activeCategory - 1].category_name.toLowerCase();
                return chosenCategory === projectCategory;
            }))
        } else {
            setFilteredProjects(portfolio);
        }
    }, [activeCategory]);

    return (
        <>
            <PortfolioMasthead activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={categories} />
            {filteredProjects && filteredProjects.length > 0 && <PortfolioGallery portfolio={filteredProjects} />}
        </>
    )
}

export default PortfolioWrapper;

const PortfolioGallery = ({ portfolio }) => {
    return (
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-12 md:gap-y-20 mt-12 md:mt-20 pb-[140px]">
            {portfolio?.map((project, i) => (
                <ProjectCard key={`project-card-${project._id}`} index={i} {...project} />
            ))}
        </div>
    )
}

// const ProjectCard = ({ slug, featured_image, category, title, index }) => {
//     const projectRef = useRef(null);

//     const isInView = useInView(projectRef, {
//         amount: 0.2,
//         once: false,
//     });

//     const fadeInProject = {
//         initial: {
//             opacity: 0,
//             y: 20,
//             filter: "blur(20px)",
//         },
//         animate: {
//             opacity: 1,
//             y: 0,
//             filter: "blur(0px)",
//             transition: (index) => ({
//                 delay: index * 0.2,
//                 duration: 0.5,
//                 ease: "easeOut",
//             }),
//         },
//         exit: {
//             opacity: 0,
//             y: 20,
//             filter: "blur(20px)",
//             transition: {
//                 duration: 0.5,
//                 ease: "easeIn",
//             },
//         }
//     }

//     return (
//         <Link href={`/portfolio/${slug.current}`} ref={projectRef}>
//             <motion.div variants={fadeInProject} initial="initial" animate={isInView ? "animate" : "initial"} custom={index} className="flex flex-col">
//                 <div className="aspect-[16/9] relative w-full">
//                     <Image src={urlForImage(featured_image?.asset)} alt={featured_image?.alt_text || ""} fill className="w-full h-full object-cover" />
//                 </div>
//                 <div className="flex flex-col mt-5 gap-y-1">
//                     <span className="font-heading uppercase tracking-[0.24em] text-accent text-xs">{category?.category_name}</span>
//                     <h3 className="font-heading uppercase tracking-[0.18em] text-white-80 font-light text-xl">{title}</h3>
//                 </div>
//             </motion.div>
//         </Link>
//     )
// }