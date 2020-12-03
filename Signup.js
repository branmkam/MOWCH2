import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

export default class Signup extends Component {
    
    constructor() {
        super();
        this.state = {
            email: "",
            username: "",
            password1: "",
            password2: "",
            success : false,
            errorMsg: "",
        };
        //state methods
        this.checkValidity = this.checkValidity.bind(this);
    }
    

  
    checkValidity()
    {
        //define vars
        let e = this.state.email;
        let u = this.state.username;
        let p1 = this.state.password1;
        let p2 = this.state.password2;
        let msg = '';

        //check if all fields have something
        if(e.length == 0 || u.length == 0 || p1.length == 0 || p2.length == 0)
        {
            msg = "Please fill out all fields.";
        }

        let hasAt = false;
        //check if email has @
        for(let i = 0; i < e.length; i++)
        {
            if(e.charAt(i) === '@')
            {
                hasAt = true;
                break;
            }  
        }
        hasAt ? 0 : msg = "Make sure email has an @ symbol.";
        
        //check if username is already taken
        //DO LATER W/ AUTH DATABASE

        //check if password1 == password2
        (p1 === p2) ? 0 : (msg = "Please ensure both passwords are equal.");

        //check if password1 has at least one number, one capital, one lowercase
        let hasNum = false;
        let hasCap = false;
        let hasLow = false;
        for(let i = 0; i < p1.length; i++)
        {
            let c = p1.codePointAt(i);
            if(c >= 48 && c <= 57) { hasNum = true; }
            else if(c >= 65 && c <= 90) { hasCap = true; }
            else if(c >= 97 && c <= 122) { hasLow = true };
        }

        (hasNum && hasCap && hasLow) ? 0 : msg = "A password should have at least one numeric, uppercase, and lowercase character.";

        this.setState({errorMsg : msg});
        return this.state.errorMsg.length == 0;
    }
      

    render() {
        return (
            <View id="signup">
            <Text> MOWCH Logo Here </Text>
            <Text>{(this.state.success ? "Success" : "Failure") + ": " + this.state.errorMsg}</Text>
            <TextInput
              id="signup-email"
              style={{ border: "black 2px solid", placeholder: "Email"}}
              onChangeText = {(text) => this.setState({email : text})}
            />
            <TextInput
              id="signup-username"
              style={{ border: "black 2px solid", placeholder: "Username"}}
              onChangeText = {(text) => this.setState({username : text})}
            />
            <TextInput
              id="signup-password"
              style={{ border: "black 2px solid", placeholder: "Password" }}
              onChangeText = {(text) => this.setState({password1 : text})}
            />
            <TextInput
              id="signup-retypepassword"
              style={{ border: "black 2px solid", placeholder: "Retype Password" }}
              onChangeText = {(text) => this.setState({password2 : text})}
            />
            <Button
              id="signup-button"
              title="Create Account"
              onPress={() => this.setState({success : this.checkValidity()})}
            />
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
    
