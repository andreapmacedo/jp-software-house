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

const CardContainer: React.FC<IProps> = ({movies}) =>{

  console.log('movies: ', movies);

  
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
    inputRef.current.focus();
  };

  const handleBlur = () => {
    setFocused(false);
    inputRef.current.blur();
    console.log(inputRef.current);
    
    
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        { movies.results?.map((movie, index) => { 
          return(
            <TouchableHighlight
              onPress={handleFocus}
              onBlur={handleBlur}
              style={[styles.wrapper, focused ? styles.wrapperFocused : null]}
              >
              <View
                key={index}
                ref={inputRef}
                >
                <MainCard movie={movie} />
              </View>
            </TouchableHighlight>
          )
          // return(
          //   <View key={index}>
          //   <TouchableHighlight
          //     onPress={handleFocus}
          //     // onBlur={handleBlur}
          //     style={[styles.wrapper, focused ? styles.wrapperFocused : null]}
          //   >
              
          //     {/* <MainCard movie={movie} /> */}
          //     <View
          //       // onBlur={handleBlur}
          //       ref={inputRef}
          //     >
          //       <MainCard movie={movie} />
          //     </View>
          //   </TouchableHighlight>
          //   </View>
          // )
        })}
      </ScrollView>
    </SafeAreaView>
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
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});

