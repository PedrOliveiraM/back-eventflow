import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const subscribeToEventRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/subscribe-to-event',
    {
      schema: {
        summary: 'Subscribe to event',
        tags: ['subscription'],
        description: 'Subscribe to an event',
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          201: z.object({
            name: z.string(),
            email: z.string().email(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email } = request.body
      return { name, email }
    }
  )

  app.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
}
