import { Router } from "express";
import { getFilesData, listToolboxFiles } from "../controllers/controller.js";

export const router = Router();

// Get list of files from the Toolbox API
router.get("/files/list", listToolboxFiles);

// Get transformed data from all the available files
router.get("/files/data", getFilesData);

