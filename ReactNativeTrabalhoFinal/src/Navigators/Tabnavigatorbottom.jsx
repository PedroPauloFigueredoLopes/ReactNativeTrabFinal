import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{Text} from 'react-native';
import Cadastro from '../Screens/Cadastro/Cadastro';
import Lista from '../Screens/Cadastro/Lista';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

//function Wildcard({ title }) {
  //  return <Text>Wildcard {title}</Text>
 // }

export default function RotasTab() {
  return (
  
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Entypo name="text-document" size={24} color="blue" />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
         <Tab.Screen name="Lista" component={Lista}  />
        <Tab.Screen name="Cadastro"component={Cadastro} />
      </Tab.Navigator>
     
  
  );
}