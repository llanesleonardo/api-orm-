import { getRepository, getConnection } from "typeorm";
import { Photos } from "../models/photos.models";
/**
 * @getPhotoRepository get a specific repositor, similar to use a specific schema or table in the database
 */
function getPhotoRepository() {
  try {
    return getConnection().getRepository(Photos);
  } catch (e) {
    return console.log("sucedió un error en el service ");
  }
}

/**
 * @index fetch all documents
 */
export async function index() {
  try {
    return await getRepository(Photos).find();
  } catch (e) {
    return console.log("sucedió un error en el service ");
  }
}
/**
 * @show fetch only one document
 * @param  {} id
 */
export async function show(id: string) {
  try {
    return await getRepository(Photos).findOne(id);
  } catch (e) {
    return console.log("sucedió un error en el service ");
  }
}
/**
 * @store crete a document an then save that document into db
 * @param  {} payload
 */
export async function store(payload: any) {
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
    let photo = await getRepository(Photos).create(payload);
    return await getRepository(Photos).save(photo);
    // return photoWithAlbum;
  } catch (e) {
    return console.log("sucedió un error en el service ");
  }
}
/**
 * @update fetch one document, merge with the old same document and then save it into db
 * @param  {} id
 * @param  {} paypload
 */
export async function update(id: string, payload: Object) {
  try {
    let album1 = {
      id: 1,
      name: "TypeScript",
    };
    let album2 = {
      id: 2,
      name: "Programming",
    };
    let photoToUpdate = await getRepository(Photos).findOne(id);
    if (photoToUpdate) {
      getRepository(Photos).merge(photoToUpdate, payload);
      return await getRepository(Photos).save(photoToUpdate);
    }

    return { error: "error" };
  } catch (e) {
    return console.log("sucedió un error en el service ");
  }
}

/**
 * @destroy delete a specific document in the db
 * @param  {} id
 */
export async function destroy(id: string) {
  try {
    return await getRepository(Photos).delete(id);
  } catch (e) {
    return console.log("sucedió un error en el service ");
  }
}
