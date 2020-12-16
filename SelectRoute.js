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
import AdminListComponent from "./AdminListComponent.js";
import { fireDb } from "./firebase";
import getAllDrivers from "./getAllDrivers.js";

export default function SelectRoute() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchInfo() {
      let response = await getAllDrivers();
      let responseValues = Object.values(response); // turn into an array
      let mappedNames = responseValues.map((item) => item.name);
      setData(mappedNames);
    }

    fetchInfo();
  });

  const renderItem = ({ item }) => <Text>{item}</Text>;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
