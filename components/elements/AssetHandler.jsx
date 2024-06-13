import React from "react";
import Video from "./components/Video";
import ImageWrapper from "./components/ImageWrapper";

const AssetHandler = ({ assetType = "", video, image }) => {
    
    return (
        <>
            {assetType === "video" ? <Video {...video} /> : <ImageWrapper {...image} />}
        </>
    )
}

export default AssetHandler;