import { Router } from "express";
import photosRoutes from "@routes/photos.routes";
// create an instance of Router Express
const router = Router();

// send a object if the url is: "for example" -> localhost:4000/"
router.get("/", (_, res) => res.status(200).json({ message: "ppal" }));

// use the photosRoutes if the url is: "for example" -> localhost:4000/api", it can be another route attached to this url like [photosRoutes,albumRoutes]
router.use("/api", [photosRoutes]);
export default router;
