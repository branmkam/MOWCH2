import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList, Text } from "react-native";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import getAllDrivers from "./getAllDrivers.js";
import SelectDriverComponent from "./SelectDriverComponent.js";

export default function SelectDriver({ navigation, route }) {
  const [id, setId] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setId(route.params?.selectedDriver);
    async function fetchInfo() {
      let response = await getAllDrivers();
      let availableDrivers = response.filter((item) => item[1].routeId === -1);
      console.log(response);
      let responseValues = Object.values(availableDrivers);
      setData(responseValues);
      // do an await call to the database to get all the routes
    }
    fetchInfo();
  }, []);

  const renderItem = ({ item }) => (
    <SelectDriverComponent
      routeName={route.params?.selectedRouteName}
      routeId={route.params?.selectedRouteId}
      driver={item[1].name}
      selectedDriver={item[0]}
      selectedRouteId={route.params?.selectedRouteId}
      setStateR={route.params?.setThisIsDriver}
      setAssignedDriver={route.params?.assignedDriver}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.input_container_has_route}>
        Assign {route.params?.selectedRouteName} to which driver?
      </Text>
      {console.log(data)}
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },

  input_container_has_route: {
    fontFamily: Montserrat_400Regular,
    textAlign: "center",
    color: "white",
    fontSize: "120%",
    fontWeight: "bold",
    weight: "100%",
    paddingBottom: "2%",
  },
});
