import { API } from "./js/api.js";


 
const api = new API();
api.getPopular();

//* Sayfa yüklendiği anda apiye istek atıp popüler müzikleri getirir
document.addEventListener( "DOMContentLoaded",
 async () => await api.getPopular()
);


//* Liste de tıklamalarda çalışır

const handleClick = (e) =>{
  if (e.target.id=== "play-btn"){

  
 const parent = e.target.closest(".card");
renderInfo(parent.dataset);


}
};


//* Liste alanındaki tıklamaları izleme

document.addEventListener("click", handleClick);

  


// 
// const handleClick = (e) => {
//     if (e.target.id === "play-btn") {
//       const parent = e.target.closest(".card"); // closest ı parentElement yerine kullanırız en yakın ebeveyne götürür
//       //* Çalınacak müziğin bilgilerini ekrana basar
//       renderPlayingInfo(parent.dataset);
//       //* Müziği çalar
//       playMusic(parent.dataset.url);
//     }
//   };
// 
// 


