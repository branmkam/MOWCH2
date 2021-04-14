import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMap, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { fireDb } from "./firebase";
import { useNavigation } from "@react-navigation/native";

export default function AdminRouteList({
  routeName,
  routeId,
  isDriver,
  driver,
  driverId,
  addresses,
}) {
  const navigation = useNavigation();
  const [stateDriver, setStateDriver] = useState(isDriver);
  const [assignedDriver, setAssignedDriver] = useState(driver);
  useEffect(() => {
    setStateDriver(isDriver);
    setAssignedDriver(driver);
  }, [isDriver, driver]);

  const removeDriverHandler = (e) => {
    setStateDriver(false);
    setAssignedDriver("none");
    fireDb.ref("users/").child(`${driverId}`).update({
      route: "none",
      routeId: -1,
      routeNumber: -1,
    });
  };

  const navigateToSelectDriver = (e) => {
    navigation.navigate("Select Driver", {
      selectedRouteId: routeId,
      selectedRouteName: routeName,
      setThisIsDriver: setStateDriver,
      assignedDriver: setAssignedDriver,
    });
  };
  return (
    <View style={styles.main_container}>
      <View style={styles.driver_container}>
        <FontAwesomeIcon icon={faMap} size={25} />
        {stateDriver ? (
          <Text style={styles.input_container_has_route}>{routeName}</Text>
        ) : (
          <Text style={styles.input_container}>{routeName}</Text>
        )}
      </View>
      <ScrollView maxHeight="1px">
        <Text style={styles.addresses}>{addresses}</Text>
      </ScrollView>
      {stateDriver ? (
        <View style={styles.driver_container}>
          <TouchableHighlight onPress={removeDriverHandler}>
            <FontAwesomeIcon icon={faMinusCircle} size={25} color="red" />
          </TouchableHighlight>
          <Text style={styles.route_text}>{assignedDriver}</Text>
        </View>
      ) : (
        <View style={styles.driver_container}>
          <Text style={styles.no_route_text}>No Driver Assigned</Text>
        </View>
      )}
      <View style={{ paddingTop: "1%", display: "flex", alignItems: "center" }}>
        <Button
          title="Assign New Driver"
          color="#3DD82F"
          onPress={navigateToSelectDriver}
        ></Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  routeName: {
    fontFamily: Montserrat_400Regular,
    color: "white",
    textAlign: "center",
    fontSize: "36px",
  },
  addresses: {
    fontFamily: Montserrat_400Regular,
    color: "black",
    textAlign: "center",
    fontSize: "11px",
    fontStyle: "italic",
    paddingBottom: "1%",
    paddingTop: "1%",
  },
  main_container: {
    display: "flex",
    backgroundColor: "white",
    borderRadius: "25px",
    paddingTop: "2%",
    paddingLeft: "1%",
    paddingRight: "1%",
    paddingBottom: "2%",
    marginBottom: "2%",
    justifyContent: "center",
  },

  driver_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "1%",
    paddingBottom: "1%",
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
