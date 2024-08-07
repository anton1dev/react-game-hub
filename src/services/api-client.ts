import axios from "axios";
import { rawgApi } from "../vars/rawgApi";

export default axios.create({
  baseURL: rawgApi.apiUrl,
  params: {
    key: rawgApi.apiKey,
  },
});
