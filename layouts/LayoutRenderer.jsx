"use client";

import Section from "./Section";

const LayoutRenderer = ({ page, ID, portfolio }) => {
    console.log(page);
    if (!page?.sections) return null;

    return page?.sections?.map((section, index) => <Section key={section?._key} {...section} pageId={ID} portfolio={portfolio} /> )
}

export default LayoutRenderer;