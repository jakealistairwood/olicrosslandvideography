import { defineType } from "sanity";

export const customLink = defineType({
    name: "customLink",
    type: "object",
    title: "Custom Link",
    groups: [
        { name: "content", title: "Content" },
        { name: "settings", title: "Settings" },
    ],
    fields: [
        {
            name: "type",
            type: "string",
            title: "Type",
            options: {
                list: [
                    { title: "Default", value: "default" },
                    { title: "Bordered", value: "bordered" },
                    { title: "Button", value: "button" },
                ]
            },
            group: "settings",
            initialValue: "default",
        },
        {
            name: "include_icon",
            type: "boolean",
            title: "Include Icon",
            group: "settings",
            initialValue: false,
        },
        {
            name: "icon_type",
            type: "string",
            title: "Icon Type",
            group: "settings",
            options: {
                list: [
                    { title: "Play", value: "play" },
                    { title: "Back", value: "back" },
                    { title: "Down", value: "down" },
                ]
            },
            hidden: ({ parent }) => !parent?.include_icon
        },
        {
            name: "reverse_direction",
            type: "boolean",
            title: "Reverse Direction",
            group: "settings",
            initialValue: false,
            hidden: ({ parent }) => !parent?.include_icon,
        },
        {
            name: "center_link",
            type: "boolean",
            title: "Center Link",
            group: "settings",
            initialValue: false,
        },
        {
            name: "url",
            type: "string",
            title: "URL",
            group: "content",
        },
        {
            name: "label",
            type: "string",
            title: "Label",
            group: "content",
        }
    ],
})