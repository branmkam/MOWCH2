import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { fireDb } from "./firebase";

export default function SelectRouteComponent({
  routeName,
  routeId,
  addresses,
  selectedDriver,
  setStateR,
  setAssignedRoute,
}) {
  const navigation = useNavigation();
  const clickHandler = () => {
    fireDb.ref("users/").child(`${selectedDriver}`).update({
      route: routeName,
      routeId: routeId,
      routeNumber: -1,
    });
    setStateR(true);
    setAssignedRoute(routeName);
    //let h = update;
    //setUpdate(!h); // updates state
    navigation.goBack();
  };
  return (
    <TouchableOpacity style={styles.main_container} onPress={clickHandler}>
      <View>
        <View style={styles.driver_container}>
          <FontAwesomeIcon icon={faMap} size={25} />
          <Text style={styles.input_container_has_route}>{routeName}</Text>
        </View>
        <View style={styles.addresses}>
          <Text>{addresses}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main_container: {
    display: "flex",
    backgroundColor: "white",
    borderRadius: "25px",
    paddingTop: "2%",
    paddingBottom: "2%",
    marginBottom: "2%",
    textAlign: "center",
  },
  driver_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  input_container_has_route: {
    fontFamily: Montserrat_400Regular,
    color: "#00B7D0",
    fontSize: "120%",
    paddingLeft: "3%",
    fontWeight: "bold",
    weight: "100%",
  },
  addresses: {
    fontFamily: Montserrat_400Regular,
    color: "black",
    textAlign: "center",
    fontSize: "11px",
    fontStyle: "italic",
    paddingBottom: "1%",
    paddingTop: "2%",
  },
});
