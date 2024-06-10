import React from "react";
import dynamic from "next/dynamic";

import HomeMasthead from "@/components/mastheads/HomeMasthead";
const TextImageMarquee = dynamic(() => import("@/components/marquees/TextImageMarquee"));

const ComponentRenderer = ({ components = [] }) => {

    const renderComponent = (layoutName, props) => {
        const RenderedComponent = {
            homeMasthead: HomeMasthead,
            textImageMarquee: TextImageMarquee
        }[layoutName];

        return RenderedComponent ? <RenderedComponent key={`${props.key}`} {...props} /> : null;
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