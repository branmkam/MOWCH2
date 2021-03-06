import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";

export default function HomeAddressComponent({ name, address }) {
  return (
    <View style={styles.main_container}>
      <View>
        <View style={styles.driver_container}>
          <View style={styles.logo_container}>
            <FontAwesomeIcon icon={faUserShield} size={25} />
          </View>
          <View>
            <Text style={styles.input_container_has_no_route}>{name}</Text>
            <Text style={styles.input_container_has_no_route}>{address}</Text>
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
});
