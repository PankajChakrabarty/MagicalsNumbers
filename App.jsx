// App.js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./Components/navigation/StackNavigator";


export default function App() {
  return (
    <>
    <StackNavigator/>
   </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    background: '#fff',
  },
});
