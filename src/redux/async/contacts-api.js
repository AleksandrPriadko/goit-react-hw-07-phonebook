import axios from "axios";

const BASE_URL = "http://localhost:3000";

export function postContacts(data) {
  return axios
    .post("", data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

//async function fetchContacts() {}
