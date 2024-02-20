import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Row } from 'native-base';


const Home = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('Level 1');
  };
  const handleButtonPress1 = () => {
    navigation.navigate('Level 2');
  };
 const handleButtonPress2 = () => {
    navigation.navigate('Level 3');
  };
 const handleButtonPress3 = () => {
    navigation.navigate('Level 4');
  };

 const handleButtonPress4 = () => {
    navigation.navigate('Level 5');
  };
   const handleButtonPress5 = () => {
    navigation.navigate('Level 6');
  };
 const handleButtonPress6 = () => {
    navigation.navigate('Level 7');
  };
 const handleButtonPress7 = () => {
    navigation.navigate('Level 8');
  };
   const handleButtonPress8 = () => {
    navigation.navigate('Level 9');
  };
 const handleButtonPress9 = () => {
    navigation.navigate('Level 10');
  };

const Pro = () => {

};

  return (
    <>
    <View style={styles.container}>
    <Text style={styles.text}> Welcome to Math Master</Text>
    <Text style= {styles.normalText}> Press the Button Below to Start Play</Text>

      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Go to Level 1</Text>
      </TouchableOpacity>
  
      <TouchableOpacity onPress={handleButtonPress1} style={styles.button}>
        <Text style={styles.buttonText}>Go to Level 2</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleButtonPress2} style={styles.button}>
        <Text style={styles.buttonText}>Go to Level 3</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleButtonPress3} style={styles.button}>
        <Text style={styles.buttonText}>Go to Level 4</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleButtonPress4} style={styles.button}>
        <Text style={styles.buttonText}>Go to Level 5</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleButtonPress5} style={styles.button}>
        <Text style={styles.buttonText}>Go to Level 6</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleButtonPress6} style={styles.button}>
        <Text style={styles.buttonText}>Go to Level 7</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleButtonPress7} style={styles.button}>
        <Text style={styles.buttonText}>Go to Level 8</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleButtonPress8} style={styles.button}>
        <Text style={styles.buttonText}>Go to Level 9</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleButtonPress9} style={styles.button}>
        <Text style={styles.buttonText}>Go to Level 10</Text>
      </TouchableOpacity>
  

        <TouchableOpacity onPress={Pro} style={styles.text}>
        <Text style={styles.text}>Go For Math Master Pro</Text>
      </TouchableOpacity>

    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  containerFluid: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    fontSize:20,
    fontWeight:'700',
    backgroundColor:'grey',
  },
   normalText: {
    fontSize:15,
    color: 'white',
    fontWeight:'500',
    backgroundColor:'purple',
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

export default Home;
