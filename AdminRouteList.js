import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

export default function AdminRouteList(routeName, addresses) {
  return (
    <View style={styles.main_container}>
      <Text>{routeName}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main_container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "25px",
    paddingTop: "2%",
    paddingBottom: "2%",
    marginBottom: "2%",
    justifyContent: "space-around",
  },

  driver_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "10%",
    paddingBottom: "10%",
  },

  input_container_has_route: {
    fontFamily: Montserrat_400Regular,
    color: "#00B7D0",
    fontSize: "120%",
    paddingLeft: "5%",
    fontWeight: "bold",
    weight: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  route_text: {
    fontFamily: Montserrat_400Regular,
    fontSize: "110%",
    paddingLeft: "5%",
  },

  no_route_text: {
    fontFamily: Montserrat_400Regular,
    fontStyle: "italic",
    fontSize: "110%",
  },

  input_container: {
    fontFamily: Montserrat_400Regular,
    backgroundColor: "white",
    fontSize: "120%",
    paddingLeft: "5%",
    fontWeight: "bold",
  },
});
