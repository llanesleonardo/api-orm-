import { Router } from "express";
import * as photosController from "@controllers/photos.controllers";

const router = Router();

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */

/**
 * @param  {} "/photos"
 * @param  {} photosController.index calling the index function in the photosController file (fetch all documents)
 */
router.get("/photos", photosController.index);
/**
 * @param  {} "/photos"
 * @param  {} photosController.store calling the store function in the photosController file (save a document)
 */
router.post("/photos", photosController.store);
/**
 * @param  {id"} "/photos/
 * @param  {} photosController.show calling the show function in the photosController file (fetch a document)
 */
router.get("/photos/:id", photosController.show);
/**
 * @param  {id"} "/photos/
 * @param  {} photosController.update calling the update function in the photosController file (update a document)
 */
router.put("/photos/:id", photosController.update);
/**
 * @param  {id"} "/photos/
 * @param  {} photosController.destroy calling the destroy function in the photosController file (destroy a document)
 */
router.delete("/photos/:id", photosController.destroy);

export default router;
