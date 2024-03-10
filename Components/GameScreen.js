// GameScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, Button, Dimensions, StyleSheet, Alert } from 'react-native';
import { generateRandomValues } from './utils';

const GameScreen = () => {
    const [currentValues, setCurrentValues] = useState({});
    const [equation, setEquation] = useState('');
    const [userAnswer, setUserAnswer] = useState('');
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [showNextLevelButton, setShowNextLevelButton] = useState(false);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [remainingTime, setRemainingTime] = useState(10); // Initial time in seconds
    const [message, setMessage] = useState('');

    useEffect(() => {
        initializeApp();
    }, []);

    useEffect(() => {
        if (remainingTime === 0) {
            setMessage('Out of time! Try again.');
            initializeApp();
        } else {
            const timer = setTimeout(() => {
                setRemainingTime(prevTime => prevTime - 1);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [remainingTime]);

    const initializeApp = () => {
        setMessage('');
        setUserAnswer(''); // Reset userAnswer
        const { values, equation, answer } = generateRandomValues();
        setCurrentValues(values);
        setEquation(equation);
        setCurrentAnswer(answer);
        setRemainingTime(10);
    };


    useEffect(() => {
        if (message) {
            setTimeout(() => setMessage(''), 3000); // Change the timeout as needed
        }
    }, [message]);

    const handleUserInput = () => {
        const userNumericAnswer = parseFloat(userAnswer);

        if (!isNaN(userNumericAnswer)) {
            if (userNumericAnswer === currentAnswer) {
                const updatedCorrectAnswers = correctAnswers + 1;

                if (updatedCorrectAnswers === 5) {
                    setShowNextLevelButton(true);
                    setMessage("Congratulations! You've completed 5 levels. Enable the next level button.");
                } else {
                    setMessage('Correct answer! Go for next.');
                    setTimeout(() => {
                        setMessage('');
                        initializeApp();
                    }, 3000); // Change the timeout as needed
                }

                setCorrectAnswers(updatedCorrectAnswers);
            } else {
                setMessage('Incorrect answer. Try again!');
            }
        } else {
            setMessage('Please enter a valid numeric answer.');
        }
        setUserAnswer(''); 
    };




    const getImageSource = char => {
        const imagePaths = {
            Anna: require('./Assets/Anna.jpg'),
            Elsa: require('./Assets/Elsa.jpg'),
            Kristoff: require('./Assets/Kristoff.jpg'),
            Olaf: require('./Assets/Olaf.jpg'),
            Sven: require('./Assets/Sven.jpg'),
        };

        return imagePaths[char];
    };

    return (
        <View style={styles.container}>
            <Text style={styles.remainingTime}>{`Remaining Time: ${remainingTime}s`}</Text>

            <View style={styles.imagesContainer}>
                {Object.keys(currentValues).map(char => (
                    <View key={char} style={styles.imageItem}>
                        <Image source={getImageSource(char)} style={styles.image} />
                        <Text style={styles.imageText}>{`${char}: ${currentValues[char].value}`}</Text>
                    </View>
                ))}
            </View>

            <Text style={styles.equationText}>{`Find The Value For: `}</Text>
            <View style={styles.equationContainer}>
                {equation.split(' ').map((part, index) => (
                    <View key={index} style={styles.equationItem}>
                        {currentValues.hasOwnProperty(part) ? (
                            <Image source={getImageSource(part)} style={styles.equationImage} />
                        ) : (
                            <Text style={styles.equationTextPart}>{part}</Text>
                        )}
                        {index !== equation.split(' ').length - 1 && <Text> </Text>}
                    </View>
                ))}
            </View>

            <Text style={styles.answerText}>{`Answer: ${currentAnswer}`}</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter your answer"
                keyboardType="numeric"
                onChangeText={text => setUserAnswer(text)}
                value={userAnswer}
            />

            <Text style={styles.messageText}>{message}</Text>

            {showNextLevelButton && (
                <Button title="Next Level" onPress={() => setShowNextLevelButton(false)} />
            )}
            <Button title="Check Answer" onPress={handleUserInput} />
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    imageItem: {
        marginHorizontal: 10,
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').height * 0.1,
    },
    imageText: {
        marginTop: 5,
    },
    equationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    equationItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    equationImage: {
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').height * 0.07,
    },
    equationTextPart: {
        fontSize: 18,
    },
    equationText: {
        fontSize: 20,
        marginBottom: 10,
    },
    answerText: {
        fontSize: 18,
        marginBottom: 10,
    },
    remainingTime: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').height * 0.05,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default GameScreen;
