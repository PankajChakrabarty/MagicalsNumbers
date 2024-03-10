// Start.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";


const Start = () => {

      const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('Level 1');
  };
  const navigateToLogin = () => {
    navigation.navigate('Register');
  };
  const handleLogout = async () => {
    try {
      // Remove the authentication token from AsyncStorage
      await AsyncStorage.removeItem("authToken");
      // Navigate to the login screen
      navigation.replace("Login");
    } catch (err) {
      console.log("Error logging out:", err);
    }
  };

  return (
    <View style={styles.container}>

    <Text style= {styles.normalText}> Press the Button Below to Start Play</Text>
    <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>PLAY</Text>
      </TouchableOpacity>
      {/* Add any additional content for your Level2 page */}
      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
    button: {
    flexDirection:'row',
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default Start;
