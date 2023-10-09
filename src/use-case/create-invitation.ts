import { sendEmail } from '@/utils/sendEmail'
import { InvalidCredentialsError } from './erros/invalid-credentials-error'
import { IEventData } from '@/interface/IData'

export class CreateInvitationUseCase {
  async execute(data: IEventData) {
    try {
      const { eventName, dateTime, meetingTime, toEmail, userEmail } = data
      await sendEmail({ userEmail, eventName, toEmail })
    } catch (error) {
      throw new InvalidCredentialsError()
    }
  }
}
