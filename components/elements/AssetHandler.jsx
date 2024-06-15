import React from "react";
import Video from "./components/Video";
import ImageWrapper from "./components/ImageWrapper";

const AssetHandler = ({ assetType = "", video, image, aboveTheFold = false }) => {
    
    return (
        <>
            {assetType === "video" ? <Video {...video} /> : <ImageWrapper {...image} priority={aboveTheFold} />}
        </>
    )
}

export default AssetHandler;