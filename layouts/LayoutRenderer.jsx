"use client";

import Section from "./Section";

const LayoutRenderer = ({ page, ID, portfolio, contactDetails }) => {
    if (!page?.sections) return null;

    return page?.sections?.map((section, index) => <Section key={section?._key} {...section} pageId={ID} portfolio={portfolio} contactDetails={contactDetails} /> )
}

export default LayoutRenderer;