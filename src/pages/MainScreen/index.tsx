import React, { useState, useEffect } from 'react'
import { getGeneres, getPopularMovies } from '../../services/apiMovies';
import CardContainer from '../../components/CardContainer';
import GenresContainer from '../../components/GenresContainer';
import { 
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native'

import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

interface IProps {

}

// export default function Welcome() {
const MainScreen: React.FC<IProps> = () =>{
  
  const navigation = useNavigation<any>();

  // const [movies, setMovies] = useState([]);
  // const [selectedMovie, setSelectedMovie] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const fetchPopularMovies = async () => {
    const data = await getPopularMovies();
    const popularMovies = data.results;
    // console.log('popularMovies: ', popularMovies);
    setPopularMovies(popularMovies);
  }

  const fetchGeneres = async () => {
    const data = await getGeneres();
    const genres = data.genres;
    // console.log('generes: ', genres);
    
    setGenres(genres);
  }

  const HashChangeEvent = () => {
    // console.log('teste');
    // console.log(movies.results);
    
    
    // movies.results.map((movie, index) => {
    //   console.log('filme: ', index);
    //   // console.log(movie);
    //   console.log(movie['title']);
    //   console.log('-----------------');
    // })    


  }

  useEffect(() => {
    fetchPopularMovies();
    fetchGeneres();
  }, [])


  return (
    <View style={styles.container}>
    
      {/* {genres?.map(({name}, index) => { */}
      {/* {genres?.map((genre, index) => {
        return(
          <Text key={index}>{genre.name}</Text>
          // <GenresContainer key={index} genre={genre}/>
        )
      })
      } */}


      <GenresContainer genres={genres}/>
      {/* <CardContainer movies={popularMovies}/> */}



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