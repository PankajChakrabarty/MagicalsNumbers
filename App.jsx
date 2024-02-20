
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home';
import Level1 from "./Components/Level1";
import Level2 from "./Components/Level2";
import Level3 from "./Components/Level3";
import Level4 from "./Components/Level4";
import Level5 from "./Components/Level5";
import Level6 from "./Components/Level6";
import Level7 from "./Components/Level7";
import Level8 from "./Components/Level8";
import Level9 from "./Components/Level9";
import Level10 from "./Components/Level10";



const Stack = createStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Level 1" component={Level1} />
        <Stack.Screen name="Level 2" component={Level2} />
         <Stack.Screen name="Level 3" component={Level3} />
         <Stack.Screen name="Level 4" component={Level4} />
         <Stack.Screen name="Level 5" component={Level5} />
       <Stack.Screen name="Level 6" component={Level6} />
       <Stack.Screen name="Level 7" component={Level7} />
       <Stack.Screen name="Level 8" component={Level8} />
       <Stack.Screen name="Level 9" component={Level9} />
       <Stack.Screen name="Level 10" component={Level10} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;