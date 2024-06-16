export const threeColGrid = {
    name: "threeColGrid",
    title: "Three Column Grid",
    type: "object",
    fields: [
        {
            name: "columns",
            title: "Columns",
            type: "array",
            of: [
                {
                    name: "column",
                    type: "object",
                    title: "Column",
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
                        }
                    ]
                }
            ]
        },
    ]
}