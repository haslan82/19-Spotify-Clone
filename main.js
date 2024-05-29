import { API } from "./js/api.js";
import { elements } from "./js/helpers.js";
import {renderPlayingInfo, updateTitle} from "./js/ui.js";

 
const api = new API();
api.getPopular();

//* Sayfa yüklendiği anda apiye istek atıp popüler müzikleri getirir
document.addEventListener( "DOMContentLoaded",
 async () => await api.getPopular()
);

const playMusic = (url) => {

  // müziğin url ini html e aktarma
 elements.audioSource.src = url;

 // audio elementinin müziği yüklemesini sağladık
 elements.audio.load();
 console.log(elements.audio)

 // audio elementinin müziği oynatmasını sağlar
 elements.audio.play()
};

//* Liste de tıklamalarda çalışır




//* Liste alanındaki tıklamalarda çalışır


const handleClick = (e) => {
  if (e.target.id === "play-btn") {
     
    const parent = e.target.closest(".card");
// çalınacak müziğin bilgilerini ekrana basar
renderPlayingInfo(parent.dataset);
// müziği çalar
playMusic(parent.dataset.url)

  }
    };
  

    //* Liste alanındaki tıklamaları izleme
  document.addEventListener("click", handleClick);

// fotoğrafı dönderir
  const animatePhoto = () => {
    const img = document.querySelector(".info img");
    img.className = "animate";
  }

// img etiketine eklediğimiz animate clasını kaldırır.
const stopAnimation = () => {
  const img = document.querySelector(".info img");
  img.classList.remove("animate");
}

// Müzik satrt - stopunu olaylarını izler
elements.audio.addEventListener("play", animatePhoto);
elements.audio.addEventListener("pause", stopAnimation);


elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = e.target[0].value;
  if (!query) {
    alert("Lüften bütün alanları doldurunuz!");
    return;
  }
  //* Başlığı güncelle
  updateTitle (`${query} İçin Sonuçlar`);
  api.searchMusic(query);
});

elements.menu.addEventListener("click", ()=> {
  elements.ulList.classList.toggle("toggle");
} )