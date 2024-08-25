import axios, { AxiosError } from 'axios';
 
const API_BASE_URL = 'http://localhost:5000/api/data';
 
export interface DataType {
  key: string;
  name: string;
  creationDate: string;
  lastEdited: string;
  editedBy: string;
}
 
const getData = async (): Promise<DataType[]> => {
  const response = await axios.get<DataType[]>(API_BASE_URL);
  return response.data;
};
 
const addRecord = async (name: string): Promise<{ success: boolean; message: string; data?: DataType[] }> => {
  try {
const response = await axios.post<{ message: string; data: DataType[] }>(API_BASE_URL, { name });
    return { success: true, message: response.data.message, data: response.data.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ message: string }>;
      return { success: false, message: axiosError.response?.data.message || 'An unknown error occurred' };
    } else {
      return { success: false, message: 'An unknown error occurred' };
    }
  }
};
 
const updateRecord = async (key: string, name: string): Promise<{ success: boolean; message: string; data?: DataType[] }> => {
  try {
    const response = await axios.put<{ message: string; data: DataType[] }>(`${API_BASE_URL}/${key}`, { name });
    return { success: true, message: response.data.message, data: response.data.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ message: string }>;
      return { success: false, message: axiosError.response?.data.message || 'An unknown error occurred' };
    } else {
      return { success: false, message: 'An unknown error occurred' };
    }
  }
};
 
const deleteRecord = async (key: string): Promise<{ success: boolean; message: string; data?: DataType[] }> => {
  try {
    const response = await axios.delete<{ message: string; data: DataType[] }>(`${API_BASE_URL}/${key}`);
    return { success: true, message: response.data.message, data: response.data.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ message: string }>;
      return { success: false, message: axiosError.response?.data.message || 'An unknown error occurred' };
    } else {
      return { success: false, message: 'An unknown error occurred' };
    }
  }
};
 
export default {
  getData,
  addRecord,
  updateRecord,
  deleteRecord,
};