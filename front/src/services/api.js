import axios from 'axios';
import { baseUrl } from '../constants/baseUrl';

export const fetchFiles = async (fileName = null) => {
  try {
    let requestUrl = baseUrl;

    if (fileName) {
      requestUrl += `?fileName=${fileName}`;
    }

    const response = await axios.get(requestUrl);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch files: ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Error fetching files: ${error.message}`);
  }
};