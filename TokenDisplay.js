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
import getToken from "./getToken.js";
import getTokenFromDb from "./getTokenFromDb.js";
import AdminDriverList from "./AdminDriverList.js";

export default function TokenDisplay() {
  // use UseEffect to use an async await function to get the snapshot of the database in an array
  const [data, setData] = useState([]);
  // DATA is just for testing purposes, will replace with actual data from database
  useEffect(() => {
    async function fetchInfo() {
      let response = await getToken();
      //let responseValues = Object.values(response); // turn into an array
      console.log(response);
      setData(response);
    }
    fetchInfo();
  }, []);

  const renderItem = ({ item }) => <Text>{item}</Text>;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{"Data: " + data}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
