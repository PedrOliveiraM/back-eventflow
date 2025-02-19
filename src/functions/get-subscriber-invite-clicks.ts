import { redis } from '../redis/client'

interface SubscriberInivteClicksParams {
  subscriberId: string
}

export async function getSubscriberInviteClicks({
  subscriberId,
}: SubscriberInivteClicksParams) {
  const count = await redis.hget('referral:access-count', subscriberId)

  return {
    count: count ? Number.parseInt(count) : 0,
  }
}
