import { Router } from "express";
import { router as healthRouter } from "../../health/routers/router.js";
import { router as challengeRouter } from "../../challenge/routers/router.js";

export const router = Router();

// Use health endpoints
router.use(healthRouter);

// Use challenge endpoints
router.use(challengeRouter);

// Index
router.get('/', (req, res) => res.status(200).json({ message: 'Welcome to the Toolbox Challenge API' }));

// Manage unknown endpoints
router.use((req, res) => res.status(404).json({ error: `Endpoint ${req.url} unknown`}));

