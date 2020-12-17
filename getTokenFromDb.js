import axios from "axios";
import { fireDb } from "./firebase";
import getToken from "./getToken.js";

export default async function getTokenFromDb() {
  let response = await axios.get(
    `https://carbide-haven-280722.firebaseio.com/env.json`
  );
  return response.data.token;
}
