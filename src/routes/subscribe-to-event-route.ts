import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { subscribeToEvent } from '../functions/subscribe-to-event'

export const subscriberToEventRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/subscribe-to-event',
    {
      schema: {
        summary: 'Subscribe to event',
        tags: ['subscription'],
        operationId: 'subscribeToEvent',
        description: 'Subscribe to an event',
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          reffererId: z.string().nullish(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email, reffererId } = request.body

      const { subscriberId } = await subscribeToEvent({
        name,
        email,
        reffererId,
      })

      return reply.status(201).send({ subscriberId })
    }
  )
}
