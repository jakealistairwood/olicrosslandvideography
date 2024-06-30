import React from "react";

const SectionHeader = ({ subheading = "", heading = "", options }) => {
    const { headingTextOptions, text_align, max_width } = options;

    const headingFontSize = {
        "40": "text-[2.5rem]",
        // "80": "text-[5rem]",
        "80": "text-80",
    }

    const headingFontWeights = {
        "300": "font-light",
        "500": "font-medium",
        "600": "font-semibold",
        "700": "font-bold",
    }

    const getAligmentClasses = {
        "left": "text-left items-start",
        "center": "text-center items-center mx-auto",
        "right": "text-right items-end",
    }

    const getTrackingClass = {
        "default": "tracking-[0.04em] text-ice",
        "stretched": "tracking-[0.18em] text-white",
    }

    const fontSize = headingFontSize[headingTextOptions.font_size];
    const fontWeight = headingFontWeights[headingTextOptions.font_weight];
    const trackingClass = getTrackingClass[headingTextOptions.letter_spacing];

    return (
        <header className={`flex flex-col w-full ${getAligmentClasses[text_align]} gap-y-8`} style={{ maxWidth: `${max_width}px` || "unset" }}>
            {subheading && subheading.length > 0 && <span className="font-heading text-carbon uppercase font-medium tracking-[0.24em] text-sm">{subheading}</span>}
            {heading && heading.length > 0 && <h2 className={`uppercase font-heading leading-[1.1] ${fontSize} ${fontWeight} ${trackingClass}`}>{heading}</h2>}
        </header>
    )
}

export default SectionHeader;