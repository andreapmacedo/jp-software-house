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

const GenresContainer: React.FC<IProps> = ({genres}) =>{

  console.log('name: ', genres);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
        { genres?.map(({name}, index) => { 
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
                  <Text key={index}>{name}</Text>
                
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

