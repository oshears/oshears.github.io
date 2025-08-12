
import { z, defineCollection } from 'astro:content';

// Example schema for images collection (customize as needed)
const images = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
  })
});

// Service & Community Engagement collection
const service = defineCollection({
  schema: z.object({
    title: z.string(),
  })
});

export const collections = {
  images,
  service,
};
