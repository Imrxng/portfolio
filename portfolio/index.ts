import express, { Express, NextFunction } from "express";
import dotenv from "dotenv";
import path from "path";
import portfolioRouter from "./routers/portfolio";
import session from "./middleware/session";

dotenv.config();

const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", [
    path.join(__dirname, "views/viewswpl"),
    path.join(__dirname, "views/viewsportfolio"),
  ]
);
app.set("port", process.env.PORT);
app.use(session);
app.use((req, res, next) => {
    res.locals.contact = undefined;
    next();
});
app.use(session);
app.use("/", portfolioRouter());



app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get("port"));
});