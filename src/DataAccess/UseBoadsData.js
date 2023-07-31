import axios from "axios"



const API_URl = 'http://localhost:8080';

//Busca os dados da API
export async function getdata() {
    try {
      const response = await axios.get(API_URl+ '/boards');
      return response.data;
    } catch (error) {
      console.error('Erro na requisição:', error.message);
      return [];
    }
  }

  //Envia dados para API

 export async function postdata(moodData) {
    try {
      const response = await axios.post(API_URl+ '/boards',moodData);
      return response.data;
    } catch (error) {
      console.error('Erro na requisição:', error.message);
      return [];
    }
  }

  //Enviar o link do board que vai ser deletado

  
   export async function deleteBoard(moodData) {
    try {
      const response = await axios.post(API_URl+ '/boards/delete',moodData);
      return response.data;
    } catch (error) {
      console.error('Erro na requisição:', error.message);
      return [];
    }
  }

   


