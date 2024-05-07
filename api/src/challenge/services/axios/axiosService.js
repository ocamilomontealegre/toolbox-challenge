import axios from "axios";
import { toolboxApiConfig } from "../../../shared/config/config.js";

const instance = axios.create({
  baseURL: toolboxApiConfig.baseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": 'application/json',
    "Authorization": toolboxApiConfig.secretKey,
  }
})

export const consumeApi = async (method, resource) => {
  try {
    const response = await instance[method](resource);
    return response.data;
  } catch (error) {
    console.error(`Error fetching files: ${error.message}`);
  }
}