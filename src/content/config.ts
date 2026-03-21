import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Market Brief', 'Deep Dive', 'Chain 101', 'Tutorial', 'Analysis', 'Regulatory Watch', 'Opinion', 'Interview']),
    publishedDate: z.string(),
    status: z.enum(['draft', 'live']).default('draft'),
    author: z.string().optional(),
  }),
});

export const collections = { articles };
