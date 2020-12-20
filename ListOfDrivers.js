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
import getAllDrivers from "./getAllDrivers.js";
import AdminDriverList from "./AdminDriverList.js";

export default function ListOfDrivers() {
  // use UseEffect to use an async await function to get the snapshot of the database in an array
  const [data, setData] = useState([]);
  // DATA is just for testing purposes, will replace with actual data from database
  useEffect(() => {
    async function fetchInfo() {
      let response = await getAllDrivers();
      let responseValues = Object.values(response); // turn into an array
      setData(responseValues);
    }
    fetchInfo();
    // TODO: this doesn't update the first time you change it, but it does change after every other time you assign a driver
  }, []);

  const renderItem = ({ item }) => (
    <AdminDriverList
      driver={item[1].name}
      route={item[1].route}
      isRoute={item[1].route !== "none"}
      id={item[0]}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
