import { definePlugin } from "sanity";

import { hashtagType } from "./hashtagType";

export const hashtagsPlugin = definePlugin(() => {
    return {
        name: "sanity-plugin-hashtags",
        schema: {
            types: [hashtagType],
        },
    };
});
