import React, { useRef, useState } from 'react'
import { getMovieById, getPopularMovies } from '../../services/apiFilmes';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native'

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {

  const navigation = useNavigation<any>();

  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [movies, setMovies] = useState([]);
  // const [selectedMovie, setSelectedMovie] = useState(null);


  const handleLogin = async () => {        
    
    // if (email === '' || password === '') {
    //   // return alert('Preencha todos os campos'); 
    //   return;
    //   // TODO: Implementar um focu no input com estilo de erro 
    // }

    navigation.navigate('MainScreen')          
  }  

  const handleFocus = () => {
    setFocused(true);
    inputRef.current.focus();
  };

  const handleBlur = () => {
    setFocused(false);
    inputRef.current.blur();
  };

  // const handleGetMovie = async () => {
  //   // const movie = await getMovieById('tt0076759');
  //   const movie = await getMovieById(550);
  //   setSelectedMovie(movie);
  // }

  return (
    
    <View style={styles.container}>
      <Animatable.View 
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View 
        animation="fadeInUp"
        delay={500}
        style={styles.containerForm}
      >

        <TouchableHighlight
          onPress={handleFocus}
          // onBlur={handleBlur}
          style={[styles.wrapper, focused ? styles.wrapperFocused : null]}
        >
          <TextInput        
            onBlur={handleBlur}
            ref={inputRef}
            placeholder="Digite seu e-mail"
            style={styles.input}
            // value={value}
            value={email}
            onChangeText={setEmail}
           />
        </TouchableHighlight>

        <TouchableHighlight
          onPress={handleFocus}
          // onBlur={handleBlur}
          style={[styles.wrapper, focused ? styles.wrapperFocused : null]}
        >
          <TextInput        
            onBlur={handleBlur}
            ref={inputRef}
            placeholder="Sua senha"
            style={styles.input}
            // value={value}
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
           />
        </TouchableHighlight>



        <TouchableHighlight
          style={styles.buttonRegister}
          onPress={handleLogin}  
        >

          <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableHighlight>

      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
  },
  containerHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'darkblue',
  },
  registerText: {
    fontSize: 20,
    color: 'darkblue',
  },
  buttonRegister: {
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
  message: {
    fontSize: 20,
    color: 'darkblue',
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
});