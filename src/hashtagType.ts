import type { StringRule } from "sanity";
import { defineType } from "sanity";

import { validateHashtags } from "./validation";

export const hashtagType = defineType({
    name: "hashtags",
    title: "Hashtags",
    type: "string",
    description:
        "Enter hashtags separated by spaces (e.g. #NextJS #SanityCMS).",
    validation: (rule: StringRule) =>
        rule.custom(value =>
            validateHashtags(value, { maxTags: 10, maxLength: 30 }),
        ),
});
