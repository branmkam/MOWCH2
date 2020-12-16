import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

export default function SelectRouteComponent() {
  return (
    <View style={styles.main_container}>
      <View>
        <View style={styles.driver_container}>
          <FontAwesomeIcon icon={faUser} size={25} />
          {isRoute ? (
            <Text style={styles.input_container_has_route}>{driver}</Text>
          ) : (
            <Text style={styles.input_container}>{driver}</Text>
          )}
        </View>

        {isRoute ? (
          <View style={styles.driver_container}>
            <FontAwesomeIcon icon={faMinusCircle} size={25} color="red" />
            <Text style={styles.route_text}>{route}</Text>
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

const styles = StyleSheet.create({});
