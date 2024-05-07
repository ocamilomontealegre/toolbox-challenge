import { listFiles } from "../services/service.js";
import { logInfo, logErrors } from "../../shared/logger/logger.js";
import { sendSuccess, sendError } from "../../shared/response-manager/responseManager.js";
import { formattedData } from "../../shared/database/database.js";
import { sortArray as sortFiles, searchFileData, mapFileData } from "../../shared/utils/index.js";


// Get list of files from the Toolbox API
export const listToolboxFiles = async (req, res) => {
  try {
    const { files } = await listFiles();
    logInfo(req, files);

    if(files) {
      return sendSuccess(res, { files });
    }
    
    return sendError(res);
  } catch (error) {
    logErrors(req, error.message);
    return sendError(res);
  }
}

// Get transformed data from all the available files
export const getFilesData = async (req, res) => {
  try {
    const { files } = await listFiles();
    logInfo(req, files);

    if(!files) return sendError(res);

    if(files && files.length > 0) { 
      const filesDataPromises = mapFileData(files);
      await Promise.all(filesDataPromises);
    }

    const { fileName } = req.query;
    if(fileName) {
      const fileData = searchFileData(formattedData, fileName);
      return fileData 
        ? sendSuccess(res, fileData) 
        : sendError(res, { message : `File data not found for '${fileName}'`});
    }

    const sortedData = sortFiles(formattedData, "file");
    return sendSuccess(res, sortedData);    
  } catch (error) {
    logErrors(req, error.message);
    return sendError(res, error.message);
  }
}