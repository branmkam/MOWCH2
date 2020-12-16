import axios from "axios";
import { fireDb } from "./firebase";

async function getAllDrivers() {
  let response = await axios({
    url: `https://carbide-haven-280722.firebaseio.com/users.json`,
    method: "GET",
  });

  let n = Object.values(response.data);
  return n;
}

export default getAllDrivers;
