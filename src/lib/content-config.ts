const educationSchema = z.object({
    title: z.string(),
    subtitle: z.string(),
    image: z.string().optional(),
});

export type EducationSchema = z.infer<typeof educationSchema>;
const educationCollection = defineCollection({ schema: educationSchema });
import { z, defineCollection } from "astro:content";
const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;

const experienceSchema = z.object({
    title: z.string(),
    company: z.string(),
    location: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    bullets: z.array(z.string()),
    image: z.string().optional(),
    draft: z.boolean().optional(),
});

export type ExperienceSchema = z.infer<typeof experienceSchema>;

const cvSchema = z.object({
    title: z.string(),
    profile: z.string(),
    education: z.array(z.object({
        title: z.string(),
        subtitle: z.string(),
        image: z.string().optional(),
    })),
    // certifications: z.array(z.object({
    //     name: z.string(),
    //     url: z.string(),
    // })),
    skills: z.array(z.string()),
    awards: z.array(z.object({
        title: z.string(),
        year: z.string(),
        description: z.string(),
    })),
});

export type CvSchema = z.infer<typeof cvSchema>;

const indexSchema = z.object({
    greeting: z.string(),
    name: z.string(),
    title: z.string(),
    introduction: z.string(),
    connect_button_text: z.string(),
    connect_button_url: z.string(),
    template_button_text: z.string(),
    template_button_url: z.string(),
    projects_title: z.string(),
    blog_title: z.string(),
});

export type IndexSchema = z.infer<typeof indexSchema>;

const notFoundSchema = z.object({
    title: z.string(),
    emoji: z.string(),
    heading: z.string(),
    subheading: z.string(),
    button_text: z.string(),
    button_url: z.string(),
});

export type NotFoundSchema = z.infer<typeof notFoundSchema>;

const servicesSchema = z.object({
    title: z.string(),
    header: z.string(),
    services: z.array(z.object({
        title: z.string(),
        img: z.string(),
        desc: z.string(),
        badge: z.string().optional(),
        url: z.string(),
    })),
});

export type ServicesSchema = z.infer<typeof servicesSchema>;

const projectsSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
    url: z.string().optional(),
});

export type ProjectsSchema = z.infer<typeof projectsSchema>;

const gamedevSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
    url: z.string().optional(),
});

export type GamedevSchema = z.infer<typeof gamedevSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const cvCollection = defineCollection({ schema: cvSchema });
const indexCollection = defineCollection({ schema: indexSchema });
const notFoundCollection = defineCollection({ schema: notFoundSchema });
const servicesCollection = defineCollection({ schema: servicesSchema });
const projectsCollection = defineCollection({ schema: projectsSchema });
const gamedevCollection = defineCollection({ schema: gamedevSchema });

const experienceCollection = defineCollection({ schema: experienceSchema });

export const collections = {
    'blog': blogCollection,
    'store': storeCollection,
    'cv': cvCollection,
    'index': indexCollection,
    '404': notFoundCollection,
    'services': servicesCollection,
    'projects': projectsCollection,
    'gamedev': gamedevCollection,
    'experience': experienceCollection,
    'education': educationCollection,
}

// Helper function to filter out draft content
export function filterDrafts<T extends { data: { draft?: boolean } }>(entries: T[]): T[] {
    return entries.filter(entry => !entry.data.draft);
}
