import { fetchFiles } from "../../services/api";

export const fetchFilesRequest = () => ({
  type: 'FETCH_FILES_REQUEST'
});

export const fetchFilesSuccess = (files) => ({
  type: 'FETCH_FILES_SUCCESS',
  payload: files
});

export const fetchFilesFailure = (error) => ({
  type: 'FETCH_FILES_FAILURE',
  payload: error
});

export const fetchFilesData = (fileName = null) => {
  return async (dispatch) => {
    dispatch(fetchFilesRequest());

    try {
      const data = await fetchFiles(fileName);
      dispatch(fetchFilesSuccess(data));
    } catch (error) {
      dispatch(fetchFilesFailure(error.message));
    };
  };
};