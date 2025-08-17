// Adapted from https://equk.co.uk/2023/02/02/generating-slug-from-title-in-astro/

import { GENERATE_SLUG_FROM_TITLE } from '../config'

export default function (title: string | undefined | null, staticSlug: string) {
  // Fallback if title missing or not a usable string
  if (!GENERATE_SLUG_FROM_TITLE) return staticSlug;
  if (typeof title !== 'string') return staticSlug;
  const t = title.trim();
  if (!t) return staticSlug;
  return (
    t
      // output lowercase
      .toLowerCase()
      // replace spaces
      .replace(/\s+/g, '-')
      // remove special characters
      .replace(/[^\w-]/g, '')
      // remove leading & trailing separtors
      .replace(/^-+|-+$/g, '')
  )
}
