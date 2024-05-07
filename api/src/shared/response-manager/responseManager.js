import { INTERNAL_SERVER_ERROR } from "../constants/index.js";

/* Return response on success */
export const sendSuccess = (res, message = null) => res.status(200).json(message);

/* Return response on error */
export const sendError = (res, message = INTERNAL_SERVER_ERROR, status = 500 ) => res.status(status).json(message);