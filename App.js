import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { Platform, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';

function LogoTitle() {
  return(
    <Image source = {{uri:'https://i.pinimg.com/originals/2d/0f/50/2d0f50e8e4f6b233c7cf70b4bd36f89c.png'}}
   style = {{ width: 50, height: 50, 
    ...Platform.select({
      android: {
        marginLeft:165
      }
    })
  }}
   />
  )
}

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
         <Stack.Navigator 
         screenOptions= {{
          headerStyle : {
            backgroundColor:'purple',
          },
          headerTintColor:'white',
          fontWeight:'bold',
         }}
         >
         <Stack.Screen
          name="Home" 
          component={HomeScreen}
          options={{ title:'Welcome Home',
        headerTitle: props => <LogoTitle {...props} />
        }}
    
          />
         <Stack.Screen 
         name="About" 
         component={AboutScreen} 
         options={{ title:'Welcome About' }}
         />
         <Stack.Screen 
         name="Contact" 
         component={ContactScreen} 
         options={{ title:'Welcome Contact' }}
         />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
