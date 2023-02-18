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
  const [ onUnderlayed, setOnUnderlayed ] = useState(false);
  

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
                                   
    // style: isPress ? styles.wrapperFocused : styles.wrapper,
    // style: isPress ? styles.wrapperFocused : null,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => setIsPress(false),
    onBlur: () => setIsPress(true)
    
    
    
  };

  return (
    <>
     <ScrollView
        style={styles.hScrollView}
        horizontal={true}
      >
        { movies?.map((movie, index) => { 
          return(
            <TouchableHighlight
              {...touchProps}
              style={[styles.wrapper, focused ? styles.wrapperFocused : null]}
              key={index}
            >
              {isPress ?
              <View style={ styles.card }>
                <MainCard movie={movie} style={ styles.propA }/>
              </View>
               :
              <View style={ styles.selectedCard }>
                <MainCard movie={movie} style={ styles.propA }/>
              </View>
              }
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
    // backgroundColor: 'red',
    backgroundColor: 'rgb(23, 41, 60)',
    padding: 10,
    // borderRadius: 5,
    // borderWidth: 1,
    // borderColor: 'grey',
  },
  wrapperFocused: {
    borderColor: 'pink',
    // backgroundColor: 'pink',
  },
  hScrollView: {
    // flex: 1,
    // backgroundColor: 'green',
    backgroundColor: 'rgb(23, 41, 60)',
  },
  card: {
    flex: 1,
    // backgroundColor: 'yellow',
    // backgroundColor: 'rgb(22, 58, 96)',
    // width: 220,
    // width: '100%',
    // borderRadius: 8,
    // elevation: 3,
    // shadowOffset: { width: 0, height: 2 },
    // shadowColor: '#333',
    // shadowOpacity: 0.3,s
    // shadowRadius: 4,
    // marginHorizontal: 4,
    // marginVertical: 6,
    // padding: 10,
  },
  selectedCard: {
    flex: 1,
    // backgroundColor: 'red',
    // backgroundColor: 'rgba(29, 70, 114, 0.836)',
    // width: 220,
    // width: '100%',
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    // shadowRadius: 4,
    // marginHorizontal: 4,
    // marginVertical: 6,
    // padding: 10,
  },
  propA: {
    
    width: 300,
    height: 300,
    // marginTop: 18,
    
    // paddingTop: 4,
    // borderRadius: 2,
    // borderWidth: 1,
  },
  propB: {
    
    width: 200,
    height: 200,
    // marginTop: 18,
    
    // paddingTop: 4,
    // borderRadius: 2,
    // borderWidth: 1,
  },
});

