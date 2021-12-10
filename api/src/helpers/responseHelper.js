export function responseFormat(code, data, message, method, path, body) {
  // function that return an object with code, data and message
  return { code, data, message, method, path, body }; // return object with values code, data object and message to create a response
}
