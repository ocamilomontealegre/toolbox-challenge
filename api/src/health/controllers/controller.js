import { HEALTH_STATUS_MESSAGE } from "../constants/index.js";
import { logInfo, logErrors } from "../../shared/logger/logger.js";
import { sendSuccess, sendError } from "../../shared/response-manager/responseManager.js";

// Check API health status
export const checkApiHealth = (req, res) => {
  try {
    logInfo(req, HEALTH_STATUS_MESSAGE);
    return sendSuccess(res, HEALTH_STATUS_MESSAGE);
  } catch (error) {
    logErrors(req, error);
    return sendError(res);
  }
}