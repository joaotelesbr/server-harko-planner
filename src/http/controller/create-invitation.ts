import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { makeCreateInvitationUseCase } from '@/use-case/factories/make-create-invitation-use-case'
import { InvalidCredentialsError } from '@/use-case/erros/invalid-credentials-error'

export async function invite(request: FastifyRequest, reply: FastifyReply) {
  const inviteBodySchema = z.object({
    eventName: z.string(),
    userEmail: z.string(),
    toEmail: z.string(),
    dateTime: z.string(),
    meetingTime: z.string(),
  })

  try {
    const { eventName, userEmail, toEmail, dateTime, meetingTime } =
      inviteBodySchema.parse(request.body)

    const createInvitationUseCase = makeCreateInvitationUseCase()
    await createInvitationUseCase.execute({
      eventName,
      userEmail,
      toEmail,
      dateTime,
      meetingTime,
    })
    return reply.status(201).send()
  } catch (error) {
    if (error instanceof InvalidCredentialsError)
      return reply.status(409).send({ message: error.message })
    throw error
  }
}
