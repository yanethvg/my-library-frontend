import { API_URL } from "../config/api";
import axios from "axios";

function Axios(token) {
  return axios.create({
    baseURL: API_URL,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export { Axios };