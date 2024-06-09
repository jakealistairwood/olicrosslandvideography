import { defineType } from "sanity";

export const sectionOptions = defineType({
    name: "sectionOptions",
    title: "Section Options",
    type: "object",
    fields: [
        {
            name: "remove_container",
            title: "Remove Container",
            type: "boolean",
        }
    ]
})