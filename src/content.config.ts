import { z, defineCollection } from 'astro:content';

// Example schema for images collection (customize as needed)
const images = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
  })
});

export const collections = {
  images,
};
