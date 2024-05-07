export const searchFileData = (array, fileName) => {
  return array.find((item) => item.file === fileName);
}