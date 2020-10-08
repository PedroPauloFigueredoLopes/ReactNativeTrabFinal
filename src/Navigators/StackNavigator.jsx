<<<<<<< HEAD
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login/Login";
import RotasTab from "../Navigators/Tabnavigatorbottom";
=======
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Login/Login';
import Info from '../Screens/Edicaoedelete/Info';
import RotasTab from '../Navigators/Tabnavigatorbottom'
>>>>>>> 6186fcf63cce0f69f817146ea5c2acff0f42f9a6
const Stack = createStackNavigator();

function StackNavigator() {
  return (
<<<<<<< HEAD
    <Stack.Navigator initialRouteName="">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Lista" component={RotasTab} />
=======
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Lista" component={RotasTab} />
    <Stack.Screen name="Info" component={Info} />
>>>>>>> 6186fcf63cce0f69f817146ea5c2acff0f42f9a6
    </Stack.Navigator>
  );
}

export default StackNavigator;
