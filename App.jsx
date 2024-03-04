// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Level1 from './Components/Level1';
import Level2 from './Components/Level2';
import Start from './Components/Start';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Level 1" component={Level1} />
        <Stack.Screen name="Level 2" component={Level2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
