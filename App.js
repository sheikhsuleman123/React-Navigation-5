import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
         <Stack.Navigator>
         <Stack.Screen
          name="Home" 
          component={HomeScreen}
          options={{ title:'Welcome Home' ,
          headerStyle : {
            backgroundColor:'purple',
          },
          headerTintColor:'white',
          fontWeight:'bold',
        }}
          />
         <Stack.Screen 
         name="About" 
         component={AboutScreen} 
         options={{ title:'Welcome About',
         headerStyle : {
          backgroundColor:'purple',
        },
        headerTintColor:'white',
        fontWeight:'bold',
      }} 
         />
         <Stack.Screen 
         name="Contact" 
         component={ContactScreen} 
         options={{ title:'Welcome Contact',
         headerStyle : {
          backgroundColor:'purple',
        },
        headerTintColor:'white',
        fontWeight:'bold',
        }}
         />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
