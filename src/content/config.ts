import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    bucket: z.enum(['B2B', 'B2C', 'Supporting']),
    tier: z.enum(['flagship', 'supporting']),
    category: z.string(),
    tagline: z.string(),
    lede: z.string(),
    blurb: z.string(),
    order: z.number().default(99),
    glance: z.array(z.object({
      big: z.string(),
      cap: z.string(),
    })).default([]),
    features: z.array(z.object({
      title: z.string(),
      body: z.string(),
    })).default([]),
    howBuy: z.string().optional(),
    repo: z.string().optional(),
    dark: z.boolean().default(false),
    preLaunch: z.boolean().default(false),
    screenshot: z.object({
      src: z.string(),
      alt: z.string(),
      liveUrl: z.string().url(),
    }).optional(),
  }),
});

const legal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lede: z.string(),
    lastUpdated: z.string(),
    order: z.number().default(99),
  }),
});

export const collections = { products, legal };
