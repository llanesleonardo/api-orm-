import * as photosServices from "@services/photos.services";
import apiErrors from "../errors/apiErrors";

/**
 * @param  {} req
 * @param  {} res
 * @description comentarios
 * @photos variable that recieves from the Photo Service all the documents in the db
 */

// TODO : LEARN MORE ABOUT ERRORS
export async function index(req, res, next) {
  try {
    let photos = await photosServices.index();
    if (!photos) {
      next(apiErrors.badRequest("Something went wrong with the photos"));
      return;
    }
    res.status(200).json(photos);
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
export async function store(req, res, next) {
  try {
    console.log(req.body);
    const { name, description, creation_date, author, camponuevo } = req.body;
    let newPhoto = await photosServices.store(
      name,
      description,
      creation_date,
      author,
      camponuevo
    );
    res.status(200).json(newPhoto);
  } catch (e) {
    next(apiErrors.internal("Something went wrong overall" + e));
    return;
  }
}
/**
 * @param  {} req
 * @param  {} res
 * @onePhoto variable that recieves a specific document from the db
 * @req.params.id is the value taken from the req parameter that includes a number, the pattern is define by the route
 */
export async function show(req, res, next) {
  try {
    let onePhoto = await photosServices.show(req.params.id);
    if (!onePhoto) {
      next(apiErrors.badRequest("Something went wrong with Fetch One Photo"));
      return;
    }
    console.log(onePhoto);
    res.status(200).json(onePhoto);
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
export async function update(req, res, next) {
  try {
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const { name, description, creation_date, author, camponuevo } = req.body;
    let updatePhoto = await photosServices.update(
      req.params.id,
      name,
      description,
      creation_date,
      author,
      camponuevo
    );
    if (!updatePhoto) {
      next(
        apiErrors.badRequest("Something went wrong with Updating the Photo")
      );
      return;
    }
    res.status(200).json(updatePhoto);
  } catch (e) {
    next(apiErrors.internal("Something went wrong  overall" + e));
    return;
  }
}
/**
 * @param  {} req
 * @param  {} res
 * @photoDeleted variable that recieves a notification of a specific deleted document
 * @req.params.id is the value taken from the req parameter that includes a number, the pattern is define by the route
 */
export async function destroy(req, res, next) {
  try {
    let photoDeleted = await photosServices.destroy(req.params.id);
    res.status(200).json("foto borrada con exito");
  } catch (e) {
    next(apiErrors.internal("Something went wrong  overall"));
    return;
  }
}
