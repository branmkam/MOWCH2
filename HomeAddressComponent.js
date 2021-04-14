import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";

export default function HomeAddressComponent({ name, address, completed }) {
  return (
    <View style={styles.main_container}>
      <View>
        <View style={styles.driver_container}>
          <View style={styles.logo_container}>
            <FontAwesomeIcon icon={faUserShield} size={25} />
          </View>
          <View>
            <Text style={styles.input_container_name}>{name}</Text>
            <Text style={styles.input_container_address}>{address}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    display: "flex",
    backgroundColor: "white",
    borderRadius: "25px",
    marginBottom: "2%",
    paddingTop: "1%",
    paddingBottom: "1%",
    textAlign: "center",
  },
  driver_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo_container: {
    paddingRight: "2%",
  },

  input_container_name: {
    fontFamily: Montserrat_400Regular,
    color: "black",
    fontSize: "120%",
    fontWeight: "bold",
    weight: "100%",
  },
  input_container_name_completed: {
    fontFamily: Montserrat_400Regular,
    color: "gray",
    fontSize: "120%",
    fontWeight: "bold",
    weight: "100%",
  },
  input_container_address: {
    fontFamily: Montserrat_400Regular,
    color: "black",
    fontSize: "120%",
    fontWeight: "regular",
    weight: "100%",
  },
});
