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

  const touchProps = {
    activeOpacity: 1,
    underlayColor: 'blue',
    style: isPress ? styles.wrapperFocused : styles.wrapper,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => setIsPress(false),
    // onBlur: () => setIsPress(true)
  };

  const getCardStyle = () => {
    return isPress ? styles.smallImage : styles.largeImage
  }

  const getContainerStyle = () => {
    return styles.card
  }

  return (
    <ScrollView
      style={styles.hScrollView}
      horizontal={true}
    >
      { movies?.map((movie, index) => { 
        return(
          <TouchableHighlight
            {...touchProps}
            key={index}
          >
            <View style={ styles.card }>
              <MainCard movie={movie} style={ getCardStyle() }/>
            </View>
          </TouchableHighlight>
        )
      })}
    </ScrollView>
  )   
}

export default GenresContainer;

const styles = StyleSheet.create({
  wrapper: {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    margin: 4,
    padding: 4,
    width: 200,
  },
  wrapperFocused: {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(29, 70, 114, 0.836)',
    borderRadius: 4,
    margin: 4,
    padding: 4,
    width: 200,
  },
  hScrollView: {
    backgroundColor: 'rgb(23, 41, 60)',
    marginLeft: 16,
  },
  card: {
    alignItems: 'center',
    flex : 1,
    justifyContent: 'center',
    borderRadius: 4,
    margin: 4,
    padding: 4,
    width: 200,  
  },
  smallImage: {
    width: 200,
    height: 200,
  },
  largeImage: {
    width: 200,
    height: 200,
  },
});

