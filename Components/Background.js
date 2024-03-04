import React from 'react';
import { Dimensions } from 'react-native';
import { View, StyleSheet, ImageBackground } from 'react-native';

const win = Dimensions.get('window');

  const Background = () => {
    return (
    <View style= {style.container}>
        <ImageBackground style={style.image} resizeMode={'contain'} source={require("./Assets/Background.png")}/>
    </View>
    );
  };
 const style = StyleSheet.create({
  container:{
    flex: 1,
  },
  image: {
   flex: 1,
   alignSelf: "stretch",
   width: win.width,
   height: win.height,
  },
 });
 export default Background;