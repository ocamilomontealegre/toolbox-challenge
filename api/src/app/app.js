import express, { json } from "express";
import { router as appRouter } from "./router/router.js";

export const app = express();

// Parse incoming requests
app.use(json());

// Use router
app.use(appRouter);

