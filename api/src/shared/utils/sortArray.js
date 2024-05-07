export const sortArray = (array, field) => {
  return array.sort((a, b) => a[field].localeCompare(b[field], undefined, { numeric: true }));
}