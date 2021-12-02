import { getRepository, getConnection } from "typeorm";
import { Photos } from "../models/photos.models.ts";
/**
 * @getPhotoRepository get a specific repositor, similar to use a specific schema or table in the database
 */
function getPhotoRepository() {
  try {
    return getConnection().getRepository(Photos);
  } catch (e) {
    return console.log("sucedió un error en el service " + e.stack);
  }
}

/**
 * @index fetch all documents
 */
export async function index() {
  try {
    return await getPhotoRepository().find();
  } catch (e) {
    return console.log("sucedió un error en el service " + e.stack);
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
    return console.log("sucedió un error en el service " + e.stack);
  }
}
/**
 * @store crete a document an then save that document into db
 * @param  {} payload
 */
export async function store(payload) {
  try {
    let album1 = {
      id: 1,
      name: "TypeScript",
    };
    let album2 = {
      id: 2,
      name: "Programming",
    };
    let photoWithAlbum = { ...payload, albums: [album1, album2] };
    let photo = await getPhotoRepository().create(payload);
    return await getPhotoRepository().save(photo);
    // return photoWithAlbum;
  } catch (e) {
    return console.log("sucedió un error en el service " + e.stack);
  }
}
/**
 * @update fetch one document, merge with the old same document and then save it into db
 * @param  {} id
 * @param  {} paypload
 */
export async function update(id, payload) {
  try {
    let album1 = {
      id: 1,
      name: "TypeScript",
    };
    let album2 = {
      id: 2,
      name: "Programming",
    };
    let photoToUpdate = await getPhotoRepository().findOne(id);
    getRepository("photos").merge(photoToUpdate, payload);
    return await getPhotoRepository().save(photoToUpdate);
  } catch (e) {
    return console.log("sucedió un error en el service " + e.stack);
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
    return console.log("sucedió un error en el service " + e.stack);
  }
}
