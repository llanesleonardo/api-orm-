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
    const photos = await photosServices.index(); // call service and store the result in a constant variable
    res.status(200).json(photos); // send status code and joson rresponse to the client
  } catch (e) {
    next(
      // use next function and call function internal of apiErrors class and send 6 parameters code, errors, message, method, path, body
      apiErrors.internal(
        400,
        e.stack,
        "Something went wrong",
        req.method,
        req.path,
        req.body
      )
    );
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
    const {
      name,
      description,
      creation_date,
      author,
      camponuevo,
      correodelauthor,
    } = req.body;
    let newPhoto = await photosServices.store(
      // call service and store the result in a constant variable
      name,
      description,
      creation_date,
      author,
      camponuevo,
      correodelauthor
    );
    res.status(200).json(newPhoto); // send status code and joson rresponse to the client
  } catch (e) {
    next(
      // use next function and call function internal of apiErrors class and send 6 parameters code, errors, message, method, path, body
      apiErrors.internal(
        400,
        e.stack,
        "Something went wrong on index function",
        req.method,
        req.path,
        req.body
      )
    );
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
    let onePhoto = await photosServices.show(req.params.id); // call service and store the result in a constant variable
    console.log(onePhoto);
    res.status(200).json(onePhoto); // send status code and joson rresponse to the client
  } catch (e) {
    next(
      // use next function and call function internal of apiErrors class and send 6 parameters code, errors, message, method, path, body
      apiErrors.internal(
        400,
        e.stack,
        "Something went wrong on index function",
        req.method,
        req.path,
        req.body
      )
    );
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
    const {
      name,
      description,
      creation_date,
      author,
      camponuevo,
      correodelauthor,
    } = req.body;
    let updatePhoto = await photosServices.update(
      // call service and store the result in a constant variable
      req.params.id,
      name,
      description,
      creation_date,
      author,
      camponuevo,
      correodelauthor
    );

    res.status(200).json(updatePhoto); // send status code and joson rresponse to the client
  } catch (e) {
    next(
      // use next function and call function internal of apiErrors class and send 6 parameters code, errors, message, method, path, body
      apiErrors.internal(
        400,
        e.stack,
        "Something went wrong on index function",
        req.method,
        req.path,
        req.body
      )
    );
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
    let photoDeleted = await photosServices.destroy(req.params.id); // call service and store the result in a constant variable
    res.status(200).json("foto borrada con exito"); // send status code and joson rresponse to the client
  } catch (e) {
    next(
      // use next function and call function internal of apiErrors class and send 6 parameters code, errors, message, method, path, body
      apiErrors.internal(
        400,
        e.stack,
        "Something went wrong on index function",
        req.method,
        req.path,
        req.body
      )
    );
    return;
  }
}
