import z from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  POSTGRES_URL: z
    .string()
    .url()
    .default('postgres://docker:docker@localhost:5432/postgres'),
  REDIS_URL: z.string().url().default('redis://localhost:6379'),
  WEB_URL: z.string().url().default('http://localhost:3000'),
})

export const env = envSchema.parse(process.env)
