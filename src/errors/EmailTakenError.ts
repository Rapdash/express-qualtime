import { HttpError } from './HttpError';

export class EmailTakenError extends HttpError {
  constructor(email: string) {
    super(400, `User With email: ${email} already exists`);
  }
}
