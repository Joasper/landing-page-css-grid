import axios from "axios";

export const BD = axios.create({
  baseURL: "https://base-datos-live-good.vercel.app/api",
});
