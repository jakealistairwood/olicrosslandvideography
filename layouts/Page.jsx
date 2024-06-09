import React from "react";
import LayoutRenderer from "@/layouts/LayoutRenderer";
import { fetchHomepageData } from "@/sanity/api";

const Page = async () => {
    
    const data = fetchHomepageData();

    return (
        <div>
            <LayoutRenderer page={data} />
        </div>
    )
}

export default Page;