import React, { useRef, useState } from 'react'
import MainCard from '../MainCard';
import {
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

interface IProps {

}

const CardContainer: React.FC<IProps> = ({movies}) =>{

  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
    inputRef.current.focus();
  };

  const handleBlur = () => {
    setFocused(false);
    inputRef.current.blur();
  };

  return (
    <>
      { movies?.map((movie, index) => { 
        return(
          <TouchableHighlight
            onPress={handleFocus}
            onBlur={handleBlur}
            style={[styles.wrapper, focused ? styles.wrapperFocused : null]}
            key={index}
            >
            <View
              ref={inputRef}
              >
              <MainCard movie={movie} />
            </View>
          </TouchableHighlight>
        )
      })}
    </>
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
  scrollView: {
    backgroundColor: 'green',
    marginHorizontal: 20,
  },
});

