import React from "react";
import AssetHandler from "../elements/AssetHandler";

const FullWidthAsset = ({ assetOptions }) => {

    return (
        <div>
            <AssetHandler {...assetOptions} />
        </div>
    )
}

export default FullWidthAsset;