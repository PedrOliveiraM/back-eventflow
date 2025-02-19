import { eq } from 'drizzle-orm'
import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscriptions'
import { redis } from '../redis/client'

interface SubscriberToEventParams {
  name: string
  email: string
  refferer?: string | null
}

export async function subscribeToEvent({
  name,
  email,
  refferer,
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

  if (refferer) {
    await redis.zincrby('referral:access-count', 1, refferer)
  }

  const subscriber = result[0]

  return {
    subscriberId: subscriber.id,
  }
}
