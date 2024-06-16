import React from "react";
import dynamic from "next/dynamic";

import HomeMasthead from "@/components/mastheads/HomeMasthead";
import AboutMasthead from "@/components/mastheads/AboutMasthead";
const FullWidthAsset = dynamic(() => import("@/components/flexible/FullWidthAsset"));
const TextImageMarquee = dynamic(() => import("@/components/marquees/TextImageMarquee"));
const SectionHeader = dynamic(() => import("@/components/flexible/SectionHeader"));
const CustomLink = dynamic(() => import("@/components/flexible/CustomLink"));
const SelectedWorks = dynamic(() => import("@/components/flexible/SelectedWorks"));
const Introduction = dynamic(() => import("@/components/flexible/Introduction"));
const JobExperiences = dynamic(() => import("@/components/flexible/JobExperiences"));
const TimedTextImageSlider = dynamic(() => import("@/components/flexible/TimedTextImageSlider"));
const ThreeColGrid = dynamic(() => import("@/components/flexible/ThreeColGrid"));

const ComponentRenderer = ({ components = [], contactDetails }) => {

    const renderComponent = (layoutName, props) => {
        const { key, ...otherProps } = props;
        const RenderedComponent = {
            homeMasthead: HomeMasthead,
            aboutMasthead: AboutMasthead,
            textImageMarquee: TextImageMarquee,
            sectionHeader: SectionHeader,
            customLink: CustomLink,
            fullWidthAsset: FullWidthAsset,
            selectedWorks: SelectedWorks,
            introduction: Introduction,
            jobExperiences: JobExperiences,
            timedTextImageSlider: TimedTextImageSlider,
            threeColGrid: ThreeColGrid,
        }[layoutName];

        return RenderedComponent ? <RenderedComponent key={`${key}`} {...otherProps} contactDetails={layoutName === "aboutMasthead" ? contactDetails : null} /> : null;
    }

    return (
        <>
            {components?.map((layout, index) => {
                const layoutName = layout?.component;
                const key = layout?._key;
                return renderComponent(layoutName, { ...layout[layoutName], key, index });
            })}
        </>
    )
}

export default ComponentRenderer;