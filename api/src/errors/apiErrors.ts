export class apiErrors {
  code: any;
  message: string;

  constructor(code: any, message: string) {
    this.code = code;
    this.message = message;
  }

  static badRequest(msg: string) {
    return new apiErrors(400, msg);
  }

  static unauthorized(msg: string) {
    return new apiErrors(401, msg);
  }

  static forbidden(msg: string) {
    return new apiErrors(403, msg);
  }

  static notFound(msg: string) {
    return new apiErrors(404, msg);
  }

  static internal(msg: string) {
    return new apiErrors(500, msg);
  }

  static serviceUnavaible(msg: string) {
    return new apiErrors(503, msg);
  }

  static gatewayTimeOut(msg: string) {
    return new apiErrors(504, msg);
  }
}
