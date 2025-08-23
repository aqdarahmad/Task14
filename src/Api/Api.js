import Apiservice from "./Apiservice";

const token = localStorage.getItem("token");

const api = new Apiservice(import.meta.env.VITE_API_URL, {
  headers: {
    "Authorization": `Bearer ${token}`
  }
});

export default api;
