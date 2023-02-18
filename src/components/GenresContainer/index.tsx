import React, { useRef, useState } from 'react'
import MainCard from '../MainCard';
import {
  SafeAreaView,
  ScrollView, 
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native'

interface IProps {

}

// const GenresContainer: React.FC<IProps> = ({genres, movies}) =>{
const GenresContainer: React.FC<IProps> = ({data}) =>{

  // console.log('name: ', genres);
  // console.log('movies: ', movies);
  // console.log('data: ', data);
  // console.log('data: ', data);
  // const [genres, setGenres] = useState(data['genres']);

  const { genre, movies } = data;

  // console.log('results: ', genre);
  console.log('results: ', movies);
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
        { movies?.map(({title}, index) => { 
          return(
            <TouchableHighlight
              // onPress={handleFocus}
              // onBlur={handleBlur}
              // style={[styles.wrapper, focused ? styles.wrapperFocused : null]}
              key={index}
              >
              <View
                // ref={inputRef}
                >
                  <Text>{title}</Text>
                
              </View>
            </TouchableHighlight>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )  
}

export default GenresContainer;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
  },
  wrapper: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
  },
  wrapperFocused: {
    borderColor: 'blue',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});

