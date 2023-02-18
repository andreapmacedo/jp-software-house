import React, { useRef, useState } from 'react'
import MainCard from '../MainCard';
// import CardContainer from '../../components/CardContainer';
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

  const { genre, movies } = data;

  // console.log('results: ', genre);
  console.log('results: ', movies);

  
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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
        {/* { movies?.map(({title}, index) => {  */}
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
    </SafeAreaView>
  )  
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <ScrollView style={styles.scrollView}>
        
  //       { movies?.map(({title}, index) => { 
  //         return(
  //           <TouchableHighlight
  //             // onPress={handleFocus}
  //             // onBlur={handleBlur}
  //             // style={[styles.wrapper, focused ? styles.wrapperFocused : null]}
  //             key={index}
  //             >
  //             <View
  //               // ref={inputRef}
  //               >
  //                 {/* <Text>{title}</Text> */}
  //                 <CardContainer movies={movies} />
                
  //             </View>
  //           </TouchableHighlight>
  //         )
  //       })}
  //     </ScrollView>
  //   </SafeAreaView>
  // )  
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
    display: 'flex',
    flex: 2,
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
  },
  touchable: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
  },
});

