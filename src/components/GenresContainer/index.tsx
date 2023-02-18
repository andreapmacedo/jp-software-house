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
  const ref = useRef(null);
  const [focused, setFocused] = useState(false);
  const [presed, setPresed] = useState(false);
  const [ isPress, setIsPress ] = useState(false);

  const handleFocus = () => {
    setFocused(true);
    ref.current.focus();
  };

  const handleBlur = () => {
    setFocused(false);
    ref.current.blur();
    // console.log(ref.current);    
  };

  const handleFocusNext = () => {
    setPresed(true);
  };

  const touchProps = {
    activeOpacity: 1,
    underlayColor: 'blue',                               
    style: isPress ? styles.wrapperFocused : styles.wrapper,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => setIsPress(false),
    // onBlur: () => setIsPress(true)
  };

  return (
    <>
     <ScrollView
        style={styles.hScrollView}
        horizontal={true}
      >
        { movies?.map((movie, index) => { 
          return(
            <TouchableHighlight {...touchProps}
            >
            <View style={ styles.card }
                key={index}
                >
                <MainCard movie={movie} />
              </View>
            </TouchableHighlight>
          )
        })}
      </ScrollView>
    </>
  )   
  // return (
  //   <>
  //    <ScrollView
  //       style={styles.hScrollView}
  //       horizontal={true}
  //     >
  //       { movies?.map((movie, index) => { 
  //         return(
  //           <TouchableHighlight
  //             onPress={handleFocus}
  //             onBlur={handleBlur}
  //             style={[styles.wrapper, focused ? styles.wrapperFocused : null]}
  //             key={index}
  //             ref={ref}
  //             >
  //             <View style={ styles.card }
  //               >
  //               <MainCard movie={movie} />
  //             </View>
  //           </TouchableHighlight>
  //         )
  //       })}
  //     </ScrollView>
  //   </>
  // )   
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
    borderColor: 'pink',
    backgroundColor: 'pink',
  },
  hScrollView: {
    // flex: 1,
    backgroundColor: 'green',
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

