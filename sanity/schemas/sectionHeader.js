import { defineType } from "sanity";

export const sectionHeader = defineType({
    name: "sectionHeader",
    title: "Section Header",
    type: "object",
    fields: [
        {
            name: "subheading",
            title: "Subheading",
            type: "string",
        },
        {
            name: "heading",
            title: "Heading",
            type: "string",
        },
        {
            name: "options",
            title: "Options",
            type: "object",
            fields: [
                {
                    name: "text_align",
                    type: "string",
                    title: "Text align",
                    options: {
                        list: [
                            { title: "Choose alignment", value: "" },
                            { title: "Left Align", value: "left" },
                            { title: "Center Align", value: "center" },
                            { title: "Right Align", value: "right" }
                        ]
                    },
                    initialValue: "center",
                },
                {
                    name: "headingTextOptions",
                    type: "object",
                    title: "Heading Text Options",
                    fields: [
                        {
                            name: "font_size",
                            type: "string",
                            title: "Font Size",
                            options: {
                                list: [
                                    { title: "40", value: "40" },
                                    { title: "80", value: "80" },
                                ]
                            },
                            initialValue: "80",
                        },
                        {
                            name: "font_weight",
                            type: "string",
                            title: "Font Weight",
                            options: {
                                list: [
                                    { title: "Light", value: "300" },
                                    { title: "Medium", value: "500" },
                                    { title: "Semi Bold", value: "600" },
                                    { title: "Bold", value: "700" }
                                ]
                            },
                            initialValue: "600",
                        },
                        {
                            name: "letter_spacing",
                            type: "string",
                            title: "Letter Spacing",
                            options: {
                                list: [
                                    { title: "Default", value: "default" },
                                    { title: "Stretched", value: "stretched" },
                                ]
                            },
                            initialValue: "default",
                        }
                    ]
                },
                {
                    name: "max_width",
                    type: "string",
                    title: "Max Width",
                }
            ]
        }
    ]
});