import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Login.js";
import Signup2 from "./Signup2.js";
import Login2 from "./Login2.js";
import Home from "./Home.js";
import ListOfDrivers from "./ListofDrivers.js";
import ListOfRecords from "./ListofRecords.js";
import ListOfRoutes from "./ListofRoutes.js";
import TokenDisplay from "./TokenDisplay.js";
import ForgotPassword from "./ForgotPassword.js";
import SelectRoute from "./SelectRoute.js";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "white",
    background: "#1C5063",
    border: "#1C5063",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator style={styles.container}>
        <Stack.Screen
          name="ListofRoutes"
          component={ListOfRecords}
          options={{
            headerStyle: {
              backgroundColor: "#1C5063",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="ListOfRecords"
          component={ListOfRecords}
          options={{
            headerStyle: {
              backgroundColor: "#1C5063",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup2}
          options={{
            headerStyle: {
              backgroundColor: "#1C5063",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Assign Route"
          component={TokenDisplay} //change back to drivers once testing is done
          options={{
            headerStyle: {
              backgroundColor: "#1C5063",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login2}
          options={{
            headerStyle: {
              backgroundColor: "#1C5063",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: "#1C5063",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Select Route"
          component={SelectRoute}
          options={{
            headerStyle: {
              backgroundColor: "#1C5063",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerStyle: {
              backgroundColor: "#1C5063",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
});
