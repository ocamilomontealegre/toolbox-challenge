import express, { json } from "express";
import cors from "cors";
import { router as appRouter } from "./router/router.js";

export const app = express();

// Enable cors
app.use(cors());

// Parse incoming requests
app.use(json());

// Use router
app.use(appRouter);

