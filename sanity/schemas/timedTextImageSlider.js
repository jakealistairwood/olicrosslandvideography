export const timedTextImageSlider = {
    name: "timedTextImageSlider",
    title: "Timed Text Image Slider",
    type: "object",
    fields: [
        {
            name: "slider_items",
            title: "Slider Items",
            type: "array",
            of: [
                {
                    name: "item",
                    title: "Item",
                    type: "object",
                    fields: [
                        {
                            name: "heading",
                            title: "Heading",
                            type: "string",
                        },
                        {
                            name: "description",
                            title: "Description",
                            type: "text",
                        },
                        {
                            name: "image",
                            title: "Image",
                            type: "image",
                        }
                    ]
                }
            ]
        }
    ]
}