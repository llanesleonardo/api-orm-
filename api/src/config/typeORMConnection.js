import { createConnection } from "typeorm";

export const typeConn = async () => {
  return await createConnection();
};
