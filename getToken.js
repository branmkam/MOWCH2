import axios from "axios";
import { fireDb } from "./firebase";

//this is getting token first rip
export default async function getToken() {
  let server = "dev-fms18-01.soliantconsulting.com";
  let file = "MealsOnWheels.fmp12";
  let layout = "API_RCP"; //API_RCP / API_RTE / DDY / ETC.
  let uname = "dataapi";
  let pw = "MOWCH2020!";
  let serverURL =
    "https://" + server + "/fmi/data/vLatest/databases/" + file + "/sessions";
  //const token = Buffer.from(uname + ":" + pw, 'utf8').toString('base64');

  const response = await axios.post(
    serverURL,
    {},
    {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: uname,
        password: pw,
      },
    }
  );

  // Object.values(response.data);
  fireDb.ref("env/").set({
    token: response.data.response.token,
  });
  return response.data.response.token;
}
