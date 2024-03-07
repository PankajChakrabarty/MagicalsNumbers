// Start.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Button,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Home1 = () => {

      const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('Level 1');
  };

  return (
    <View style={styles.container}>

    <Text style= {styles.normalText}> Press the Button Below to Start Play</Text>
    <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>PLAY</Text>
      </TouchableOpacity>
      {/* Add any additional content for your Level2 page */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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

export default Home1;
