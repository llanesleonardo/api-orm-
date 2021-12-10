import apiErrors from "../errors/apiErrors";
import { responseFormat } from "../helpers/responseHelper";

export function errorHandler(err, req, res, next) {
  if (err instanceof apiErrors) {
    const response = responseFormat(
      err.code,
      err.data,
      err.message,
      err.method,
      err.path,
      err.body
    );
    res.status(err.code).json(response);

    return;
  }
  res.status(500).send("Something broke!");
}
