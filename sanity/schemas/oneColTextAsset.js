export const oneColTextAsset = {
    name: "oneColTextAsset",
    title: "One Column Text Asset",
    type: "object",
    fields: [
        {
            name: "heading",
            type: "string",
            title: "Heading",
        },
        {
            name: "description",
            type: "text",
            title: "Description",
        },
        {
            name: "asset",
            type: "object",
            title: "Asset",
            fields: [
                {
                    name: "asset_type",
                    title: "Asset Type",
                    type: "string",
                    options: [
                        { name: "image", value: "Image" },
                        { name: "video", value: "Video" },
                    ],
                    initialValue: "image",
                },
                {
                    name: "video",
                    type: "object",
                    title: "Video",
                    fields: [
                        {
                            name: "id",
                            title: "Video ID",
                            type: "string",
                        },
                        {
                            name: "title",
                            title: "Title",
                            type: "string",
                        },
                        {
                            name: "add_thumbnail",
                            title: "Add Thumbnail",
                            type: "boolean",
                        },
                        {
                            name: "thumbnail",
                            title: "Thumbnail",
                            type: "image",
                            hidden: (parent) =>!parent.add_thumbnail
                        }
                    ],
                    hidden: (parent) => parent.asset_type === "video"
                }
            ],
        }
    ]
}