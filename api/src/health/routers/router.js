import { Router } from "express"
import { HEALTH_ENDPOINT } from "../constants/index.js";
import { checkApiHealth } from "../controllers/controller.js";

export const router = Router();

// Handle "health" endpoint
router.get(HEALTH_ENDPOINT, checkApiHealth);
