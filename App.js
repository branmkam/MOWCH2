import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Login2 from "./Login2.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Login2 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C5063",
    alignItems: "center",
    justifyContent: "center",
  },
});
