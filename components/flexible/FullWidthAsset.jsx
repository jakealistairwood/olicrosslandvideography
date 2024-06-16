import React from "react";
import AssetHandler from "../elements/AssetHandler";

const FullWidthAsset = ({ assetOptions, is_page_divider }) => {

    return (
        <div className={`${is_page_divider ? "min-h-[50vh] lg:min-h-[90vh] relative" : ""}`}>
            <AssetHandler {...assetOptions} />
        </div>
    )
}

export default FullWidthAsset;