import { redis } from '../redis/client'

interface SubscriberInivtesCountParams {
  subscriberId: string
}

export async function getSubscriberInvitesCount({
  subscriberId,
}: SubscriberInivtesCountParams) {
  const count = await redis.zscore('referral:ranking', subscriberId)

  return {
    count: count ? Number.parseInt(count) : 0,
  }
}
