import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList, Text } from "react-native";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import getRecords from "./getRecords.js";
import SelectRouteComponent from "./SelectRouteComponent.js";

export default function SelectRoute({ navigation, route }) {
  const [id, setId] = useState([]);
  const [data, setData] = useState([]);

  function getFourAddresses(route) {
    let t = "";
    for (
      let j = 0;
      j < route.portalData["rte.RCP_Recipients"].length && j < 4;
      j++
    ) {
      var obj = route.portalData["rte.RCP_Recipients"][j];
      var rte = "rte.RCP_Recipients::";
      t +=
        "\t" +
        obj[rte + "Name_First"] +
        " " +
        obj[rte + "Name_Last"] +
        " | " +
        obj[rte + "Address_Street1"] +
        (obj[rte + "Address_Street2"].length == 0 ? "" : ", ") +
        obj[rte + "Address_Street2"] +
        ", " +
        obj[rte + "Address_City"] +
        ", NC\n";
    }
    return t;
  }

  useEffect(() => {
    setId(route.params?.selectedDriver);
    async function fetchInfo() {
      let response = await getRecords(); // turn into an array
      setData(response);
      // do an await call to the database to get all the routes
    }
    fetchInfo();
  }, []);

  const renderItem = ({ item }) => (
    <SelectRouteComponent
      routeName={item.fieldData.RouteName_c}
      routeId={item.fieldData.ID}
      addresses={getFourAddresses(item)}
      selectedDriver={route.params?.selectedDriver}
      setStateR={route.params?.setThisIsRoute}
      setAssignedRoute={route.params?.assignedRoute}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.input_container_has_route}>
        Assign this driver which route?
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
