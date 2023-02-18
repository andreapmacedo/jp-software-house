import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { 
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native'

interface IProps {

}

const Welcome: React.FC<IProps> = () =>{
  
  const navigation = useNavigation<any>();

  // Para redirecionamento automático
  // useEffect(() => {
  //   const redirectTimeout = setTimeout(() => {
  //     navigation.navigate('SignIn'); // redireciona para outra rota
  //   }, 1000); // 5 segundos

  //   return () => clearTimeout(redirectTimeout); // limpa o timeout ao desmontar o componente
  // },[]);

  return (
    <View style={styles.container}>
      

      <View style={styles.containerLogo} >
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/logo-d.png')}
          style={{ width: 200, height: 200 }}
          resizeMode="contain" 
        />
        <Animatable.Text
          animation="fadeInUp"
          style={styles.title}
          >
            SOFTWARE HOUSE
        </Animatable.Text>
      </View>
      <View >
        <TouchableHighlight
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('SignIn')}
          hasTVPreferredFocus
          tvParallaxProperties={{ magnification: 1.5 }}
          underlayColor={'rgba(29, 70, 114, 0.836)'}
        >
          <Text style={styles.buttonRegisterText}>Entrar</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(23, 41, 60)',
  },
  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(23, 41, 60)',
  },
  buttonRegisterText: {
    fontSize: 20,
    color: '#ededed',
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 30,
    color: '#ededed',
    // textDecorationLine: 'underline',
  },
  buttonRegister: {
    padding: 8,
    margin: 48,
    borderColor: 'green',
    color: 'red',
    borderRadius: 50,
    width: '50%',
    alignSelf: 'center',
    bottom: '12%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Welcome;