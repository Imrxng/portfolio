import dotenv from "dotenv";
dotenv.config();

import session from "express-session";
import mongoDbSession from "connect-mongodb-session";
import { Language } from "../types";
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
    }
}

export default session({
    secret: process.env.SESSION_SECRET!,
    store: mongoStore,
    resave: false,
    saveUninitialized: false,
});