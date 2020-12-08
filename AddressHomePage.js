import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function AddressHomePage(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.input_container}>{props.address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input_container: {
    fontFamily: Montserrat_400Regular,
    backgroundColor: "white",
    fontSize: "120%",
    width: "100%",
    height: "100%",
    marginBottom: "2%",
    marginTop: "2%",
    borderRadius: "25px",
    paddingTop: "2%",
    paddingBottom: "2%",
    textAlign: "center",
  },
});
