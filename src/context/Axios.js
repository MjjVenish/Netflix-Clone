import axios from "axios";

const cxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default cxios;

export const bxios = axios.create({
  baseURL: "http://localhost:3007",
});
