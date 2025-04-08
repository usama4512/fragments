import { z } from 'zod'

export const conversationSchema = z.object({
  response: z.string().describe('Your detailed response to the user query'),
})

export type ConversationSchema = z.infer<typeof conversationSchema>
