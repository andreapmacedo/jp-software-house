import React, { useRef, useState } from 'react'
import MainCard from '../MainCard';
import { 
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native'

interface IProps {

}

const CardContainer: React.FC<IProps> = ({movies}) =>{

  console.log('movies: ', movies);

  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setFocused(true);
    inputRef.current.focus();
  };

  const handleBlur = () => {
    setFocused(false);
    inputRef.current.blur();
  };


  return (
    <View style={styles.container}>
      
      { movies.results?.map((movie, index) => { 
        return(
          <View key={index}>
          <TouchableHighlight
            onPress={handleFocus}
            // onBlur={handleBlur}
            style={[styles.wrapper, focused ? styles.wrapperFocused : null]}
          >
            <MainCard movie={movie}/>
          </TouchableHighlight>
          </View>
        )
      })}

    </View>
  )  
}

export default CardContainer;

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
});

