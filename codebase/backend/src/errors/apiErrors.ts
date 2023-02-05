export class ApiErrors extends Error {
  code: number;
  message: string;

  constructor (code: number, message: string) {
    super();
    this.code = code;
    this.message = message;
  }

  static badRequest(message: string) {
    return new ApiErrors(400, message);
  }

  static unauthorized(message: string) {
    return new ApiErrors(401, message);
  }

  static internalServerError(message: string) {
    return new ApiErrors(500, message);
  }
}