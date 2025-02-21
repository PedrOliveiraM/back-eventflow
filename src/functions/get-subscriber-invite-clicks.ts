import { redis } from '../redis/client'

interface SubscriberInivteClicksParams {
  subscriberId: string
}
// quantas vezes o usuário clicou no link de indicação
export async function getSubscriberInviteClicks({
  subscriberId,
}: SubscriberInivteClicksParams) {
  const count = await redis.hget('referral:access-count', subscriberId)
  // { subscriberId: '123' , value: 1 } , o redis { chave - valor }

  return {
    count: count ? Number.parseInt(count) : 0,
  }
}
