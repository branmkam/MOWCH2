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
import { fireDb } from "./firebase";

export default function AdminDriverList({ driver, route, isRoute, id }) {
  // props need to be driver, route, isRoute
  const navigation = useNavigation();
  const [stateRoute, setStateRoute] = useState(isRoute);
  const [assignedRoute, setAssignedRoute] = useState(route);
  const navigateToSelectRoute = (e) => {
    navigation.navigate("Select Route", {
      selectedDriver: id,
      setThisIsRoute: setStateRoute,
      assignedRoute: setAssignedRoute,
    });
  };

  const removeRouteHandler = (e) => {
    setStateRoute(false);
    setAssignedRoute("none");
    fireDb.ref("users/").child(`${id}`).update({
      route: "none",
      routeId: -1,
    });
  };
  return (
    <View style={styles.main_container}>
      <View>
        <View style={styles.driver_container}>
          <FontAwesomeIcon icon={faUser} size={25} />
          {stateRoute ? (
            <Text style={styles.input_container_has_route}>{driver}</Text>
          ) : (
            <Text style={styles.input_container}>{driver}</Text>
          )}
        </View>
        {stateRoute ? (
          <View style={styles.driver_container}>
            <TouchableHighlight onPress={removeRouteHandler}>
              <FontAwesomeIcon icon={faMinusCircle} size={25} color="red" />
            </TouchableHighlight>

            <Text style={styles.route_text}>{assignedRoute}</Text>
          </View>
        ) : (
          <View style={styles.driver_container}>
            <Text style={styles.no_route_text}>No Route Assigned</Text>
          </View>
        )}
        <View style={{ paddingTop: "10%" }}>
          <Button
            title="Assign New Route"
            color="#3DD82F"
            onPress={navigateToSelectRoute}
          ></Button>
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
