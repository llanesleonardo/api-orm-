import dotenv from "dotenv";
/**
 *  @getEnv function that choose a config file (only use it in development enviroment )
 */
export const getEnv = () => dotenv.config();
// dotenv.config().error ? {} : dotenv.config().parsed;
