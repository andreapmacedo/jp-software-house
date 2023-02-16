import React from 'react';
import { 
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

// const screenHeight = Dimensions.get('window').height 
// const screenWidth = Dimensions.get('window').width 

// const {height, width, scale, fontScale} = useWindowDimensions();

export default function Welcome() {
  // const {height, width, scale, fontScale} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo} >
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/logo.png')}
          style={{ width: 200, height: 200 }}
          // style={{ width: '100%'}}
          resizeMode="contain" 
        />
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Welcome to the</Text>
        <Text style={styles.text}>React Native</Text>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate('SignIn')}
          
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
  },
  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
  },
  containerForm: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 28,
    backgroundColor: 'white',
    marginBottom: 12,
  },
  text: {
    fontWeight: 'bold',
    marginTop: 28,
    backgroundColor: 'white',
    marginBottom: 12,
  },
  buttonText: {
    backgroundColor: 'white',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});