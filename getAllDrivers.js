import axios from "axios";

async function getAllDrivers() {
  let response = await axios({
    url: `https://carbide-haven-280722.firebaseio.com/users.json`,
    method: "GET",
  });
  let n = Object.entries(response.data);
  return n;
}

export default getAllDrivers;
