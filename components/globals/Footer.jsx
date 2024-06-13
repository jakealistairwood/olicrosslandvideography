import React from "react";
import FooterWrapper from "./FooterWrapper";
import { fetchSiteSettings } from "@/sanity/api";

const Footer = async () => {
    const settings = await fetchSiteSettings();

    return (
        <footer>
            <div className="container">
                <FooterWrapper {...settings} />
            </div>
        </footer>
    )
}

export default Footer;