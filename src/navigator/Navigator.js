import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Home from '../screens/Home'
import Details from '../screens/Details'

const Stack = createStackNavigator()
const screenOptionStyle = {
  headerShown: false
} 

const HomeStacKNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}

export default HomeStacKNavigator