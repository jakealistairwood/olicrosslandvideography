import React, { memo, useRef } from "react";
import ComponentRenderer from "./ComponentRenderer";

const Section = memo((props) => {
    const { components = [], sectionOptions = {}, contactDetails } = props;
    const { remove_container = false, padding_top = "none", padding_bottom = "none", inner_spacing = "regular", background_color = "black", id = "" } = sectionOptions;

    const getBackgroundColor = {
        black: "bg-black",
        graphite: "bg-graphite",
    };

    const getInnerSpacing = {
        none: "gap-y-0",
        small: "gap-y-sm",
        regular: "gap-y-rg",
    };

    return (
        <section id={`${id && id?.length > 0 ? id : ""}`} className={`${renderTopPadding(padding_top)} ${renderBottomPadding(padding_bottom)} ${getBackgroundColor[background_color]}`}>
            <div className={`flex flex-col ${getInnerSpacing[inner_spacing]} ${!remove_container ? "container" : ""}`}>
                <ComponentRenderer components={components} contactDetails={contactDetails} />
            </div>
        </section>
    )
})

export default Section;

const renderTopPadding = (paddingOption) => {
    if (paddingOption === "regular") return "pt-rg";
    return "pt-0";
}

const renderBottomPadding = (paddingOption) => {
    if (paddingOption === "regular") return "pb-rg";
    return "pb-0";
}