import * as photosServices from "@services/photos.services";
/**
 * @param  {} req
 * @param  {} res
 * @description comentarios
 * @photos variable that recieves from the Photo Service all the documents in the db
 */

// TODO : LEARN MORE ABOUT ERRORS
export async function index(req, res) {
  try {
    let photos = await photosServices.index();
    res.status(200).json(photos);
  } catch (e) {
    console.log("sucedió un error en el controller " + e.stack);
    res.status(500).send("sucedió un error en el controller");
  }
}
/**
 * @param  {} req
 * @param  {} res
 * @payload variable that explain the new data that will be save in the db
 * @newPhoto variable that recieves a new document that has the store data from the payload
 */
export async function store(req, res) {
  try {
    const payload = {
      name: "new photo  " + new Date(),
    };
    let newPhoto = await photosServices.store(payload);
    res.status(200).json(newPhoto);
  } catch (e) {
    console.log("sucedió un error en el controller " + e.stack);
    res.status(500).send("sucedió un error en el controller ");
  }
}
/**
 * @param  {} req
 * @param  {} res
 * @onePhoto variable that recieves a specific document from the db
 * @req.params.id is the value taken from the req parameter that includes a number, the pattern is define by the route
 */
export async function show(req, res) {
  try {
    let onePhoto = await photosServices.show(req.params.id);
    res.status(200).json(onePhoto);
  } catch (e) {
    console.log("sucedió un error en el controller " + e.stack);
    res.status(500).send("sucedió un error en el controller ");
  }
}
/**
 * @param  {} req
 * @param  {} res
 * @updatePhoto variable that recieves a specific updated document from the db,
 * @req.params.id is the value taken from the req parameter that includes a number, the pattern is define by the route
 * @object payload that comes from the request parameter
 */
export async function update(req, res) {
  try {
    let updatePhoto = await photosServices.update(req.params.id, {
      name: "nueva foto updated " + new Date(),
    });
    res.status(200).json(updatePhoto);
  } catch (e) {
    console.log("sucedió un error en el controller " + e.stack);
    res.status(500).send("sucedió un error en el controller ");
  }
}
/**
 * @param  {} req
 * @param  {} res
 * @photoDeleted variable that recieves a notification of a specific deleted document
 * @req.params.id is the value taken from the req parameter that includes a number, the pattern is define by the route
 */
export async function destroy(req, res) {
  try {
    let photoDeleted = await photosServices.destroy(req.params.id);
    res.status(200).json("foto borrada con exito");
  } catch (e) {
    console.log("sucedió un error en el controller " + e.stack);
    res.status(500).send("sucedió un error en el controller");
  }
}
