export const textImageMarquee = {
    name: "textImageMarquee",
    title: "Text Image Marquee",
    type: "object",
    fields: [
        {
            name: "marquee_items",
            type: "array",
            title: "Marquee Items",
            of: [
                {
                    name: "item",
                    type: "object",
                    title: "Item",
                    fields: [
                        {
                            name: "text",
                            type: "string",
                            title: "Text",
                        },
                        {
                            name: "image",
                            type: "image",
                            title: "Image",
                        }
                    ]
                },
            ]
        }
    ]
}