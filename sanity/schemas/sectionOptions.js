import { defineType } from "sanity";

export const sectionOptions = defineType({
    name: "sectionOptions",
    title: "Section Options",
    type: "object",
    fields: [
        {
            name: "background_color",
            title: "Background Color",
            type: "string",
            options: {
                list: [
                    { title: "Black", value: "black" },
                    { title: "Graphite", value: "graphite" },
                ]
            },
            initialValue: "black",
        },
        {
            name: "remove_container",
            title: "Remove Container",
            type: "boolean",
        },
        {
            name: "padding_top",
            title: "Padding Top",
            type: "string",
            options: {
                list: [
                    { title: "No Top Padding", value: "none" },
                    { title: "Regular", value: "regular" },
                ]
            },
            initialValue: "none"
        },
        {
            name: "padding_bottom",
            title: "Padding Bottom",
            type: "string",
            options: {
                list: [
                    { title: "No Bottom Padding", value: "none" },
                    { title: "Regular", value: "regular" },
                ]
            },
            initialValue: "none"
        },
        {
            name: "inner_spacing",
            title: "Inner Spacing",
            type: "string",
            options: {
                list: [
                    { title: "None", value: "none" },
                    { title: "Regular", value: "regular" },
                ]
            },
            initialValue: "regular"
        }
    ]
})