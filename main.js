import { API } from "./js/api.js";



//* Sayfa yüklendiği anda apiye istek atıp popüler müzikleri getirir
document.addEventListener(
  "DOMContentLoaded", () => console.log("çalıştı"));
  
  const api = new API();
 api.getPopular();





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


