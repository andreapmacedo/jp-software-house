import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native'

export default function SignIn() {

  const navigation = useNavigation<any>();
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {        
    
    // Validação de campos dispensada por motivo prático
    // if (email === '' || password === '') {
    //   return alert('Preencha todos os campos'); 
    // }
    // const emailRegex = /\S+@\S+\.\S+/;
    // if (!emailRegex.test(email)) {
    //   //   return alert('Por favor, digite um email válido.'); 
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
        <View >
          <Animatable.Image
            // animation="flipInY"
            source={require('../../assets/capa-2.png')}
            style={styles.capa}
            // resizeMode="contain" 
          />
        </View>
      </Animatable.View>
      <Animatable.View 
        animation="fadeInUp"
        delay={500}
        style={styles.containerForm}
      >
        <View style={styles.loginContainer}>
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
              placeholder="Digite sua senha"
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
            <Text style={styles.buttonRegisterText}>Entrar</Text>
          </TouchableHighlight>
        </View>
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
  capa:{
    width: 1080,
    height: 300,
  },
  containerHeader: {
    flex: 1,
    justifyContent: 'center',
    position : 'absolute',
    alignItems: 'center',
    color: '#d1d1d1',
    backgroundColor: 'white',
    width: '100%',
  },
  containerForm: {
    flex: 1,
    position : 'absolute',
    width: '100%',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#d1d1d1',
    
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(23, 41, 60)',
    alignItems: 'center',
    color: '#d1d1d1',
    width: '100%',
    
    overflow: 'hidden',
    padding: 16,
  },
  input: {
    height: 50,
    color: '#fff',
    fontSize: 15,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderWidth: 1,
    borderColor: '#cacaca',
    paddingLeft: 16,
  },
  buttonRegisterText: {
    fontSize: 20,
    color: '#ededed',
    textDecorationLine: 'underline',
  },
  buttonRegister: {
    padding: 8,
    borderColor: 'green',
    color: 'red',
    borderRadius: 50,
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: 'transparent',
    padding: 2,
    borderWidth: 1, // adiciona borda inferior
    fontSize: 20,
    borderColor: '#cacaca',
    width: '50%',
    marginBottom: 26,
    color: '#efefef',
    borderRadius: 8,
  },
  wrapperFocused: {
    borderColor: 'green',
    color: '#fff',
  },
});