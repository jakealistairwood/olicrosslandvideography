import React from "react";
import NavbarWrapper from "./NavbarWrapper";
import { fetchSiteSettings } from "@/sanity/api";

const Navbar = async () => {
    const settings = await fetchSiteSettings();

    return (
        <>
            <NavbarWrapper settings={settings} />
        </>
    )
}

export default Navbar;