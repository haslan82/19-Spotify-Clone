import { API } from "./js/api.js";


const api = new API();
//* Sayfa yüklendiği anda apiye istek atıp popüler müzikleri getirir
document.addEventListener(
  "DOMContentLoaded",
  async () => await api.getPopular()
);