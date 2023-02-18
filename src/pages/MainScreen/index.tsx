import React, { useState, useEffect } from 'react'
import { getGenres, getPopularMovies } from '../../services/apiMovies';
import GenresContainer from '../../components/GenresContainer';
import { 
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native'

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
 
    setFilteredMovies(filteredMap);
  }

  useEffect(() => {
    apiFetch();
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.vScrollView}
      >
        {
          filteredMovies?.map((filtered, index) => {
            return(
              filtered.movies.length > 0 &&
              <View
                key={index}
                style={styles.sectionContainer}
              >
                <Text
                  style={styles.title}
                >
                  {filtered.genre}
                </Text>
                <GenresContainer data={filtered}/>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default MainScreen;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  vScrollView: {
    flex: 1,
    backgroundColor: 'rgb(23, 41, 60)',
  },
  sectionContainer: {
    marginTop: 32,
    color: 'white',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
  },  
});