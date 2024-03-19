import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Start from "../Start";
import Level1 from "../Level1";
import Level2 from "../Level2";
import GameScreen from "../GameScreen";
import CustomHeader from "../CustomHeader";

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
        <Stack.Screen
          name="Home"
          component={Start}
          options={{
            header: (props) => <CustomHeader {...props} />,
          }}
        />
        <Stack.Screen name="Level 1" component={Level1} />
        <Stack.Screen name="Level 2" component={Level2} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
