import { validationResult } from "express-validator";
import { responseFormat } from "../helpers/responseHelper";

export function errorsValidation(err, req, res, next) {
  const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
  console.log(errors);
  if (!errors.isEmpty()) {
    const response = responseFormat(
      400,
      { errors: errors.array() },
      "Los datos son erroneos"
    );

    return res.status(400).json(response);
  }

  next();
}
