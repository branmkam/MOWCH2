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
import getRecords from "./getRecords.js";
import AdminListComponent from "./AdminListComponent.js";

export default function ListOfRecords() {
  // use UseEffect to use an async await function to get the snapshot of the database in an array
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(true);
  // DATA is just for testing purposes, will replace with actual data from database
  useEffect(() => {
    async function fetchInfo() {
      let response = await getRecords();
      let responseValues = Object.values(response); // turn into an array
      console.log(responseValues);
      setData(responseValues);
    }
    fetchInfo();
    // TODO: this doesn't update the first time you change it, but it does change after every other time you assign a driver
  }, [update]);

  let t = "";
  for(let i = 0; i < data.length; i++)
  {
    t += data[i].fieldData.Name_First + ":\t\t" + data[i].recordId + "\n"
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text>{t}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
