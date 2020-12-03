import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
        };
        //state methods - none at the moment
    }

  render() {
    return (
      <View id="login">
        <Text> MOWCH Logo Here </Text>
        <TextInput
          id="login-username"
          style={{ border: "black 2px solid", placeholder: "Username"}}
          onChangeText = {(text) => this.setState({username : text})}
        />
        <TextInput
          id="login-password"
          style={{ border: "black 2px solid", placeholder: "Password" }}
          onChangeText = {(text) => this.setState({password : text})}
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
          onPress={() => 0} // pass in authentication method
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
