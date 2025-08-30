## Contributing to sanity-plugin-hashtags

First off, thanks for taking the time to contribute! 🎉

We welcome all improvements — bug fixes, new features, docs, and tests.

## 🚀 How to Contribute

### 1. Fork & Clone

```bash
git clone https://github.com/sikandarmoyaldev/sanity-plugin-hashtags.git
cd sanity-plugin-hashtags
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Create a Branch

Use a meaningful branch name:

```bash
git checkout -b fix/validation-bug
git checkout -b feat/add-emoji-support
```

### 4. Make Your Changes

- Keep code clean and typed (`TypeScript` required).
- Follow existing project style (`Prettier`, `ESLint`).
- Add tests if applicable.
- Update docs (`README.md`, `CHANGELOG.md`) if you change functionality.

### 5. Run Tests / Build

```bash
pnpm build
pnpm lint
```

(If tests are added in future: `pnpm test`)

### 6. Commit Message Guidelines

Use [Conventional Commits](https://www.conventionalcommits.org/?utm_source=chatgpt.com):

- `feat`: → a new feature
- `fix`: → a bug fix
- `docs`: → documentation only changes
- `chore`: → tooling, CI, package updates, etc.

Examples:

```bash
feat: add maxTags option to validation
fix: prevent empty hashtags from passing validation
docs: update README with usage example
```

### 7. Push & PR

```bash
git push origin feat/add-emoji-support
```

Then, open a Pull Request on GitHub with a clear description.

## 🧑‍💻 Development Setup

- `TypeScript` for type safety.
- `Sanity Studio v3` required for testing plugin.
- Recommended: `Node.js v18+`.

## 📦 Project Structure

```bash
sanity-plugin-hashtags/
├── src/
│ ├── index.ts      # Plugin entry point
│ ├── schema.ts     # Defines the custom `hashtags` type
│ ├── validation.ts # Hashtag validation logic
│
├── package.json
├── tsconfig.json
├── README.md
├── CONTRIBUTING.md
├── CHANGELOG.md
└── .gitignore
```

## ✅ Code of Conduct

- We follow the [Contributor Covenant](https://www.contributor-covenant.org/?utm_source=chatgpt.com).
- Be respectful, collaborative, and inclusive.

## 📦 Release Process (Maintainers Only)

- Update `CHANGELOG.md` with the new version changes.
- Bump version in `package.json`:

    ```bash
    pnpm version patch # or minor / major
    ```

- Build package:

    ```bash
    pnpm build
    ```

- Publish to npm:

    ```bash
    pnpm publish --access public
    ```

## 💡 Ideas for Contribution

- Add more hashtag validation options (e.g., `min length`, `regex`).
- Support localized error messages.
- Add `Sanity Studio UI` preview for hashtags.
- Improve test coverage.
