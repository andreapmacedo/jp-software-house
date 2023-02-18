import React, { useState, useEffect } from 'react'
import { getGenres, getPopularMovies } from '../../services/apiMovies';
import CardContainer from '../../components/CardContainer';
import GenresContainer from '../../components/GenresContainer';
import { 
  View,
  StyleSheet,
  Text,
} from 'react-native'

import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
}

interface MoviesByGenre {
  [genre: string]: Movie[];
}

interface IProps {

}

const MainScreen: React.FC<IProps> = () =>{
  
  const navigation = useNavigation<any>();  
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  
  function separateMoviesByGenre(movies: Movie[], genres: Genre[]): MoviesByGenre {
    // Cria um objeto vazio para armazenar os filmes por gênero
    const moviesByGenre: MoviesByGenre = {};
  
    // Inicializa as listas de filmes por gênero
    genres.forEach((genre) => {
      moviesByGenre[genre.name] = [];
    });
  
    // Itera sobre a lista de filmes populares
    movies.reduce((acc, movie) => {
      // Itera sobre os gêneros do filme e adiciona o filme à lista correspondente
      movie.genre_ids.forEach((genreId) => {
        const genre = genres.find((g) => g.id === genreId);
        if (genre) {
          moviesByGenre[genre.name].push(movie);
        }
      });
      return acc;
    }, {});

    return moviesByGenre;
  }

  const apiFetch = async () => {
    
    const dataPopularMovies = await getPopularMovies();
    const popularMovies = dataPopularMovies.results;
    
    const dataGenres = await getGenres();
    const genres = dataGenres.genres;
    
    const filtered = separateMoviesByGenre(popularMovies, genres);
    const filteredMap = Object.entries(filtered).map(([genre, movies]) => ({ genre, movies }));

    setPopularMovies(popularMovies);
    setGenres(genres);    
    setFilteredMovies(filteredMap);
  }

  useEffect(() => {
    apiFetch();
  }, [])

  /*
    Código comentado abaixo é a versão anterior do código acima.
    É um código mais limpo, mas não é tão performático quanto o código acima.
  */
  
  // const getApiPopularMovies = async () => {
  //   const dataPopularMovies = await getPopularMovies();
  //   const popularMovies = dataPopularMovies.results;
  //   setPopularMovies(popularMovies);
  // }

  // const getApiGenres = async () => {
  //   const dataGenres = await getGenres();
  //   const genres = dataGenres.genres;
  //   setGenres(genres);
  // }

  // useEffect(() => {
  //   getApiPopularMovies();
  //   getApiGenres();
  // }, [])

  // useEffect(() => {
  //   const filtered = separateMoviesByGenre(popularMovies, genres);
  //   const filteredMap = Object.entries(filtered).map(([genre, movies]) => ({ genre, movies }));
  //   setFilteredMovies(filteredMap);
  // }, [genres])

  return (
    <View style={styles.container}>
    
      {
        filteredMovies?.map((filtered, index) => {        
          return(
            <GenresContainer key={index} data={filtered}/>
          )
          // return(
          //   <>
          //     <Text key={index}>{filtered.genre}</Text>
          //     {/* <Text key={index}>{filtered.movies}</Text> */}
          //   </>
          //   // <GenresContainer key={index} genre={genre}/>
          // )
        })
      }
    </View>
  )
}

export default MainScreen;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
  },
  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
  },
  containerForm: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 28,
    backgroundColor: 'white',
    marginBottom: 12,
  },
  text: {
    fontWeight: 'bold',
    marginTop: 28,
    backgroundColor: 'white',
    marginBottom: 12,
  },
  buttonText: {
    backgroundColor: 'white',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});