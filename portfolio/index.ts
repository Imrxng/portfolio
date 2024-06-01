import express, { Express, NextFunction } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("views", path.join(__dirname, "views/viewswpl"));
app.set("views", path.join(__dirname, "views/viewsportfolio"));

app.set("port", process.env.PORT ?? 3000);

app.use((req, res, next) => {
    res.locals.contact = undefined;
    next();
});

app.get("/", (req, res) => {
    res.render("portfolio");
});

app.get("/contact", (req, res) => {
    res.render("contact", {
        contact: true
    });
});

app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get("port"));
});