# Draft Content Documentation

This website now supports draft functionality for content collections. You can mark any content as a draft by adding `draft: true` to the frontmatter, and it will be excluded from the website.

## How to Use

Add the `draft` field to the frontmatter of any markdown file in the following collections:

- `blog`
- `projects` 
- `store`
- `experience`
- `gamedev`

### Example

```markdown
---
title: "My Work in Progress Post"
description: "This post is not ready yet"
pubDate: "2024-01-01"
draft: true
tags: ["example"]
---

# Content here

This post won't appear on the website because `draft: true` is set.
```

## What Gets Filtered

When `draft: true` is set, the content will be excluded from:

- ✅ All listing pages (blog index, projects index, etc.)
- ✅ Individual content pages (the page won't be generated)
- ✅ RSS feeds
- ✅ Tag pages
- ✅ Pagination
- ✅ Homepage recent posts/projects sections

## Implementation

The draft filtering is implemented using a `filterDrafts()` helper function in `src/lib/content-config.ts` that filters out any entries where `data.draft === true`.

All content collection queries throughout the site have been updated to use this filter.

## Development vs Production

Draft content is excluded in both development and production builds. If you want to preview draft content during development, you can temporarily comment out the `filterDrafts()` calls or set `draft: false`.
