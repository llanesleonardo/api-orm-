import apiErrors from "../errors/apiErrors";

export function errorHandler(err, req, res, next) {
  if (err instanceof apiErrors) {
    res.status(err.code).json(err.message);
    return;
  }
  res.status(500).send("Something broke!");
}
