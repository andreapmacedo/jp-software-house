import React, { useRef, useState } from 'react'
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

  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          style={[styles.wrapper, focused ? styles.wrapperFocused : null]}
          underlayColor={'rgba(29, 70, 114, 0.836)'}
        >
          <TextInput        
            onBlur={handleBlur}
            ref={inputRef}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#cacaca"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
           />
        </TouchableHighlight>

        <TouchableHighlight
          onPress={handleFocus}
          style={[styles.wrapper, focused ? styles.wrapperFocused : null]}
          underlayColor={'rgba(29, 70, 114, 0.836)'}
        >
          <TextInput        
            onBlur={handleBlur}
            ref={inputRef}
            placeholder="Sua senha"
            style={styles.input}
            placeholderTextColor="#cacaca"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
           />
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonRegister}
          onPress={handleLogin}
          underlayColor={'rgba(29, 70, 114, 0.836)'}  
        >
          <Text style={styles.registerText}>Entrar</Text>
        </TouchableHighlight>

      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(23, 41, 60)',
    color: '#d1d1d1',
    underlayColor: 'blue',
  },
  containerHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#d1d1d1',
  },
  containerForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#d1d1d1',
  },
  input: {
    height: 50,
    color: '#fff',
    fontSize: 20,
  },
  button: {
    // width: '90%',
    height: 50,
    backgroundColor: '#ededed',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#d1d1d1',
  },
  registerText: {
    fontSize: 20,
    color: '#ededed',
  },
  buttonRegister: {
    padding: 8,
    margin: 48,
    
    borderColor: 'green',
    color: 'red',
    // borderWidth: 1,
    borderRadius: 50,
    // paddingVertical: 8,
    width: '50%',
    alignSelf: 'center',
    bottom: '12%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 20,
    color: '#d1d1d1',
  },
  wrapper: {
    backgroundColor: 'transparent',
    padding: 10,
    borderBottomWidth: 1, // adiciona borda inferior
    fontSize: 20,
    borderColor: '#cacaca',
    width: '50%',
    marginBottom: 26,
    color: '#efefef',

  },
  wrapperFocused: {
    borderColor: 'green',
    color: '#fff',
  },
});