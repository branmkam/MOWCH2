import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import AddressHomePage from "./AddressHomePage";
import HomeAddressComponent from "./HomeAddressComponent";
import { fireAuth, fireDb } from "./firebase";
import axios from "axios";

export default function Home({ navigation }) {
  const [routeNumber, setRouteNumber] = useState(-1);
  useEffect(() => {
    async function fetchInfo() {
      let user = fireAuth.currentUser;
      var routeRef = fireDb.ref("users/" + user.uid + "/routeNumber");
      routeRef.on("value", (snapshot) => {
        const data = snapshot.val();
        setRouteNumber(data);
      });
    }
    fetchInfo();
    // TODO: this doesn't update the first time you change it, but it does change after every other time you assign a driver
  }, []);

  // REPLACE WITH THE LIST OF ADDRESSES
  const DATA = [
    {
      name: "Rachael Bearman",
      address: "123 Main St",
    },
    {
      name: "John Doe",
      address: "124 Main St",
    },
    {
      name: "John Doe",
      address: "124 Main St",
    },
  ];

  const startRoute = (e) => {
    let user = fireAuth.currentUser;

    fireDb
      .ref("users/")
      .child(`${user.uid}`)
      .update({
        routeNumber: routeNumber + 1,
      });
  };
  const advanceToNextRoute = (e) => {
    let user = fireAuth.currentUser;
    fireDb
      .ref("users/")
      .child(`${user.uid}`)
      .update({
        routeNumber: routeNumber + 1,
      });
  };

  const navigateToGoogleMaps = (e) => {
    // GO TO GOOGLE MAPS
  };
  const renderItem = ({ item }) => (
    <HomeAddressComponent name={item.name} address={item.address} />
  );

  if (routeNumber == -1) {
    // hasnt pressed the start button
    return (
      <SafeAreaView style={styles.container}>
        <View // Start button
          style={styles.start}
        >
          <Button
            title="Start"
            color="#C2D82F"
            width="100%"
            height="100%"
            onPress={startRoute}
          />
        </View>
        <FlatList data={DATA} renderItem={renderItem} />
      </SafeAreaView>
    );
  } else if (routeNumber == DATA.length - 1) {
    return (
      <SafeAreaView style={styles.container}>
        <View // Start button
          style={styles.start}
        >
          <Button
            title="Go To Google Maps"
            color="#C2D82E"
            width="100%"
            height="100%"
            onPress={navigateToGoogleMaps} // TODO: function declaration
          />
          <HomeAddressComponent
            name={DATA[routeNumber].name}
            address={DATA[routeNumber].address}
          />
          <Button title="Finish" color="#C2D82F" width="100%" height="100%" />
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View // Start button
          style={styles.start}
        >
          <Button
            title="Go To Google Maps"
            color="#C2D82E"
            width="100%"
            height="100%"
            onPress={navigateToGoogleMaps} // TODO: function declaration
          />
          <HomeAddressComponent
            name={DATA[routeNumber].name}
            address={DATA[routeNumber].address}
          />
          <Button
            title="Next Route"
            color="#C2D82F"
            width="100%"
            height="100%"
            onPress={advanceToNextRoute}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },

  start: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
