import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const RandomImage = () => {
  // Array of image paths or require statements
  const images = [
    require('./Assets/1.png'),
    require('./Assets/Background.png'),
    require('./Assets/unnamed.png'),
    // Add more images as needed
  ];

 const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

   return (
    <View style={styles.container}>
      <Image style={styles.image} source={randomImage} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Set the desired width
    height: 200, // Set the desired height
    resizeMode: 'cover', // Adjust as needed (cover, contain, stretch, etc.)
  },
});
export default RandomImage;