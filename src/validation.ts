export interface HashtagValidationOptions {
    maxTags?: number; // default Infinity
    maxLength?: number; // default 30
    allowSpaces?: boolean; // allow hashtags without space between them (#one#two)
}

export const defaultOptions: Required<HashtagValidationOptions> = {
    maxLength: 30,
    maxTags: Infinity,
    allowSpaces: false,
};

export const validateHashtags = (
    value: string | undefined,
    providedOptions: HashtagValidationOptions = {},
) => {
    // Merge provided options with defaults
    const options = { ...defaultOptions, ...providedOptions };

    if (!value) return true;

    // If allowSpaces = false → must split hashtags by spaces
    const hashtags = options.allowSpaces
        ? value.match(/#\w+/g) || [] // collect all hashtags stuck together or spaced
        : value.trim().split(/\s+/);

    // Max tags validation
    if (hashtags.length > options.maxTags) {
        return `You can only add up to ${options.maxTags} hashtags.`;
    }

    // If spaces required, check that no stuck hashtags exist (#one#two)
    if (!options.allowSpaces && /#\w+#/.test(value)) {
        return "Hashtags must be separated by spaces.";
    }

    for (const tag of hashtags) {
        if (!tag.startsWith("#")) {
            return "Each hashtag must start with #.";
        }

        if (tag === "#") {
            return "Hashtag cannot be empty (# by itself is invalid).";
        }

        if (/^##/.test(tag)) {
            return "Hashtags cannot start with double ##.";
        }

        if (tag.length > options.maxLength) {
            return `Each hashtag must be less than ${options.maxLength} characters.`;
        }
    }

    return true;
};
