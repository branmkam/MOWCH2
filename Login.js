import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { fireAuth } from "./firebase";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    //state methods - none at the moment
  }

  render() {
    return (
      <View id="login">
        <Text> MOWCH Logo Here </Text>
        <TextInput
          id="login-email"
          style={{ border: "black 2px solid", placeholder: "email" }}
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          id="login-password"
          style={{ border: "black 2px solid", placeholder: "Password" }}
          onChangeText={(text) => this.setState({ password: text })}
        />
        <Text
          id="login-forgot"
          style={{ fontStyle: "italic", textDecoration: "underline" }}
        >
          Forgot Password?
        </Text>
        <Button
          id="login-button"
          title="Log In"
          onPress={(e) => {
            e.preventDefault();
            try {
              fireAuth
                .signInWithEmailAndPassword(
                  this.state.email,
                  this.state.password
                )
                .then((auth) => {
                  if (auth) {
                    // there is a user so navigate to home screen
                    console.log("success");
                  }
                });
            } catch (err) {
              console.log(err.message);
            }
            // firebase log in here
          }} // pass in authentication method
        />
        <Text id="login-donthave">Don't have an account?</Text>
        <Text
          id="login-signuptext"
          style={{ textDecoration: "underline", fontWeight: "bold" }}
          onPress={() => 0} //set this as a pseudo-hyperlink to the Signup page
        >
          Sign Up
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    justifyContent: "center",
    alignItems: "center",
  },
});
