import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  Montserrat_700Bold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

export default function AdminListComponent(props) {
  // props need to be driver, route, isRoute
  return (
    <View style={styles.main_container}>
      <View>
        <View style={styles.driver_container}>
          <FontAwesomeIcon icon={faUser} size={25} />
          {props.isRoute ? (
            <Text style={styles.input_container_has_route}>{props.driver}</Text>
          ) : (
            <Text style={styles.input_container}>{props.driver}</Text>
          )}
        </View>

        {props.isRoute ? (
          <View style={styles.driver_container}>
            <FontAwesomeIcon icon={faMinusCircle} size={25} color="red" />
            <Text style={styles.route_text}>{props.route}</Text>
          </View>
        ) : (
          <View style={styles.driver_container}>
            <Text style={styles.no_route_text}>No Route Assigned</Text>
          </View>
        )}
        <View style={{ paddingTop: "10%" }}>
          <Button title="Assign New Route" color="#3DD82F"></Button>
        </View>
      </View>
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
