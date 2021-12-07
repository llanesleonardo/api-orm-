import { body } from "express-validator";

export const arrayFuction = [
  body("name", "Photo name does not exists")
    .exists()
    .withMessage('"Photo name does not exists"'),
  body("description", "Photo description does not exists")
    .exists()
    .withMessage('"Photo description does not exists"'),
  body("creation_date", "Photo creation_date doesnt exists")
    .exists()
    .withMessage('"Photo creation_date doesnt exists"'),
  body("author", "Photo author does not exists")
    .exists()
    .withMessage('"Photo author does not exists"'),
  body("camponuevo", "Photo camponuevo does not exists")
    .exists()
    .withMessage('"Photo camponuevo does not exists"'),
];

export const validate = (req) => {
  switch (req.method) {
    case "PUT": {
      return [
        body("name", "Photo name does not exists").exists(),
        body("description", "Photo description does not exists").exists(),
        body("creation_date", "Photo creation_date doesnt exists").exists(),
        body("author", "Photo author does not exists").exists(),
        body("camponuevo", "Photo camponuevo does not exists").exists(),
      ];
    }
    case "POST": {
      return [
        body("name", "Photo name does not exists").exists(),
        body("description", "Photo description does not exists").exists(),
        body("creation_date", "Photo creation_date doesnt exists").exists(),
        body("author", "Photo author does not exists").exists(),
        body("camponuevo", "Photo camponuevo does not exists").exists(),
      ];
    }
  }
};
