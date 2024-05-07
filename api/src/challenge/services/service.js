import axios from "axios";
import { consumeApi } from "../services/axios/axiosService.js";
import { toolboxApiConfig } from "../../shared/config/config.js";
import { formattedData } from "../../shared/database/database.js";


// Get list of files from the third party Toolbox API
export const listFiles = async () => {
  return consumeApi("get", toolboxApiConfig.resources.resource1);
}

// Get the data of one specif file
export const getFileData = async (fileName) => {
  return consumeApi("get", `${toolboxApiConfig.resources.resource2}/${fileName}`);
}

// Parse file data
const parseFileData = (fileData) => {

  if (!fileData) return [];

  const lines = fileData.split('\n').slice(1);
  const validLines = lines.filter(line => {
    const parts = line.split(',');
    return parts.length === 4 && !parts.includes('');
  });

  return validLines.map(line => {
      const [file, text, number, hex] = line.split(',');
      return { text, number: parseInt(number), hex };
  });
};

// Process file
export const processFile = async (fileName) => {
  try {
      const fileData = await getFileData(fileName);
      const parsedData = parseFileData(fileData);
      formattedData.push({ file: fileName, lines: parsedData });
  } catch (error) {
      console.error(`Error processing file ${fileName}: ${error.message}`);
  }
};
