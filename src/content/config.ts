import { z, defineCollection } from "astro:content";
const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
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
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;

const cvSchema = z.object({
    title: z.string(),
    profile: z.string(),
    education: z.array(z.object({
        title: z.string(),
        subtitle: z.string(),
    })),
    experience: z.array(z.object({
        title: z.string(),
        subtitle: z.string(),
        details: z.string(),
    })),
    certifications: z.array(z.object({
        name: z.string(),
        url: z.string(),
    })),
    skills: z.array(z.string()),
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
    projects: z.array(z.object({
        title: z.string(),
        img: z.string(),
        desc: z.string(),
        url: z.string(),
        badge: z.string().optional(),
    })),
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
    sections: z.array(z.object({
        header: z.string(),
        projects: z.array(z.object({
            title: z.string(),
            img: z.string(),
            desc: z.string(),
            url: z.string(),
            badge: z.string().optional(),
        })),
    })),
});

export type ProjectsSchema = z.infer<typeof projectsSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const cvCollection = defineCollection({ schema: cvSchema });
const indexCollection = defineCollection({ schema: indexSchema });
const notFoundCollection = defineCollection({ schema: notFoundSchema });
const servicesCollection = defineCollection({ schema: servicesSchema });
const projectsCollection = defineCollection({ schema: projectsSchema });

export const collections = {
    'blog': blogCollection,
    'store': storeCollection,
    'cv': cvCollection,
    'index': indexCollection,
    '404': notFoundCollection,
    'services': servicesCollection,
    'projects': projectsCollection,
}