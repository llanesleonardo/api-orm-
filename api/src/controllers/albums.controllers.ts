import * as albumsServices from "../services/albums.services";
import { apiErrors } from "../errors/apiErrors";
import { Request, Response } from "express";
/**
 * @param  {} req
 * @param  {} res
 * @description comentarios
 * @photos variable that recieves from the Photo Service all the documents in the db
 */

// TODO : LEARN MORE ABOUT ERRORS
export async function index(req: Request, res: Response, next: any) {
  try {
    let albums = await albumsServices.index();
    if (!albums) {
      next(apiErrors.badRequest("Something went wrong with the photos"));
      return;
    }
    res.status(200).json(albums);
  } catch (e) {
    next(apiErrors.internal("Something went wrong  overall"));
    return;
  }
}
/**
 * @param  {} req
 * @param  {} res
 * @payload variable that explain the new data that will be save in the db
 * @newPhoto variable that recieves a new document that has the store data from the payload
 */
export async function store(req: Request, res: Response, next: any) {
  try {
    let newAlbum = await albumsServices.store(req.body);
    if (!newAlbum) {
      next(apiErrors.badRequest("Something went wrong with the New Photo"));
      return;
    }

    res.status(200).json(newAlbum);
  } catch (e) {
    next(apiErrors.internal("Something went wrong  overall"));
    return;
  }
}
/**
 * @param  {} req
 * @param  {} res
 * @onePhoto variable that recieves a specific document from the db
 * @req.params.id is the value taken from the req parameter that includes a number, the pattern is define by the route
 */
export async function show(req: Request, res: Response, next: any) {
  try {
    let oneAlbum = await albumsServices.show(req.params.id);
    if (!oneAlbum) {
      next(apiErrors.badRequest("Something went wrong with Fetch One Photo"));
      return;
    }
    console.log(oneAlbum);
    res.status(200).json(oneAlbum);
  } catch (e) {
    next(apiErrors.internal("Something went wrong  overall"));
    return;
  }
}
/**
 * @param  {} req
 * @param  {} res
 * @updatePhoto variable that recieves a specific updated document from the db,
 * @req.params.id is the value taken from the req parameter that includes a number, the pattern is define by the route
 * @object payload that comes from the request parameter
 */
export async function update(req: Request, res: Response, next: any) {
  try {
    let updateAlbum = await albumsServices.update(req.params.id, req.body);
    if (!updateAlbum) {
      console.log(updateAlbum);
      next(
        apiErrors.badRequest("Something went wrong with Updating the Photo")
      );
      return;
    }
    res.status(200).json(updateAlbum);
  } catch (e) {
    next(apiErrors.internal("Something went wrong  overall"));
    return;
  }
}
/**
 * @param  {} req
 * @param  {} res
 * @photoDeleted variable that recieves a notification of a specific deleted document
 * @req.params.id is the value taken from the req parameter that includes a number, the pattern is define by the route
 */
export async function destroy(req: Request, res: Response, next: any) {
  try {
    let albumDeleted = await albumsServices.destroy(req.params.id);
    res.status(200).json(albumDeleted);
  } catch (e) {
    next(apiErrors.internal("Something went wrong  overall"));
    return;
  }
}
