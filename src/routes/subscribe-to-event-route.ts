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
        description: 'Subscribe to an event',
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          refferer: z.string().nullish(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email, refferer } = request.body

      const { subscriberId } = await subscribeToEvent({ name, email, refferer })

      return reply.status(201).send({ subscriberId })
    }
  )
}
