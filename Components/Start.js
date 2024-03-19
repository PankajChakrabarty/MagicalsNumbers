import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Start = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate("Game");
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require("./Assets/Background.png")}
        style={styles.background}
      >
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.innerContainer}>
            <Text style={styles.normalText}>
              Press the Button Below to Start Play
            </Text>
            <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
              <Text style={styles.buttonText}>PLAY</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  safeAreaView: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    marginTop: 120,
    alignItems: "center",
  },
  normalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 50,
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 100,
    backgroundColor: "#9AD0D3",
    borderRadius: 60,
  },
  buttonText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Start;
