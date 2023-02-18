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

const GenresContainer: React.FC<IProps> = ({data}) =>{

  const { genre, movies } = data;
  // console.log('results: ', movies);
  const ref = useRef(null);
  const [focused, setFocused] = useState(false);
  const [presed, setPresed] = useState(false);
  const [ isPress, setIsPress ] = useState(false);
  // const [ onUnderlayed, setOnUnderlayed ] = useState(false);
  

  const handleFocus = () => {
    setFocused(true);
    ref.current.focus();
  };

  const handleBlur = () => {
    setFocused(false);
    ref.current.blur();
    // console.log(ref.current);    
  };

  const touchProps = {
    activeOpacity: 1,
    underlayColor: 'blue',
    // style: isPress ? styles.wrapperFocused : styles.wrapper,
    style: isPress ? styles.wrapperFocused : null,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => setIsPress(false),
    // onBlur: () => setIsPress(true)
  };

  const getCardStyle = () => {
    // return styles.imagePress
    return isPress ? styles.smallImage : styles.smallImage
  }

  const getContainerStyle = () => {
    return styles.selectedCard

  }

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
              // style={[styles.wrapper, focused ? styles.wrapperFocused : null]}
              // style={getContainerStyle()}
              key={index}
            >
              <View style={ styles.card }>
                <MainCard movie={movie} style={ getCardStyle() }/>
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
    // backgroundColor: 'rgb(23, 41, 60)',
  },
  wrapperFocused: {
    backgroundColor: 'rgba(29, 70, 114, 0.836)',
    borderRadius: 8,
    margin: 10,
  },
  hScrollView: {
    // backgroundColor: 'green',
    backgroundColor: 'rgb(23, 41, 60)',
    marginHorizontal: 16,
  },
  card: {
    flex: 1,
    // backgroundColor: 'purple',
    // backgroundColor: 'rgba(29, 70, 114, 0.836)',
    // width: 220,
    // width: '100%',
    borderRadius: 8,
    // elevation: 3,
    // shadowOffset: { width: 0, height: 2 },
    // shadowColor: '#333',
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
    // marginHorizontal: 4,
    // marginVertical: 6,
    padding: 10,
    margin: 10,
  },
  propA: {
    width: 300,
    height: 300,

  },
  propB: {
    width: 200,
    height: 200,
  },
  smallImage: {
    width: 200,
    height: 200,
  },
  largeImage: {
    width: 300,
    height: 300,
  },
});

