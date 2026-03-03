import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    timeline: z.string(),
    tools: z.array(z.string()),
    tags: z.array(z.string()),
    coverImage: z.string().optional(),
    coverColor: z.string().optional(), // fallback gradient if no image
    status: z.enum(['published', 'coming-soon']),
    order: z.number().optional(), // for controlling display order
  }),
});

export const collections = { 'case-studies': caseStudies };
