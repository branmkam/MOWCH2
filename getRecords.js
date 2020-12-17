import axios from "axios";
import { fireDb } from "./firebase";
import getToken from "./getToken";

//this is getting token first rip
export default async function getRecords() {
  let server = "dev-fms18-01.soliantconsulting.com";
  let file = "MealsOnWheels.fmp12";
  let layout = "API_RCP"; //API_RCP / API_RTE / DDY / ETC.

  let serverURL = "https://" + server + "/fmi/data/vLatest/databases/" + file + "/layouts/" + layout + "/records";
  let token = await getToken();

  const response = await axios.get(
    serverURL,
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization" : "Bearer " + token
      },
    }
  );

  // Object.values(response.data);
  //note to everyone: response.data is for axios, followed by response.data in the JSON provided from request
  return response.data.response.data;
}