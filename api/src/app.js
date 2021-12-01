import express from "express";
// import helmet from 'helmet'
import morgan from "morgan";
import cors from "cors";
import compression from "compression";
import rootPath from "app-root-path";
import router from "./router";
import "reflect-metadata";
// set var's
const appRootPath = rootPath.toString();
// Create express instance's
const app = express();
// set rules
app.set("case sensitive routing", false);
app.set("strict routing", false);
app.set("json spaces", 2);
// config middleware's
app.use(morgan("combined"));
app.use(cors());
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static paths
app.use(express.static(`${appRootPath}/public`));
app.use(express.static(`${appRootPath}/public/uploads`));
// static routes
app.get("/", (_, res) => res.sendFile("public", "index.html"));

app.use(router);

export default app;
