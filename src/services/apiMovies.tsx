import axios from 'axios';
// import dotenv from 'react-native-dotenv';
// import { API_KEY } from '@env'

// Sabemos que este não é o lugar para armazenar a chave de API, mas para fins práticos de demonstração, vamos deixá-la aqui.
const apiKey = 'fb34530271b349314af0de263d16ab5a'
const baseURL = 'https://api.themoviedb.org/3';

export interface IToken {
  request_token: string;
}

export async function getMovieById(movieId: number) { 
  const response = await axios.get(`${baseURL}/movie/${movieId}`, {
    params: { api_key: apiKey },
  });
  return response.data;
}

export async function getPopularMovies() {
  const response = await axios.get(`${baseURL}/movie/popular`, {
    params: { api_key: apiKey },
  });
  return response.data;
}

export async function getGenres() {
  const response = await axios.get(`${baseURL}/genre/movie/list`, {
    params: { api_key: apiKey },
  });
  return response.data;
}
