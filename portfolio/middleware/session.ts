import dotenv from "dotenv";
dotenv.config();

import session from "express-session";
import mongoDbSession from "connect-mongodb-session";
import { Language, Message } from "../types";
const MongoDBStore = mongoDbSession(session);

const mongoStore = new MongoDBStore({
    uri: process.env.MONGODB_URI!,
    collection: "sessions",
    databaseName: "portfolio",
});

mongoStore.on("error", (error) => {
    console.error(error);
});

declare module 'express-session' {
    export interface SessionData {
        username?: string;
        language?: Language;
        message?: string;
        post: Message;
    }
}

export default session({
    secret: process.env.SESSION_SECRET!,
    store: mongoStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: new Date(Date.now() + 60 * 60 * 24 * 7 * 365),
        httpOnly: true,
        sameSite: "lax"
    }
});