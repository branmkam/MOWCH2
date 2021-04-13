import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Button,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Text,
  FlatList,
} from "react-native";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
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
      address: "123 EaringdaleHHare St",
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
      <SafeAreaView style={styles.other_container}>
        <View style={styles.container}>
          <Image
            style={{ width: 750, height: 270 }}
            resizeMode="contain"
            source={require("./assets/MOWOC_Logo_Dark.jpg")}
          />
        </View>
        <View style={styles.other_container}>
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
        </View>
      </SafeAreaView>
    );
  } else if (routeNumber == DATA.length - 1) {
    return (
      <SafeAreaView style={styles.other_container}>
        <View style={styles.container}>
          <View style={styles.googleMaps}>
            <TouchableOpacity
              style={styles.start}
              onPress={navigateToGoogleMaps}
            >
              <Text style={styles.text}>OPEN IN GOOGLE MAPS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.other_container}>
          <HomeAddressComponent
            name={DATA[routeNumber].name}
            address={DATA[routeNumber].address}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.googleMaps2}>
            <TouchableOpacity style={styles.start}>
              <Text style={styles.text}>FINISH</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.other_container}>
        <View style={styles.container}>
          <View style={styles.googleMaps}>
            <TouchableOpacity
              style={styles.start}
              onPress={navigateToGoogleMaps}
            >
              <Text style={styles.text}>OPEN IN GOOGLE MAPS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.other_container}>
          <HomeAddressComponent
            name={DATA[routeNumber].name}
            address={DATA[routeNumber].address}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.googleMaps2}>
            <TouchableOpacity style={styles.start} onPress={advanceToNextRoute}>
              <Text style={styles.text}>NEXT ADDRESS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  other_container: {
    display: "flex",
    flexDirection: "column",
  },

  start: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2%",
    marginTop: "2%",
  },
  googleMaps: {
    borderRadius: "25px",
    padding: "2%",
    backgroundColor: "#00B7C4",
    marginBottom: "2%",
    marginTop: "2%",
  },
  googleMaps2: {
    borderRadius: "25px",
    padding: "2%",
    backgroundColor: "#C2D82F",
    marginBottom: "2%",
    marginTop: "2%",
  },
  text: {
    color: "white",
    fontFamily: Montserrat_400Regular,
    fontSize: "130%",
    fontWeight: "bold",
  },
});
