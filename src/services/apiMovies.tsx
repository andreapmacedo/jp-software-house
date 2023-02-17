// import dotenv from 'dotenv';
// import dotenv from 'react-native-dotenv';
// require('dotenv').config({ path: `${__dirname}/../../config.env` }) 
// require('dotenv').config();
// dotenv.config();

// import { API_KEY } from '@env'


import axios from 'axios';

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

export async function getGeneres() {
  const response = await axios.get(`${baseURL}/genre/movie/list`, {
    params: { api_key: apiKey },
  });
  return response.data;
}

export function listarFilmesPopulares(page: number) {
  // return http.get<Results>(this.baseURL + 'popular?' + this.apiKey + '&page=' + page)
  // return this.http.get<Results>(this.baseURL + 'popular?' + this.apiKey + '&page=' + page)
}

export function listarMelhoresAvaliados(page: number) {
  // return this.http.get<Results>(this.baseURL + 'top_rated?' + this.apiKey + '&page=' + page)
}

export function  listarFilmesNosCinemas() {
  // return this.http.get<Results>(this.baseURL + 'now_playing?' + this.apiKey + '&page=1&region=BR')
}

export function filtrarFilmes(nomeFilme: string) {
  // return this.http.get<Results>(this.filtroURL + nomeFilme)
}

export function  getFilmeById(idFilme: number) {
  // return this.http.get<Filme>(this.baseURL + idFilme + '?' + this.apiKey)
}

export function getCreditsFilme(idFilme: number) {
  // return this.http.get<Filme>(this.baseURL + idFilme + '/credits?' + this.apiKey)
}

export function getProviders(idFilme: number) {
  // return this.http.get<Provider>(this.baseURL + idFilme + '/watch/providers?' + this.apiKey)
}

// export function getGenres() {
//   // return this.http.get<Genre>('https://api.themoviedb.org/3/genre/movie/list?' + this.apiKey)
// }

export function discoverMovies(page: number) {
  // return this.http.get<Results>('https://api.themoviedb.org/3/discover/movie?' + this.apiKey + '&include_adult=false&sort_by=vote_count.desc&page=' + page)
}

export function autenticarUsuarioPorToken() {
  // return this.http.get<Token>('https://api.themoviedb.org/3/authentication/token/new?' + this.apiKey)
}

export function createSession(token: IToken) {
  // return this.http.post<Session>('https://api.themoviedb.org/3/authentication/session/new?' + this.apiKey, token)
}
