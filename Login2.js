import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { fireAuth } from "./firebase";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { AppLoading } from "expo";

export default function Login2() {
  const [email, setEmail] = useState(""); // the variable email will have whatever the user inputted
  const [password, setPassword] = useState(""); // the variable password will have whatever the user inputted
  const [errorMessage, setErrorMessage] = useState("");

  const logIn = (e) => {
    e.preventDefault();
    fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          // there is a user so navigate to home screen
          //console.log(auth.user);  WORKS
        }
      })
      .catch((err) => setErrorMessage(err.message)); // an error messsage that displays underneath
    // firebase log in here
  };

  return (
    <View id="login" style={styles.container}>
      <Text> MOWCH Logo Here </Text>

      <TextInput
        id="login-email"
        style={styles.input_container}
        onChangeText={(e) => setEmail(e)}
        placeholder="Email"
      />

      <TextInput
        id="login-password"
        style={styles.input_container}
        onChangeText={(e) => setPassword(e)}
        placeholder="Password"
      />

      <Text style={styles.error_message}>{errorMessage}</Text>

      <Text id="login-forgot" style={styles.forgot_password}>
        Forgot Password?
      </Text>
      <Button
        id="login-button"
        title="Log In"
        color="#00B7C4"
        onPress={logIn}
        width="348px"
        height="55px"
      />

      <Text id="login-donthave" style={styles.dont_have_account}>
        Don't have an account?
      </Text>
      <Text
        id="login-signuptext"
        style={styles.sign_up_text}
        onPress={() => 0} //set this as a pseudo-hyperlink to the Signup page
      >
        Sign Up
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  input_container: {
    fontFamily: Montserrat_400Regular,
    backgroundColor: "white",
    fontSize: "140%",
    width: "348px",
    height: "55px",
    marginBottom: "2%",
    marginTop: "2%",
    borderRadius: "25px",
    paddingLeft: "10px",
  },

  login_button: {
    fontFamily: Montserrat_400Regular,
    backgroundColor: "white",
    fontSize: "140%",
    width: "348px",
    height: "55px",
    marginBottom: "1%",
    marginTop: "1%",
    borderRadius: "25px",
    paddingLeft: "1%",
  },

  forgot_password: {
    fontFamily: Montserrat_400Regular,
    fontSize: "100%",
    textAlign: "center",
    color: "#ABD037",
    textDecorationLine: "underline",
    marginBottom: "3%",
  },

  error_message: {
    fontFamily: Montserrat_400Regular,
    fontSize: "100%",
    textAlign: "center",
    color: "red",
    marginBottom: "1%",
  },
  logo: {
    objectFit: "contain",
  },

  dont_have_account: {
    marginTop: "14%",
    fontSize: "100%",
    fontFamily: Montserrat_400Regular,
    textAlign: "center",
    color: "white",
  },
  sign_up_text: {
    fontSize: "100%",
    fontFamily: Montserrat_700Bold,
    textAlign: "center",
    color: "#ABD037",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
