"use client";

import React from "react";
import dynamic from "next/dynamic";

const AssetHandler = dynamic(() => import("@/components/elements/AssetHandler"));

const ProjectMasthead = ({ title, category, date, featured_image, video_id }) => {

    const getFormattedDate = (projectDate) => {
        const date = new Date(projectDate);
        
        const formatOptions = { month: "short" };
        const month = date.toLocaleString('en-US', formatOptions);

        const year = date.getFullYear().toString().slice(-2);
        const formattedDate = `${month} ${year}`;

        return formattedDate;
    }

    const formattedDate = getFormattedDate(date);

    return (
        <header className="flex flex-col">
            <h1 className="font-heading text-[7.875rem] uppercase tracking-[0.04em] leading-[1] text-ice font-medium pt-20 text-balance">{title}</h1>
            <div className="flex justify-between items-center mt-10">
                <h4 className="uppercase font-heading text-normal text-accent tracking-[0.24em]">
                    <span className="text-[#535353] mr-4">Category</span>
                    {category?.category_name}
                </h4>
                <h4 className="uppercase font-heading text-normal text-accent tracking-[0.24em]">
                    <span className="text-[#535353] mr-4">Date</span>
                    {formattedDate}
                </h4>
            </div>
            <div className="w-full">
                <ProjectAssetHandler asset={featured_image} video_id={video_id} title={`${title} video`} />
            </div>
        </header>
    )
}

export default ProjectMasthead;

const ProjectAssetHandler = ({ asset, video_id, title }) => {

    const videoIdExists = video_id && video_id.length > 0;

    const assetType = videoIdExists ? "video" : "image";

    const videoOptions = {
        add_thumbnail: true,
        thumbnail: asset,
        title 
    }

    return (
        <div className="aspect-[16/9] w-full mt-14 relative">
            <AssetHandler assetType={assetType} video={videoOptions} image={asset} />
        </div>
    )
}