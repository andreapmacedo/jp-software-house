
import React from 'react'
import { View,
   Text,
   StyleSheet,
   TextInput,
   TouchableOpacity
} from 'react-native'


import * as Animatable from 'react-native-animatable';

export default function SignIn() {
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
        <Text>Bem-vindo(a)</Text>
        <TextInput
          placeholder="Digite um email"
          style={styles.input}
        />
        <TextInput
          placeholder="Sua senha"
          style={styles.input}
        />
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
});