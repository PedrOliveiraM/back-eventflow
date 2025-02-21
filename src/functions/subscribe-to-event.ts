import { eq } from 'drizzle-orm'
import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscriptions'
import { redis } from '../redis/client'

interface SubscriberToEventParams {
  name: string
  email: string
  reffererId?: string | null
}

export async function subscribeToEvent({
  name,
  email,
  reffererId,
}: SubscriberToEventParams) {
  const subscribers = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.email, email))

  if (subscribers.length > 0) {
    return {
      subscriberId: subscribers[0].id,
    }
  }

  const result = await db
    .insert(subscriptions)
    .values({
      name,
      email,
    })
    .returning()

  if (reffererId) {
    await redis.zincrby('referral:ranking', 1, reffererId)
  }

  const subscriber = result[0]

  return {
    subscriberId: subscriber.id,
  }
}
