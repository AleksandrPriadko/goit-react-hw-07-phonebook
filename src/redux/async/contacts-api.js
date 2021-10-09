import axios from "axios";

export const BASE_URL = "http://localhost:3001";

export function getContacts(data) {
  return axios
    .get(`${BASE_URL}/contacts`, data)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
}

//async function fetchContacts() {}
