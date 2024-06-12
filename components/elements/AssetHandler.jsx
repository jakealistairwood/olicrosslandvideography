import React from "react";
import Video from "./components/Video";

const AssetHandler = ({ assetType = "", video, image }) => {
    
    return (
        <>
            {assetType === "video" && <Video {...video} />}
        </>
    )
}

export default AssetHandler;