import { CreateInvitationUseCase } from "../create-invitation";

export function makeCreateInvitationUseCase() {
  const createInvitationUseCase = new CreateInvitationUseCase();

  return createInvitationUseCase;
}
