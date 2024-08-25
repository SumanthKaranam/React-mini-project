// import axios from 'axios';
 
// const BASE_URL = 'http://localhost:5000/api/users';

// interface UserData {
//     firstName?: string;
//     lastName?: string;
//     email: string;
//     password: string;
// }
 
// export const registerUser = async (userData:UserData):Promise<void> => {
//   try {
// await axios.post(`${BASE_URL}/register`, userData);
//   } catch (error) {
//     if (axios.isAxiosError(error) && error.response){
//         throw error.response.data.message
//     }
//     throw 'An expected error occured';
//   }
// };
 
// export const loginUser = async (userData:UserData):Promise<void> => {
//   try {
// const response = await axios.post(`${BASE_URL}/login`, userData);
//     return response.data.user;
//   } catch (error) {
//     if (axios.isAxiosError(error) && error.response){
//         throw error.response.data.message
//     }
//     throw 'An expected error occured';
//   }
// };