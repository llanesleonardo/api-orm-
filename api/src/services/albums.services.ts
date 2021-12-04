import { getRepository, getConnection } from "typeorm";
import { Album } from "../models/albums.models";
/**
 * @getPhotoRepository get a specific repositor, similar to use a specific schema or table in the database
 */
function getAlbumRepository() {
  try {
    return getConnection().getRepository(Album);
  } catch (e) {
    return console.log("sucedió un error en el service ");
  }
}

/**
 * @index fetch all documents
 */
export async function index() {
  try {
    return await getRepository(Album).find();
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
    /*  return await getRepository(Album).findOne(id, {
      relations: ["photo"],
    });*/
    return getRepository(Album)
      .createQueryBuilder("album")
      .leftJoinAndSelect("album.photo", "photos")
      .where("album.id = :albumId", { albumId: id })
      .getOne();
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
    let album = await getRepository(Album).create(payload);
    return await getRepository(Album).save(album);
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
    let albumToUpdate = await getRepository(Album).findOne(id);
    if (albumToUpdate) {
      await getRepository(Album).merge(albumToUpdate, payload);
      return await getRepository(Album).save(albumToUpdate);
    }

    return { error: "not found" };
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
    return await getRepository(Album).delete(id);
  } catch (e) {
    return console.log("sucedió un error en el service ");
  }
}
