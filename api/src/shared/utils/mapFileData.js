import { processFile } from "../../challenge/services/service.js";

export const mapFileData = (array) => {
  return array.map((fileName) => processFile(fileName));
}