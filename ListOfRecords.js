import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Modal,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import getRecords from "./getRecords.js";
import AdminListComponent from "./AdminListComponent.js";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import axios from "axios";





export default function ListOfRecords() {


  async function getMapsAPI() {
    //API STUFF
    // NEWEST KEY: AIzaSyCgS6Izs_ZzEPwGI03XcwXOJXrPaDvzbyY
    // todo enable billing...
    const key = "AIzaSyCgS6Izs_ZzEPwGI03XcwXOJXrPaDvzbyY"; // key added on 1/2/2021
    let URL = "https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal";
    let response_api = await axios.get(URL,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization" : key,
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    let response_apiValues = Object.values(response_api.data); // turn into an array
    console.log(response_apiValues);  
  }

  getMapsAPI();


  // use UseEffect to use an async await function to get the snapshot of the database in an array
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(true);
  // DATA is just for testing purposes, will replace with actual data from database
  useEffect(() => {
    async function fetchInfo() {
      let response = await getRecords();
      let responseValues = Object.values(response); // turn into an array
      console.log(responseValues);
      setData(responseValues);
    }
    fetchInfo();
    // TODO: this doesn't update the first time you change it, but it does change after every other time you assign a driver
  }, [update]);

  //---------------made flatlist version--------
  // let t = "";
  // for(let i = 0; i < data.length; i++)
  // {
  //   t += "     " + data[i].fieldData.RouteName_c + "/" + data[i].fieldData.ID + "\n"
  //   t += getAddresses(data[i]);
  // }

  const renderItem = ({ item }) => (
    <View>
      <Text style={styles.routeName}>{item.fieldData.RouteName_c}</Text>
      <Text style={styles.addresses}>{getAddresses(item)}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text>ROUTE IN QUESTION</Text>
      <Text>{findRoute(data, false, 5)}</Text>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
}


//stylesheet
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  routeName: {
    fontFamily: Montserrat_400Regular,
    color: "white",
    textAlign: "center",
    fontSize: "36px"
  },
  addresses: {
    fontFamily: Montserrat_400Regular,
    color: "#3DD82F",
    textAlign: "center",
  },
});


//functions
function getAddresses(route)
{
  let t = "";
  for(let j = 0; j < route.portalData["rte.RCP_Recipients"].length; j++)
    {
      var obj = route.portalData["rte.RCP_Recipients"][j];
      var rte = "rte.RCP_Recipients::";
      t += "\t" + obj[rte + "Name_First"] + " " + obj[rte + "Name_Last"] + " | " + 
      obj[rte + "Address_Street1"] + ( obj[rte + "Address_Street2"].length == 0 ? "" : ", ") + 
      obj[rte + "Address_Street2"] + ", " + obj[rte + "Address_City"] + ", NC\n";
    }
    return t;
}

function findRoute(data, city, num)
{
  let route = null;
  let routeName = (city ? "Chapel Hill" : "Hillsborough") + "-" + num;

  for(let i = 0; i < data.length; i++)
  {
    route = (data[i].fieldData.RouteName_c.toLowerCase() == routeName.toLowerCase()) ? data[i] : null;
    if(route != null) {break};
  }
  return routeName + ": \n" + (route == null ? "Route not found" : getAddresses(route));
}