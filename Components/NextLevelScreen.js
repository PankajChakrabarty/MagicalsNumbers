import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const NextLevelScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { incorrectAttempts } = route.params;
    const [showIncorrectAttempts, setShowIncorrectAttempts] = useState(false);

    const handleContinue = () => {
        navigation.navigate('GameScreen', { incorrectAttempts });
    };

    const characterImages = {
        Anna: require('./Assets/chrc1.png'),
        Elsa: require('./Assets/chrc2.png'),
        Kristoff: require('./Assets/chrc3.png'),
        Olaf: require('./Assets/chrc4.png'),
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Congratulations! You have unlocked the next level.</Text>
            <Text style={styles.text}>Would you like to continue or practice more?</Text>
            <TouchableOpacity style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShowIncorrectAttempts(true)}
            >
                <Text style={styles.buttonText}>Practice More</Text>
            </TouchableOpacity>

            {showIncorrectAttempts && incorrectAttempts.length > 0 && (
                <View style={styles.incorrectAttemptsContainer}>
                    <Text style={styles.incorrectAttemptsTitle}>Incorrect Attempts:</Text>
                    {incorrectAttempts.map((attempt, index) => (
                        <View key={index} style={styles.attemptContainer}>
                            <Text style={styles.attemptValues}>Values:</Text>
                            <View style={styles.equationContainer}>
                                {Object.keys(attempt.values).map((char, index) => (
                                    <View key={index} style={styles.equationItem}>
                                        <Image
                                            source={characterImages[char]}
                                            style={styles.equationImage}
                                        />
                                        <Text style={styles.equationTextPart}>{`=${attempt.values[char].value}`}</Text>
                                    </View>
                                ))}
                            </View>
                            <Text style={styles.attemptEquation}>Equation:</Text>
                            <View style={styles.equationContainer}>
                                {attempt.equation.split(' ').map((part, index) => (
                                    <View key={index} style={styles.equationItem}>
                                        {characterImages.hasOwnProperty(part) ? (
                                            <Image
                                                source={characterImages[part]}
                                                style={styles.equationImage}
                                            />
                                        ) : (
                                            <Text style={styles.equationTextPart}>{part}</Text>
                                        )}
                                        {index !== attempt.equation.split(' ').length - 1 && (
                                            <Text> </Text>
                                        )}
                                    </View>
                                ))}
                            </View>
                            <Text style={styles.attemptAnswer}>{`Answer: ${attempt.answer}`}</Text>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    incorrectAttemptsContainer: {
        marginBottom: 20,
    },
    incorrectAttemptsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    attemptContainer: {
        flexDirection:'column',
        marginBottom: 10,
    },
    attemptValues: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    attemptEquation: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    equationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    equationItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    equationImage: {
        width: 30,
        height: 30,
    },
    equationTextPart: {
        fontSize: 14,
    },
    attemptAnswer: {
        fontSize: 14,
    },
});

export default NextLevelScreen;
