import { Router } from "express";
import * as photosController from "@controllers/photos.controllers";
import {
  PostValidationPhotos,
  PutValidationPhotos,
  validate,
} from "../validations/photoObjectValidation";
import { errorsValidation } from "../middleware/photoValidation";

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
 * @api {post} /photos call api v1
 * @apiName photosController.store calling the store function in the photosController file (save a document)
 * @apiPermission client
 * @apiGroup ____?
 * This parameters come from destructuring req.body
 * @apiParam  {String} [name] name of the photo
 * @apiParam  {String} [description] description of the photo
 * @apiParam  {String} [creation_date] creation_date of the photo
 * @apiParam  {String} [author] author of the photo
 * @apiSuccess (200) {Object} new `Photo` object
 APISPECS
 */

router.post(
  "/photos",
  PostValidationPhotos,
  errorsValidation,
  photosController.store
);
/**
 * @param  {id"} "/photos/
 * @param  {} photosController.show calling the show function in the photosController file (fetch a document)
 */
router.get("/photos/:id", photosController.show);
/**
 * @param  {id"} "/photos/
 * @param  {} photosController.update calling the update function in the photosController file (update a document)
 */
router.put(
  "/photos/:id",
  PostValidationPhotos,
  PutValidationPhotos,
  errorsValidation,
  photosController.update
);
/**
 * @param  {id"} "/photos/
 * @param  {} photosController.destroy calling the destroy function in the photosController file (destroy a document)
 */
router.delete("/photos/:id", photosController.destroy);

export default router;
