import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
  SafeAreaView,
} from "react-native";
import { fireAuth, fireDb } from "./firebase";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function Signup2({ navigation }) {
  const signUp = (e) => {
    if (password1 !== password2) {
      setErrorMessage("Please ensure both passwords are equal.");
    } else if (
      email.length == 0 ||
      name.length == 0 ||
      password1.length == 0 ||
      password2.length == 0
    ) {
      setErrorMessage("Please fill out all fields.");
    } else {
      fireAuth
        .createUserWithEmailAndPassword(email, password1) // TODO: Replace "testing123@gmail.com" with actual email and "password" with actual password
        .then((auth) => {
          if (auth) {
            auth.user.updateProfile({
              displayName: name, // TODO: Replace with actual name they input
            });
            fireDb.ref("users/" + auth.user.uid).set({
              route: "none",
              admin: true,
              headadmin: true,
              name: name,
            });
            navigation.navigate("Home");
          }
        })
        .catch((err) => setErrorMessage(err.message));
    }
    // firebase sign up here
  };
  const [email, setEmail] = useState(""); // the variable email will have whatever the user inputted
  const [password1, setPassword1] = useState(""); // the variable password will have whatever the user inputted
  const [password2, setPassword2] = useState(""); // the variable retyped password will have whatever the user inputted
  const [errorMessage, setErrorMessage] = useState(""); // the error message
  const [name, setName] = useState(""); // the variable name will have whatever the user inputted

  return (
    <SafeAreaView id="signup" style={styles.container}>
      <Image
        style={{ width: 750, height: 270 }}
        resizeMode="contain"
        source={require("./assets/MOWOC_Logo_Dark.jpg")}
      />
      <View>
        <TextInput
          id="signup-email"
          style={styles.input_container}
          onChangeText={(e) => setEmail(e)}
          placeholder="Email"
        />
        <TextInput
          id="signup-name"
          style={styles.input_container}
          onChangeText={(e) => setName(e)}
          placeholder="Name"
        />
        <TextInput
          id="signup-password"
          style={styles.input_container}
          onChangeText={(e) => setPassword1(e)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          id="signup-retypepassword"
          style={styles.input_container}
          onChangeText={(e) => setPassword2(e)}
          placeholder="Retype Password"
          secureTextEntry={true}
        />
        <Text style={styles.error_message}>{errorMessage}</Text>
      </View>

      <Button
        id="signup-button"
        title="Create Account"
        onPress={signUp}
        color="#00B7C4"
        width="100%"
        height="100%"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input_container: {
    fontFamily: Montserrat_400Regular,
    backgroundColor: "white",
    fontSize: "120%",
    width: "100%",
    height: "100%",
    marginBottom: "5%",
    marginTop: "2%",
    borderRadius: "25px",
    paddingLeft: "5%",
    paddingTop: "3%",
    paddingBottom: "3%",
  },
  error_message: {
    fontFamily: Montserrat_400Regular,
    fontSize: "100%",
    textAlign: "center",
    color: "red",
    marginBottom: "1%",
  },
});
