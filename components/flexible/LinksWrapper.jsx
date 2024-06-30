import React from "react"
import CustomLink from "./CustomLink"

const LinksWrapper = ({ links }) => {
    const hasLinks = links && links.length > 0;
    return hasLinks && (
        <div className="flex flex-col sm:flex-row items-center w-fit justify-center mx-auto gap-x-10 gap-y-6">
            {links?.map((link, i) => (
                <CustomLink key={`custom-link-${link?._key}`} {...link} />
            ))}
        </div>
    )
}

export default LinksWrapper