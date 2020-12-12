import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import AdminListComponent from "./AdminListComponent";

export default function ListOfDrivers() {
  // use UseEffect to use an async await function to get the snapshot of the database in an array

  // DATA is just for testing purposes, will replace with actual data from database
  const DATA = [
    {
      name: "First Last",
      route: "Route A",
    },
    {
      name: "First Last",
      route: "Route B",
    },
    {
      name: "First Last",
      route: "none",
    },
  ];

  const renderItem = ({ item }) => (
    <AdminListComponent
      driver={item.name}
      route={item.route}
      isRoute={item.route !== "none"}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
