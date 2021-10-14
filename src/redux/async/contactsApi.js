import axios from "axios";

export const BASE_URL = "http://localhost:3001";

export function getContact() {
  return axios
    .get(`${BASE_URL}/contacts`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}

export function addContact(contacts) {
  return axios
    .post(`${BASE_URL}/contacts`, contacts)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
export function deleteContact(id) {
  return axios
    .delete(`${BASE_URL}/contacts/${id}`)
    .then(() => {
      return;
    })
    .catch((error) => {
      return error;
    });
}
