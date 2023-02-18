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
    color: '#ededed',
  },
  containerHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ededed',
  },
  containerForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ededed',
  },
  input: {
    // width: '90%',
    height: 50,
    backgroundColor: 'transparent',
    color: '#ededed',
    fontSize: 20,
    borderRadius: 10,
    // marginBottom: 10,
    // padding: 10,
  },
  button: {
    // width: '90%',
    height: 50,
    backgroundColor: '#ededed',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#ededed',
  },
  registerText: {
    fontSize: 20,
    color: '#ededed',
  },
  buttonRegister: {
    // position: 'absolute',
    // backgroundColor: 'red',
    borderColor: 'red',
    color: 'red',
    // borderWidth: 1,
    // borderRadius: 50,
    paddingVertical: 8,
    width: '50%',
    alignSelf: 'center',
    // bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 20,
    color: '#ededed',
  },
  wrapper: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    // borderWidth: 1,
    borderBottomWidth: 2, // adiciona borda inferior
    borderColor: 'yellow',
    width: '50%',
    marginBottom: 16,
    color: '#ededed', 
  },
  wrapperFocused: {
    borderColor: 'green',
    color: '#ededed',
  },
});