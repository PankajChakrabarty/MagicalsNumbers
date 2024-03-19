import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Start from '../Start';
import Level1 from '../Level1';
import Level2 from '../Level2';
import GameScreen from '../GameScreen';
import NextLevelScreen from '../NextLevelScreen';
import Level3 from '../Level3'
import IncorrectAttemptsScreen from '../IncorrectAttemptsScreen';


const StackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Start} />
        <Stack.Screen name="Level 1" component={Level1} />
        <Stack.Screen name="Level 2" component={Level2} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name=" " component={NextLevelScreen} />
        <Stack.Screen name="Level 3" component={Level3} />
        <Stack.Screen name="Incorrect Attempts" component={IncorrectAttemptsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});