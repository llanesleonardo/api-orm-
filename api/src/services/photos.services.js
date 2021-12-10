import { getRepository, getConnection } from "typeorm";
/**
 * @getPhotoRepository get a specific repositor, similar to use a specific schema or table in the database
 */
function getPhotoRepository() {
  try {
    return getConnection().getRepository("photos");
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
 * @index fetch all documents
 */
export async function index() {
  try {
    return await getPhotoRepository().find();
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
 * @show fetch only one document
 * @param  {} id
 */
export async function show(id) {
  try {
    return await getPhotoRepository().findOne(id);
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
 * @store crete a document an then save that document into db
 * @param  {} payload
 */
export async function store(
  name,
  description,
  creation_date,
  author,
  camponuevo = null,
  correodelauthor
) {
  try {
    let payload = {
      name,
      description,
      creation_date,
      author,
      camponuevo,
      correodelauthor,
    };
    let photo = await getPhotoRepository().create(payload);
    return await getPhotoRepository().save(photo);
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
 * @update fetch one document, merge with the old same document and then save it into db
 * @param  {} id
 * @param  {} paypload
 */
export async function update(
  id,
  name,
  description,
  creation_date,
  author,
  camponuevo = null,
  correodelauthor
) {
  try {
    let photoToUpdate = await getPhotoRepository().findOne(id);
    let payload = {
      name,
      description,
      creation_date,
      author,
      camponuevo,
      correodelauthor,
    };
    getRepository("photos").merge(photoToUpdate, payload);
    return await getPhotoRepository().save(photoToUpdate);
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
 * @destroy delete a specific document in the db
 * @param  {} id
 */
export async function destroy(id) {
  try {
    return await getPhotoRepository().delete(id);
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
