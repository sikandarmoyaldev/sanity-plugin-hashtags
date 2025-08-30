# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Add support for configurable regex rules for hashtags.
- Add option to enforce lowercase hashtags.
- Add support for localized hashtag field descriptions.

## [1.0.0] - 2025-08-29

### Added

- Initial release of `sanity-plugin-hashtags`.
- Provides a custom `type: "hashtag"` field for Sanity Studio.
- Built-in validation for:
    - Hashtags must start with `#`.
    - Prevent empty or double `##`.
    - Max length per hashtag (default 30).
    - Max number of hashtags (default unlimited).
    - Configurable `allowSpaces` option.
- Easy to import and use in Sanity schemas.
