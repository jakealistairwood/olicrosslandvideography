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