import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const IncorrectAttemptsScreen = ({ route }) => {
    const { incorrectAttempts } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Incorrect Attempts:</Text>
            {incorrectAttempts.map((attempt, index) => (
                <View key={index} style={styles.attemptContainer}>
                    <Text style={styles.attemptValues}>Values:</Text>
                    <View style={styles.valuesContainer}>
                        {Object.keys(attempt.values).map((char, idx) => (
                            <View key={idx} style={styles.valueItem}>
                                <Image
                                    source={attempt.values[char].imagePath}
                                    style={styles.valueImage}
                                />
                                <Text style={styles.valueText}>{`=${attempt.values[char].value}`}</Text>
                            </View>
                        ))}
                    </View>
                    <Text style={styles.attemptEquation}>Equation:</Text>
                    <View style={styles.equationContainer}>
                        {attempt.equation.split(' ').map((part, idx) => (
                            <View key={idx} style={styles.equationItem}>
                                {attempt.values.hasOwnProperty(part) ? (
                                    <Image
                                        source={attempt.values[part].imagePath}
                                        style={styles.equationImage}
                                    />
                                ) : (
                                    <Text style={styles.equationTextPart}>{part}</Text>
                                )}
                                {idx !== attempt.equation.split(' ').length - 1 && (
                                    <Text> </Text>
                                )}
                            </View>
                        ))}
                    </View>
                    <Text style={styles.attemptAnswer}>{`Answer: ${attempt.answer}`}</Text>
                </View>
            ))}
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
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    attemptContainer: {
        marginBottom: 20,
    },
    attemptValues: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    valuesContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    valueItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    valueImage: {
        width: 30,
        height: 30,
    },
    valueText: {
        fontSize: 14,
        marginLeft: 5,
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

export default IncorrectAttemptsScreen;
