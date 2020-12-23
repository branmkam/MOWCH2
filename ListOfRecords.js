import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import getRecords from "./getRecords.js";
import getAllDrivers from "./getAllDrivers.js";
import AdminRouteList from "./AdminRouteList.js";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";

export default function ListOfRecords() {
  // use UseEffect to use an async await function to get the snapshot of the database in an array
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(true);
  const [drivers, setDrivers] = useState([]);
  const [routesAssigned, setRoutesAssigned] = useState([]);
  const [hasRoute, setHasRoute] = useState(false);
  // DATA is just for testing purposes, will replace with actual data from database
  useEffect(() => {
    async function fetchInfo() {
      let response = await getRecords();
      let response2 = await getAllDrivers();
      setData(response);
      setRoutesAssigned(response2.map((driver) => driver[1].route));

      setDrivers(response2);
    }
    fetchInfo();
    // TODO: this doesn't update the first time you change it, but it does change after every other time you assign a driver
  }, []);

  //---------------made flatlist version--------
  // let t = "";
  // for(let i = 0; i < data.length; i++)
  // {
  //   t += "     " + data[i].fieldData.RouteName_c + "/" + data[i].fieldData.ID + "\n"
  //   t += getAddresses(data[i]);
  // }

  /*
<View>
      <Text style={styles.routeName}>{item.fieldData.RouteName_c}</Text>
      <Text style={styles.addresses}>{getAddresses(item)}</Text>
    </View>


    return (
    <SafeAreaView style={styles.container}>
      <Text>ROUTE IN QUESTION</Text>
      <Text>{findRoute(data, false, 5)}</Text>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
*/
  const renderItem = ({ item }) => (
    <AdminRouteList
      routeName={item.fieldData.RouteName_c}
      routeId={item.fieldData.ID}
      isDriver={routesAssigned.includes(item.fieldData.RouteName_c)}
      driver={
        drivers.find((driver) => driver[1].route == item.fieldData.RouteName_c)
          ? String(
              drivers.find(
                (driver) => driver[1].route == item.fieldData.RouteName_c
              )[1].name
            )
          : "undefined"
      }
      driverId={
        drivers.find((driver) => driver[1].route == item.fieldData.RouteName_c)
          ? String(
              drivers.find(
                (driver) => driver[1].route == item.fieldData.RouteName_c
              )[0]
            )
          : "undefined"
      }
      addresses={getFourAddresses(item)}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
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
    fontSize: "36px",
  },
  addresses: {
    fontFamily: Montserrat_400Regular,
    color: "black",
    textAlign: "center",
    fontSize: "11px",
    fontStyle: "italic",
    paddingBottom: "1%",
    paddingTop: "1%",
  },
  main_container: {
    display: "flex",
    backgroundColor: "white",
    borderRadius: "25px",
    paddingTop: "2%",
    paddingLeft: "1%",
    paddingRight: "1%",
    paddingBottom: "2%",
    marginBottom: "2%",
    justifyContent: "center",
  },

  driver_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "1%",
    paddingBottom: "1%",
  },

  input_container_has_route: {
    fontFamily: Montserrat_400Regular,
    color: "#00B7D0",
    fontSize: "120%",
    paddingLeft: "5%",
    fontWeight: "bold",
    weight: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  route_text: {
    fontFamily: Montserrat_400Regular,
    fontSize: "110%",
    paddingLeft: "5%",
  },

  no_route_text: {
    fontFamily: Montserrat_400Regular,
    fontStyle: "italic",
    fontSize: "110%",
  },

  input_container: {
    fontFamily: Montserrat_400Regular,
    backgroundColor: "white",
    fontSize: "120%",
    paddingLeft: "5%",
    fontWeight: "bold",
  },
});

//functions
function getAddresses(route) {
  let t = "";
  for (let j = 0; j < route.portalData["rte.RCP_Recipients"].length; j++) {
    var obj = route.portalData["rte.RCP_Recipients"][j];
    var rte = "rte.RCP_Recipients::";
    t +=
      "\t" +
      obj[rte + "Name_First"] +
      " " +
      obj[rte + "Name_Last"] +
      " | " +
      obj[rte + "Address_Street1"] +
      (obj[rte + "Address_Street2"].length == 0 ? "" : ", ") +
      obj[rte + "Address_Street2"] +
      ", " +
      obj[rte + "Address_City"] +
      ", NC\n";
  }
  return t;
}

function getFourAddresses(route) {
  let t = "";
  for (
    let j = 0;
    j < route.portalData["rte.RCP_Recipients"].length && j < 4;
    j++
  ) {
    var obj = route.portalData["rte.RCP_Recipients"][j];
    var rte = "rte.RCP_Recipients::";
    t +=
      "\t" +
      obj[rte + "Name_First"] +
      " " +
      obj[rte + "Name_Last"] +
      " | " +
      obj[rte + "Address_Street1"] +
      (obj[rte + "Address_Street2"].length == 0 ? "" : ", ") +
      obj[rte + "Address_Street2"] +
      ", " +
      obj[rte + "Address_City"] +
      ", NC\n";
  }
  return t;
}

function findRoute(data, city, num) {
  let route = null;
  let routeName = (city ? "Chapel Hill" : "Hillsborough") + "-" + num;

  for (let i = 0; i < data.length; i++) {
    route =
      data[i].fieldData.RouteName_c.toLowerCase() == routeName.toLowerCase()
        ? data[i]
        : null;
    if (route != null) {
      break;
    }
  }
  return (
    routeName +
    ": \n" +
    (route == null ? "Route not found" : getAddresses(route))
  );
}
