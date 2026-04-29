import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    externalUrl: z.string().url().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Data Analysis', 'Data Visualization', 'AI / Automation', 'Software']),
    tools: z.array(z.string()),
    links: z.object({
      github: z.string().optional(),
      tableau: z.string().optional(),
      demo: z.string().optional(),
      live: z.string().optional(),
    }).optional(),
    image: z.string().optional(),
    featured: z.boolean().optional().default(false),
    order: z.number().optional().default(99),
  }),
});

export const collections = { blog, projects };
