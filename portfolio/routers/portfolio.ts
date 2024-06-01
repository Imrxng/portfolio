import express, { Express } from "express";



export default function portfolioRouter() {
    const router = express.Router();
-    

    router.get("/", async (req, res) => {
        
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
                contact: true
            });
        } else {
            res.render("contact_en", {
                contact: true
            });
        };
    });

    router.get("/nl", (req, res) => {
        req.session.language = "nl";
        res.redirect("back");
    });

    router.get("/en", (req, res) => {
        req.session.language = "en";
        res.redirect("back");
    });
    
    return router;
}