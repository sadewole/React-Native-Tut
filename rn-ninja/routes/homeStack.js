import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Review Details' component={ReviewDetails} />
    </Stack.Navigator>
  );
}
