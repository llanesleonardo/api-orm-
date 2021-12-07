export default class apiErrors {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  static badRequest(msg) {
    return new apiErrors(400, msg);
  }

  static unauthorized(msg) {
    return new apiErrors(401, msg);
  }

  static forbidden(msg) {
    return new apiErrors(403, msg);
  }

  static notFound(msg) {
    return new apiErrors(404, msg);
  }

  static internal(msg) {
    return new apiErrors(500, msg);
  }

  static serviceUnavaible(msg) {
    return new apiErrors(503, msg);
  }

  static gatewayTimeOut(msg) {
    return new apiErrors(504, msg);
  }
}
