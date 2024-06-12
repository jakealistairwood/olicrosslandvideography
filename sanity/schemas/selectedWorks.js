export const selectedWorks = {
    name: "selectedWorks",
    title: "Selected Works",
    type: "object",
    fields: [
        {
            name: "projects",
            title: "Projects",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [
                        { type: "portfolio" }
                    ]
                }
            ]
        }
    ]
}