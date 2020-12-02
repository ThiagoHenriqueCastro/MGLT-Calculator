import axios from "axios";

const api = axios.create({
  baseURL: "http://swapi.dev/api/",
  responseType: "json",
});

export default api;
