import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };
