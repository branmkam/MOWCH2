import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import { fireAuth } from "./firebase";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Login2({ navigation }) {
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
          navigation.navigate("Home");
        }
      })
      .catch((err) => setErrorMessage(err.message)); // an error messsage that displays underneath
    // firebase log in here
  };

  return (
    <SafeAreaView id="login" style={styles.container}>
      <Text> MOWCH Logo Here </Text>
      <View>
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

        <Text
          id="login-forgot"
          style={styles.forgot_password}
          // TODO navigate to forgot password page
        >
          Forgot Password?
        </Text>
        <Button
          id="login-button"
          title="Log In"
          color="#00B7C4"
          onPress={logIn}
          width="100%"
          height="100%"
        />
      </View>
      <View>
        <Text id="login-donthave" style={styles.dont_have_account}>
          Don't have an account?
        </Text>
        <Text
          id="login-signuptext"
          style={styles.sign_up_text}
          onPress={() => navigation.navigate("Signup")} //set this as a pseudo-hyperlink to the Signup page
        >
          Sign Up
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  input_container: {
    fontFamily: Montserrat_400Regular,
    backgroundColor: "white",
    fontSize: "120%",
    width: "100%",
    height: "100%",
    marginBottom: "2%",
    marginTop: "2%",
    borderRadius: "25px",
    paddingLeft: "5%",
    paddingTop: "2%",
    paddingBottom: "2%",
  },

  login_button: {
    fontFamily: Montserrat_400Regular,
    backgroundColor: "white",
    fontSize: "140%",
    width: "100%",
    height: "100%",
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
