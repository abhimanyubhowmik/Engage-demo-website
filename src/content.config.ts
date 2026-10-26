import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const themeIds = ['perception', 'control', 'safety', 'simulation'] as const;
const industryIds = ['construction', 'forestry', 'agriculture', 'logistics'] as const;

const dcs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/dcs' }),
  schema: z.object({
    number: z.number().int().min(1),
    title: z.string(),
    shortTitle: z.string(),
    name: z.string().optional(),
    photo: z.string().optional(),
    status: z.enum(['active', 'profile-pending']).default('active'),
    host: z.array(z.string()).default([]),
    partners: z.array(z.string()).default([]),
    supervisors: z.array(z.string()).default([]),
    theme: z.enum(themeIds),
    industries: z.array(z.enum(industryIds)).default([]),
    keywords: z.array(z.string()).default([]),
    summary: z.string(),
    question: z.string().optional(),
    background: z.string().optional(),
    project: z.string().optional(),
    cover: z.string().optional(),
    links: z
      .object({
        linkedin: z.string().url().optional(),
        scholar: z.string().url().optional(),
        github: z.string().url().optional(),
        website: z.string().url().optional(),
        email: z.string().email().optional(),
      })
      .optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Event', 'Network', 'Research', 'Announcement', 'Training']),
    excerpt: z.string(),
    cover: z.string(),
    coverAlt: z.string(),
    location: z.string().optional(),
    eventDates: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string(), tall: z.boolean().optional() })).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { dcs, news };
