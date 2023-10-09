import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333),
  DATABASE_EMAIL: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_SERVICE: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('❌ invalid environment variables! ❌', _env.error.format())
  throw new Error('invalid environment variables!')
}

export const env = _env.data
