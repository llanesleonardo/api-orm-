import { Router } from "express";
import photosRoutes from "@routes/photos.routes";
import apiErrors from "./errors/apiErrors";
//import { photoFieldsValidation } from "./validations/photoFieldsValidation";
// create an instance of Router Express
const router = Router();

// send a object if the url is: "for example" -> localhost:4000/"
router.get("/", (_, res) => res.status(200).json({ message: "ppal" }));

// use the photosRoutes if the url is: "for example" -> localhost:4000/api", it can be another route attached to this url like [photosRoutes,albumRoutes]

router.use("/api", [photosRoutes]);
export default router;

/**
 (req, res, next) => {
    console.log("Middleware campos requeridos");
    const { name, description, creation_date, author, camponuevo } = req.body;
    const validate = photoFieldsValidation(
      name,
      description,
      creation_date,
      author,
      camponuevo
    );
    console.log(validate);
    if (validate.length === 0) {
      next();
      return;
    }
    next(apiErrors.badRequest(validate));
    return;
  },
  (req, res, next) => {
    console.log("Middleware 2");

    next();
  },


 */
