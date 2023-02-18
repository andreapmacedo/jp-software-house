import React, { useRef, useState } from 'react'
import MainCard from '../MainCard';
import {
  ScrollView, 
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

interface IProps {

}

// const GenresContainer: React.FC<IProps> = ({genres, movies}) =>{
const GenresContainer: React.FC<IProps> = ({data}) =>{

  const { genre, movies } = data;
  // console.log('results: ', movies);
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
    inputRef.current.focus();
  };

  const handleBlur = () => {
    setFocused(false);
    inputRef.current.blur();
    // console.log(inputRef.current);    
  };



  return (
    <>
     <ScrollView
        style={styles.scrollView}
        horizontal={true}
      >
        { movies?.map((movie, index) => { 
          return(
            <TouchableHighlight
              onPress={handleFocus}
              onBlur={handleBlur}
              style={[styles.wrapper, focused ? styles.wrapperFocused : null]}
              key={index}
              >
              <View style={ styles.card }
                ref={inputRef}
                >
                <MainCard movie={movie} />
              </View>
            </TouchableHighlight>
          )
        })}
      </ScrollView>
    </>
  )   
}

export default GenresContainer;

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: 'white',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
  },
  wrapperFocused: {
    borderColor: 'blue',
    backgroundColor: 'white',

  },
  scrollView: {
    flex: 1,
    backgroundColor: 'green',
    marginHorizontal: 20,
  },
  card: {
    backgroundColor: 'yellow',
    width: 220,
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 10,
  },
});

