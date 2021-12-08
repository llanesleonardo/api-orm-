import { body, check } from "express-validator";

export const PostValidationPhotos = [
  body("name")
    .exists()
    .withMessage("No existe el campo en la petición")
    .toLowerCase()
    .withMessage("El campo se sanitizo convirtiendo el valor a MAYUSCULAS"),
  body("description").exists(),
  check("description")
    .isIn(["des", "ererer"])
    .withMessage("No es el valor solicitado en este campo"),
  check("description")
    .notEmpty()
    .withMessage("El valor de este campo no debe estar vacio"),
  body("creation_date").exists().isString().withMessage("No es un string"),
  body("author")
    .exists()
    .replace("sdsd", "davinci")
    .withMessage("Se remplazo el valor del campo por DaVinci"),
  body("camponuevo").exists(),
  body("correodelauthor")
    .isEmail()
    .withMessage("El valor proporcionado no es un correo"),
];
//.isArray(2).withMessage("NO es un arreglo")

export const PutValidationPhotos = [
  body("name")
    .exists()
    .withMessage("No existe el campo en la petición")
    .toUpperCase()
    .withMessage("El campo se sanitizo convirtiendo el valor a MINUSCULAS"),
];
//.isArray(2).withMessage("NO es un arreglo")

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
