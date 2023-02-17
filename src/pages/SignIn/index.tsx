import React, { useRef, useState } from 'react'
import { View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native'

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {

  const navigation = useNavigation<any>();

  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  const handleClick = () => {
    inputRef.current.focus();
  };
  
  const handleChange = (text) => {
    setValue(text);
  };


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
          // onBlur={handleBlur}
          style={[styles.wrapper, focused ? styles.wrapperFocused : null]}
        >
          <TextInput        
            onBlur={handleBlur}
            ref={inputRef}
            placeholder="Sua senha"
            style={styles.input}
            value={value}
            onChangeText={handleChange}

           />
        </TouchableHighlight>



        <TouchableHighlight
          style={styles.buttonRegister}
          // ref={ref_button2}
          // hasTVPreferredFocus
          // tvParallaxProperties={{ magnification: 1.5 }}
          onPress={() => navigation.navigate('Welcome')}
          
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