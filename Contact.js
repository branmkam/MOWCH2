import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Linking,
} from "react-native";
import ContactCardComponent from "./ContactCardComponent.js";

export default function Contact() {
  const DATA = [
    {
      name: "Rachael Bearman",
      email: "rachel.bearman@chcmow.org",
      phone: "(123) 456 7891",
    },
    {
      name: "Rachael Bearman",
      email: "rachel.bearman@chcmow.org",
      phone: 1234567891,
    },
  ];
  const renderItem = ({ item }) => (
    <ContactCardComponent
      name={item.name}
      email={item.email}
      phone={item.phone}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
