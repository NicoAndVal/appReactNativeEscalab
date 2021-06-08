import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import Login from '../screens/LoginScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { SettingScreen } from '../screens/SettingScreen';

const Stack = createStackNavigator();

export const  Navigation =() => {

  return (
      <Stack.Navigator
        headerMode={false}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}