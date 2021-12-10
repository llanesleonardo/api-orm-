import "reflect-metadata"; // // This npm module import Declarative definition of metadata
import express from "express"; //This npm module express to create a server and use express middleware
// import helmet from 'helmet'
import morgan from "morgan"; // This npm module import HTTP request logger middleware
import cors from "cors"; // This npm module import cors - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
import compression from "compression"; // This npm module import compression - The following compression codings are supported  deflate gzip
import rootPath from "app-root-path"; //  This npm module import rootPath - This simple module helps you access your application's root path from anywhere in the application without resorting to relative paths like require("../../path")
import router from "./router"; // This npm module import custom module router
import { errorHandler } from "./middleware/apiErrors";

const appRootPath = rootPath.toString(); // creat a constant rootPath and covert it to String to access any where the root path of your project
const app = express(); // Create express instance's
app.set("case sensitive routing", false); // set the attribute case sensitive routing
app.set("strict routing", false); // set the attribute strict routing
app.set("json spaces", 2); // set the attribute json spaces
app.use(morgan("combined")); // use middleware morgan with the value parameter "combined" Standard Apache combined log output
app.use(cors()); // use middleware cors to apply default configurations and handle CORS
/**
 // use compression middleware to apply default configuration - The middleware will attempt to compress response bodies for all request that traverse through the middleware, based on the given options.
// This middleware will never compress responses that include a Cache-Control header with the no-transform directive, as compressing will transform the body.
 */
app.use(compression());

app.use(express.urlencoded({ extended: true })); //use express function urlencoded with an object as a value parameter  extended true  - // then you can parse incoming Request Object if object, with nested objects, or generally any type.
app.use(express.json()); // use express json middleware - It parses incoming requests with JSON payloads and is based on body-parser

app.use(express.static(`${appRootPath}/public`)); // static paths to upload files
app.use(express.static(`${appRootPath}/public/uploads`));

app.get("/", (_, res) => res.sendFile("public", "index.html")); // static routes to present html, css only files

app.use(router); // use router file

app.use(errorHandler); // use custom middleware to handle errors - always at the end of the apps.use middleware
export default app;
