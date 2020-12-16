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
import AdminListComponent from "./AdminListComponent.js";

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
  }, []);

  const renderItem = ({ item }) => (
    <AdminListComponent
      driver={item.name}
      route={item.route}
      isRoute={item.route !== "none"}
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
