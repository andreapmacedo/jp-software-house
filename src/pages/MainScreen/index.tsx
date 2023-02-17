import React, { useRef, useState } from 'react'
import { 
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native'

import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

interface IProps {

}

// export default function Welcome() {
const MainScreen: React.FC<IProps> = () =>{
  
  const navigation = useNavigation<any>();

  const  [movies, setMovies] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo} >
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/logo.png')}
          style={{ width: 200, height: 200 }}
          resizeMode="contain" 
        />
      </View>

      <View style={styles.containerForm}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
          hasTVPreferredFocus
          tvParallaxProperties={{ magnification: 1.5 }}
        >
          <Text style={styles.buttonText}>Button3df</Text>
        </TouchableHighlight>

      </View>

    </View>
  )
}

export default MainScreen;

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