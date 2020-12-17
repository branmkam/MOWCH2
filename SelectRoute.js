import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Modal,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import SelectRouteComponent from "./SelectRouteComponent.js";

export default function SelectRoute({ navigation, route }) {
  const [id, setId] = useState([]);

  useEffect(() => {
    setId(route.params?.selectedDriver);
    async function fetchInfo() {
      //
      // do an await call to the database to get all the routes
    }
    fetchInfo();
  }, []);

  const DATA = [
    {
      routeId: "A4",
      route: "Route J",
    },
    {
      routeId: "A5",
      route: "Route L",
    },
    {
      routeId: "A7",
      route: "Route N",
    },
  ];

  const renderItem = ({ item }) => (
    <SelectRouteComponent
      routeName={item.route}
      routeId={item.routeId}
      selectedDriver={route.params?.selectedDriver}
      update={route.params?.update}
      setUpdate={route.params?.setUpdate}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.input_container_has_route}>
        Assign this driver which route?
      </Text>
      <FlatList data={DATA} renderItem={renderItem} />
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
