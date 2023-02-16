import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";

// const Stack = createNativeStackNavigator();
const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  return (
    <Navigator>
      <Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Screen 
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}