import { Router } from "express";
import * as photos from "@controllers/photos.controllers";

const router = Router();

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
router.get("/photos", photos.index);

router.post("/photos");

router.get("/photos/:id", photos.show);

router.put("/photos/:id", (req, res, next) => {
  res.status(200).json({ message: "photos" });
});

router.delete("/photos/:id", (req, res, next) => {
  res.status(200).json({ message: "photos" });
});

export default router;
