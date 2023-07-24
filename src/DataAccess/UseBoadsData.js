import axios from "axios"
const API_URl = 'http://localhost:8080';

export async function getdata() {
    try {
      const response = await axios.get(API_URl+ '/boards');
      return response.data;
    } catch (error) {
      console.error('Erro na requisição:', error.message);
      return [];
    }
  }
   

   


