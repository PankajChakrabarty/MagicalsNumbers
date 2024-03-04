// Level2.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Level2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Congratulations! You've reached Level 2!</Text>
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
});

export default Level2;
