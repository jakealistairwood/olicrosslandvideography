import React, { memo, useRef } from "react";
import ComponentRenderer from "./ComponentRenderer";

const Section = memo((props) => {
    const { components = [], sectionOptions = {} } = props;
    const { remove_container = false, padding_top = "none", padding_bottom = "none", inner_spacing = "regular", background_color = "black" } = sectionOptions;

    const getBackgroundColor = {
        black: "bg-black",
        graphite: "bg-graphite",
    };

    const getInnerSpacing = {
        none: "gap-y-0",
        regular: "gap-y-rg",
    };

    return (
        <section className={`${renderTopPadding(padding_top)} ${renderBottomPadding(padding_bottom)} ${getBackgroundColor[background_color]}`}>
            <div className={`flex flex-col ${getInnerSpacing[inner_spacing]} ${!remove_container ? "container" : ""}`}>
                <ComponentRenderer components={components} />
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