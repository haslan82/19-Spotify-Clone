// import { API } from "./js/api.js";


// const api = new API();
// //* Sayfa yüklendiği anda apiye istek atıp popüler müzikleri getirir
// document.addEventListener(
//   "DOMContentLoaded",
//   async () => await api.getPopular()
// );
// //* Liste de tıklamalarda çalışır
// const handleClick = (e) => {
//     if (e.target.id === "play-btn") {
//       const parent = e.target.closest(".card"); // closest ı parentElement yerine kullanırız en yakın ebeveyne götürür
//       //* Çalınacak müziğin bilgilerini ekrana basar
//       renderPlayingInfo(parent.dataset);
//       //* Müziği çalar
//       playMusic(parent.dataset.url);
//     }
//   };
// //* Liste alanındaki tıklamaları izleme
// document.addEventListener("click", handleClick);

let boy = Number(prompt("boyunnuz"));
let kilo = Number(prompt("kilonuz"));

const bkHesapla = (x, y) => {
  const index = (y/ (x*x))*100;
  return index;
};

const sonuc = bkHesapla(kilo, boy);
console.log(sonuc);
