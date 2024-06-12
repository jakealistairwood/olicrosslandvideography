"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { urlForImage } from "@/sanity/lib/image";

import PortfolioMasthead from "@/components/mastheads/PortfolioMasthead";

const PortfolioWrapper = ({ portfolio, categories }) => {
    const [activeCategory, setActiveCategory] = useState("All");
    return (
        <>
            <PortfolioMasthead activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={categories} />
            {portfolio && portfolio.length > 0 && <PortfolioGallery portfolio={portfolio} />}
        </>
    )
}

export default PortfolioWrapper;

const PortfolioGallery = ({ portfolio }) => {
    return (
        <div className="container grid grid-cols-3 gap-x-5 gap-y-20 mt-20">
            {portfolio?.map((project, i) => (
                <ProjectCard key={`project-card-${i}`} {...project} />
            ))}
        </div>
    )
}

const ProjectCard = ({ slug, featured_image, category, title }) => {
    return (
        <Link href={`/portfolio/${slug.current}`}>
            <div className="flex flex-col">
                <div className="aspect-[16/9] relative w-full">
                    <Image src={urlForImage(featured_image?.asset)} alt={featured_image?.alt_text || ""} fill className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col mt-5 gap-y-1">
                    <span className="font-heading uppercase tracking-[0.24em] text-accent text-xs">{category?.category_name}</span>
                    <h3 className="font-heading uppercase tracking-[0.18em] text-white-80 font-light text-xl">{title}</h3>
                </div>
            </div>
        </Link>
    )
}