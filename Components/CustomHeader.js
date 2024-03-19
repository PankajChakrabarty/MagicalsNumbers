import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Expo for vector icons

const CustomHeader = ({ navigation }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = async () => {
    try {
      // Remove the authentication token from AsyncStorage
      await AsyncStorage.removeItem("authToken");
      // Navigate to the login screen
      navigation.replace("Login");
    } catch (err) {
      console.log("Error logging out:", err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.systemElements}>
        <Text style={[styles.systemElement, styles.boldText]}>Home</Text>
      </View>
      <TouchableOpacity style={styles.headerButton} onPress={toggleMenu}>
        <Ionicons name="menu" size={30} color="black" />
      </TouchableOpacity>
      {showMenu && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>User Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 35,
    backgroundColor: "#EDBEA4",
  },
  headerButton: {
    padding: 10,
  },
  systemElements: {
    flexDirection: "row",
    alignItems: "center",
  },
  systemElement: {
    color: "black",
    marginRight: 10,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  menu: {
    position: "absolute",
    top: 80, // Adjust top position as needed
    right: 0.1,
    backgroundColor: "#EDBEA4",
    borderRadius: 5,
    padding: 10,
    elevation: 3,
  },
  menuItem: {
    paddingVertical: 5,
  },
  menuText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CustomHeader;
