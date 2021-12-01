import { Photos } from "../models/photos.models";
import { getRepository, getConnection } from "typeorm";

export const photosFindAll = async () => {
  const photosRepository = await getConnection().getRepository("photos");
  return await photosRepository.find();
};

export const photosFindOne = async (id) => {
  const photosRepository = await getConnection().getRepository("photos");
  return await photosRepository.findOne(id);
};
