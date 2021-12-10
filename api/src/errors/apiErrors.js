export default class apiErrors {
  constructor(code, data, message, method, path, body) {
    this.code = code;
    this.data = data;
    this.message = message;
    this.method = method;
    this.path = path;
    this.body = body;
  }

  static badRequest(code, data, msg, method, path, body = {}) {
    return new apiErrors(code, data, msg, method, path, body);
  }

  static unauthorized(code, data, msg, method, path, body = {}) {
    return new apiErrors(code, data, msg, method, path, body);
  }

  static forbidden(code, data, msg, method, path, body = {}) {
    return new apiErrors(code, data, msg, method, path, body);
  }

  static notFound(code, data, msg, method, path, body = {}) {
    return new apiErrors(code, data, msg, method, path, body);
  }

  static internal(code, data, msg, method, path, body = {}) {
    return new apiErrors(code, data, msg, method, path, body);
  }

  static serviceUnavaible(code, data, msg, method, path, body = {}) {
    return new apiErrors(code, data, msg, method, path, body);
  }

  static gatewayTimeOut(code, data, msg, method, path, body = {}) {
    return new apiErrors(code, data, msg, method, path, body);
  }
}
