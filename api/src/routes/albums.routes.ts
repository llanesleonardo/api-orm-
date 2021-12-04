import { Router } from "express";
import * as albumsController from "../controllers/albums.controllers";

const router = Router();

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */

/**
 * @param  {} "/photos"
 * @param  {} albumsController.index calling the index function in the photosController file (fetch all documents)
 */
router.get("/albums", albumsController.index);
/**
 * @param  {} "/photos"
 * @param  {} albumsController.store calling the store function in the photosController file (save a document)
 */
router.post("/albums", albumsController.store);
/**
 * @param  {id"} "/photos/
 * @param  {} albumsController.show calling the show function in the photosController file (fetch a document)
 */
router.get("/albums/:id", albumsController.show);
/**
 * @param  {id"} "/photos/
 * @param  {} albumsController.update calling the update function in the photosController file (update a document)
 */
router.put("/albums/:id", albumsController.update);
/**
 * @param  {id"} "/photos/
 * @param  {} albumsController.destroy calling the destroy function in the photosController file (destroy a document)
 */
router.delete("/albums/:id", albumsController.destroy);

export default router;
