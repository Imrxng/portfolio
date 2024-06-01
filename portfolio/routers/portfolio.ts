import express, { Express } from "express";
import { insertMessage, voegBericht } from "../databasePortfolio";



export default function portfolioRouter() {
    const router = express.Router();
-    

    router.get("/", async (req, res) => {
        req.session.message = undefined;
        if (!req.session.language) {
            req.session.language = "nl";
        }
        if (req.session.language === "nl") {
            res.render("portfolio");
        } else {
            res.render("portfolio_en");
        };
    });
    
    router.get("/contact", (req, res) => {
        if (!req.session.language) {
            req.session.language = "nl";
        }
        if (req.session.language === "nl") {
            res.render("contact", {
                contact: true,
                message: req.session.message,
                post: req.session.post
            });
        } else {
            res.render("contact_en", {
                contact: true,
                message: req.session.message,
                post: req.session.post
            });
        };
    });

    router.post("/", async (req, res) => {      
          
        try {
            if (req.session.language === "nl") {
                await voegBericht(req.body);
                req.session.message = "Uw bericht is succesvol verzonden.";
            } else {
                await insertMessage(req.body);
                req.session.message = "Your message has been successfully sent.";
            };
            req.session.post = undefined;
            res.redirect("back");
        } catch (error: any) {
            req.session.message = error.message;
            req.session.post = req.body;            
            res.redirect("back");
        };
    });

    router.get("/nl", (req, res) => {
        req.session.language = "nl";
        req.session.message = undefined;
        res.redirect("back");
    });

    router.get("/en", (req, res) => {
        req.session.language = "en";
        req.session.message = undefined;
        res.redirect("back");
    });
    
    router.get("/login", (req, res) => {
       
    });

    return router;
}