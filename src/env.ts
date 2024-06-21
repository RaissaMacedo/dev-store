import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
})

const pasrsedEnv = envSchema.safeParse(process.env) // validando se esta seguindo o formato do envSchema

if (!pasrsedEnv.success) {
  console.error(
    'Invalid environment variables',
    pasrsedEnv.error.flatten().fieldErrors,
  )

  throw new Error('Invalid environment variables.')
}
export const env = pasrsedEnv.data

// as variaveis de ambiente ficam em process.env
