import { photosFindAll, photosFindOne } from "../services/photos.services";
/**
 * @param  {} req
 * @param  {} res
 * @description comentarios
 */
export async function index(req, res) {
  let result = await photosFindAll();
  res.status(200).json(result);
}
/**
 * @param  {} req
 * @param  {} res
 */
export function store(req, res) {}
/**
 * @param  {} req
 * @param  {} res
 */
export async function show(req, res) {
  let result = await photosFindOne(req.params.id);
  res.status(200).json(result);
}
/**
 * @param  {} req
 * @param  {} res
 */
export function update(req, res) {}
/**
 * @param  {} req
 * @param  {} res
 */
export function destroy(req, res) {}

/*
const photoControllerObject ={
    index:(req,res)=>{}
}

export default photoControllerObject
*/
