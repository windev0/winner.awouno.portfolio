import { z } from 'zod';
import { insertProfileSchema, insertSkillSchema, insertExperienceSchema, insertProjectSchema, insertAccomplishmentSchema } from './schema';

export const api = {
  profile: {
    get: {
      method: 'GET' as const,
      path: '/api/profile',
      responses: {
        200: insertProfileSchema,
      },
    },
  },
  skills: {
    list: {
      method: 'GET' as const,
      path: '/api/skills',
      responses: {
        200: z.array(insertSkillSchema.extend({ id: z.number() })),
      },
    },
  },
  experiences: {
    list: {
      method: 'GET' as const,
      path: '/api/experiences',
      responses: {
        200: z.array(insertExperienceSchema.extend({ id: z.number() })),
      },
    },
  },
  projects: {
    list: {
      method: 'GET' as const,
      path: '/api/projects',
      responses: {
        200: z.array(insertProjectSchema.extend({ id: z.number() })),
      },
    },
  },
  accomplishments: {
    list: {
      method: 'GET' as const,
      path: '/api/accomplishments',
      responses: {
        200: z.array(insertAccomplishmentSchema.extend({ id: z.number() })),
      },
    },
  },
  contact: {
    send: {
      method: 'POST' as const,
      path: '/api/contact',
      input: z.object({
        name: z.string(),
        email: z.string().email(),
        message: z.string(),
      }),
      responses: {
        200: z.object({ success: z.boolean(), message: z.string() }),
      },
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
