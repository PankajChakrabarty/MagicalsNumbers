// Level1.js
import { Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const win = Dimensions.get('window');

const Level1 = ({ navigation }) => {
  const images = [
    require('./Assets/1.jpg'),
    require('./Assets/2.jpg'),
    require('./Assets/3.jpg'),
    require('./Assets/4.jpg'),
    require('./Assets/5.jpg'),
    require('./Assets/6.jpg'),
    require('./Assets/7.jpg'),
    require('./Assets/8.jpg'),
    require('./Assets/9.jpg'),
    require('./Assets/10.jpg'),

    // Add more images as needed
  ];

  const answers = [27, 4, 20, 9, 12, 3, 108, [5, 40, 7], 98, 32]; // Corresponding answers for the images

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isLevel2Active, setIsLevel2Active] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      setUserAnswer('');
      setIsLevel2Active(false);
    }, 250000);

    return () => clearInterval(intervalId);
  }, [images]);

  const checkAnswer = () => {
    const correctAnswer = answers[currentIndex];
    const userEnteredAnswer = userAnswer.trim().split(',').map(Number);

    if (Array.isArray(correctAnswer)) {
      // Check if arrays are equal
      const arraysEqual =
        correctAnswer.length === userEnteredAnswer.length &&
        correctAnswer.every(
          (value, index) => value === userEnteredAnswer[index],
        );

      if (arraysEqual) {
        setIsLevel2Active(true);
      } else {
        handleIncorrectAnswer();
      }
    } else {
      const numericCorrectAnswer = parseInt(correctAnswer, 10);

      if (
        userEnteredAnswer.length === 1 &&
        userEnteredAnswer[0] === numericCorrectAnswer
      ) {
        setIsLevel2Active(true);
      } else {
        handleIncorrectAnswer();
      }
    }
  };

  const handleIncorrectAnswer = () => {
    Alert.alert('Incorrect Answer', 'Try again!', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    setUserAnswer('');
  };

  const navigateToLevel2 = () => {
    if (isLevel2Active) {
      navigation.navigate('Level 2');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode={'contain'}
        source={images[currentIndex]}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your answer"
        keyboardType="numeric"
        value={userAnswer}
        onChangeText={text => setUserAnswer(text)}
      />
      <TouchableOpacity onPress={checkAnswer} style={styles.button}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
      <View style={styles.space} />
      {isLevel2Active && (
        <TouchableOpacity onPress={navigateToLevel2} style={styles.button}>
          <Text style={styles.buttonText}>Level 2</Text>
        </TouchableOpacity>
      )}
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
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: win.width,
    height: win.height,
  },
  input: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    width: 200,
  },
  button: {
    paddingTop: 5,
    flexDirection: 'column',
    height: 30,
    width: 100,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  space: {
    width: 50,
    height: 50,
  },
});

export default Level1;
