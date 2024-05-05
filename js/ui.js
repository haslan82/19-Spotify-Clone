import { elements } from "./helpers.js";

export const renderSongs = (songs) => {
  elements.list.innerHTML = "";
  songs.forEach((song) => {
    //* Kart datasına kart elemanına bazı verileri ekleme
    const div = document.createElement("div");
    div.dataset.url = song.hub?.actions?.pop().uri;
 div.dataset.title = song.title
 div.dataset.img = song.images?.coveart;


 div.className = "card";
div.innerHTML=`
<figure>
        <img
        src="${song.images?.coverart}"
        alt=""
        />
        <div class="play">
        <i class="bi bi-play-fill" id="play-btn"></i>
        </div>
    </figure>
    <h4>${song.subtitle}</h4>
    <h4>${song.title}</h4>`;
    elements.list.appendChild(div);

    });
};



/* let boy = Number(prompt("boyunuz"));
let kilo = Number(prompt("kilonuz"));

const hesapla = (x, y) =>{
const index = x/(y*y)*100;
return index
};

const sonuc = hesapla (boy, kilo);
alert(sonuc); */


/* var dizi = [1, 3, 5, 7, 9];
for (var i = 0; i < dizi.length; i++) {
  var yeniDeger = dizi[i] * 2;
  console.log("Dizinin", i + 1, ". elemanının 2 ile çarpılmış değeri:", yeniDeger);
} */