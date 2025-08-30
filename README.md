# sanity-plugin-hashtags

A simple **Sanity Studio v3 plugin** that adds a custom `hashtag` field type with built-in validation.

It ensures hashtags follow rules like `#example` `#NextJS` `#SanityCMS`, with options to configure max length, max tags, and spacing behavior.

## Features

- ✅ Custom `type: "hashtag"` field for Sanity schemas
- ✅ Built-in validation (no need to re-import validation manually)
- ✅ Configurable options:
    - `maxTags` → limit number of hashtags (default: ∞)
    - `maxLength` → limit length of each hashtag (default: 30)
    - `allowSpaces` → allow/disallow spaces inside hashtags (default: false)
- ✅ Error messages for invalid hashtags (`empty`, `double ##`, `no #`, etc.)

## Installation

```bash
npm install sanity-plugin-hashtags
# or
yarn add sanity-plugin-hashtags
# or
pnpm add sanity-plugin-hashtags
```

## Usage

Add the plugin to your Sanity config (`sanity.config.ts`):

```ts
import { defineConfig } from "sanity";
import { hashtagsPlugin } from "sanity-plugin-hashtags";

export default defineConfig({
  name: "default",
  title: "My Sanity Project",
  plugins: [hashtagsPlugin()],
});
```

Use the field in your schema:

```ts
import { defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "description", type: "text" },
    { name: "hashtags", type: "hashtags", title: "Hashtags" }, // 👈 new field
  ],
});
```

## Example

Valid input:

```bash
#NextJS #SanityCMS #OpenSource
```

Invalid input will show errors, e.g.:

- ❌ `hello` → must start with `#`.
- ❌ `#` → cannot be empty.
- ❌ `#two#words` → must be separated by space.

## Contributing

Want to contribute to this project? Awesome! 🎉

Please read our [Contributing Guide](CONTRIBUTING.md) for details on how to get started, development setup, coding guidelines, and the release process.
