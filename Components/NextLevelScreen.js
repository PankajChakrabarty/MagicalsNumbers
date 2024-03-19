// NextLevelScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NextLevelScreen = ({ onPressYes, onPressNo, enableNextLevelButton }) => {
    return (
        <View style={styles.container}>
            <Text>Congratulations! You've completed 5 levels.</Text>
            <Text>Do you want to move to the next level?</Text>
            <TouchableOpacity onPress={onPressYes} style={styles.button}>
                <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressNo} style={styles.button}>
                <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
            {enableNextLevelButton && (
                <TouchableOpacity onPress={enableNextLevelButton} style={styles.button}>
                    <Text style={styles.buttonText}>Next Level</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default NextLevelScreen;
