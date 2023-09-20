import { sendEmail } from "@/utils/sendEmail";
import { InvalidCredentialsError } from "./erros/invalid-credentials-error";
import { IEventData } from "@/interface/IData";

export class CreateInvitationUseCase {
  async execute(data: IEventData) {
    try {
      const {
        eventName,
        dateTime,
        meetingTime,
        descriptionEvent,
        toEmail,
        userEmail,
      } = data;
      await sendEmail({ userEmail, eventName, toEmail, descriptionEvent });
    } catch (error) {
      throw new InvalidCredentialsError();
    }
  }
}
