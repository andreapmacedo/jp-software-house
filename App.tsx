// import { NativeBaseProvider } from 'native-base';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { View, LogBox } from 'react-native';
import React from 'react';

LogBox.ignoreLogs([
  "Overwriting fontFamily style attribute preprocessor"
]);

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    // <NativeBaseProvider> 
      <NavigationContainer>
        {/* <Routes/> */}
        {/* {fontsLoaded ? <Routes /> : <Loading />} */}
        {fontsLoaded ? <Routes /> : <View  />}
      </NavigationContainer>
    // </NativeBaseProvider> 
  );
}
