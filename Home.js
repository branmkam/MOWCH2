import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import AddressHomePage from "./AddressHomePage";
import { fireAuth } from "./firebase";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View // Start button
        style={styles.start}
      >
        <Button title="Start" color="#C2D82F" width="100%" height="100%" />
      </View>
      <View>
        <AddressHomePage address={"heyeywya\nhey".replace(/\\n/g, "\n")} />
        {/* replace that hey thing with the string */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },

  start: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
