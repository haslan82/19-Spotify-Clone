import { API } from "./js/api.js";


 
const api = new API();
api.getPopular();

//* Sayfa yüklendiği anda apiye istek atıp popüler müzikleri getirir
document.addEventListener( "DOMContentLoaded",
 async () => await api.getPopular()
);


//* Liste de tıklamalarda çalışır




//* Liste alanındaki tıklamalarda çalışır


const handleClick = (e) => {
  if (e.target.id === "play-btn") {
     
    console.log(e.target.closest(".card"));


  }
    };
  

    //* Liste alanındaki tıklamaları izleme
  document.addEventListener("click", handleClick);




