import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getSubscriberInvitesCount } from '../functions/get-subscriber-invite-count'

export const getSubscriberInviteCountRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberId/ranking/count',
      {
        schema: {
          summary: 'Get the number of invited subscribers',
          operationId: 'getSubscriberInviteCount',
          tags: ['referral'],
          description:
            'this route will recive the number of invites by a subscriberID',
          params: z.object({
            subscriberId: z.string(),
          }),
          response: {
            200: z.object({
              count: z.number(),
            }),
          },
        },
      },
      async request => {
        const { subscriberId } = request.params

        const { count } = await getSubscriberInvitesCount({ subscriberId })

        return { count }
      }
    )
  }
