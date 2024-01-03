import axios from "axios";

export const BD = axios.create({
  baseURL: "http://localhost:4001/api",
});
