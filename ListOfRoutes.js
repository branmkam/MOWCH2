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
import AdminRouteList from "./AdminRouteList.js";
import getRecords from "./getRecords.js";
import getAllDrivers from "./getAllDrivers.js";

export default function ListOfRoutes() {
  const [data, setData] = useState([]);
  const [drivers, setDrivers] = useState([]);

  const HAY = [
    {
      fieldData: { ID: 1, RouteName_c: "Chapel Hill 1" },
    },
  ];
  useEffect(() => {
    async function fetchInfo() {
      let response2 = await getAllDrivers();
      let responseValues2 = Object.values(response2);
      let allRoutesAssigned = responseValues2.map((driver) => driver[1].route);
      let response = await getRecords();
      let responseValues = Object.values(response); // turn into an array
      setData(responseValues);
      setDrivers(allRoutesAssigned);
    }
    fetchInfo();
    // TODO: this doesn't update the first time you change it, but it does change after every other time you assign a driver
  }, []);

  const renderItem = ({ item }) => (
    <AdminRouteList
      routeName={item.fieldData.RouteName_c}
      id={item?.fieldData.ID}
      isDriver={drivers.includes(item.fieldData.RouteName_c)}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

function getAddresses(route) {
  let t = "";
  for (let j = 0; j < route.portalData["rte.RCP_Recipients"].length; j++) {
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

function findRoute(data, city, num) {
  let route = null;
  let routeName = (city ? "Chapel Hill" : "Hillsborough") + "-" + num;

  for (let i = 0; i < data.length; i++) {
    route =
      data[i].fieldData.RouteName_c.toLowerCase() == routeName.toLowerCase()
        ? data[i]
        : null;
    if (route != null) {
      break;
    }
  }
  return (
    routeName +
    ": \n" +
    (route == null ? "Route not found" : getAddresses(route))
  );
}
