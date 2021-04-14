import React from 'react';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {PlanDetail} from './screens/'
import Tabs from './navigation/tabs'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Tabs} />
        <Stack.Screen name='PlanDetail' component={PlanDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

