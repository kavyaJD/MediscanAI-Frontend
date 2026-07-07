import axios from "axios";

const API = axios.create({
  baseURL: "https://mediscanai-zef1.onrender.com",
});

export default API;