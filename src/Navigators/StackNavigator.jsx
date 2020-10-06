import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Login/Login';
import Info from '../Screens/Edicaoedelete/Info';
import RotasTab from '../Navigators/Tabnavigatorbottom'
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Lista" component={RotasTab} />
    <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  );
}

export default StackNavigator;