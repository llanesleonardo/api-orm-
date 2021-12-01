import { Router } from "express";
import photosRoutes from "@routes/photos.routes";

const router = Router();
router.get("/", (_, res) => res.status(200).json({ message: "ppal" }));
router.use("/api", [photosRoutes]);
export default router;
