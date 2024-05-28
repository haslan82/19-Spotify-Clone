import { elements } from "./helpers.js";

export const renderSongs = (songs) => {
  
  
 // console.log(elements.list);
    elements.list.innerHTML = "";
    songs.forEach((song)=> {
 //console.log(song);
 
 //* Kart datasına kart elemanına bazı verileri ekleme
 const div = document.createElement("div");
div.dataset.name = song.name;
div.dataset.url = song.preview_url;
 div.dataset.img = song.album.images[1].url;
div.dataset.artname = song.artists[1]?.name;

//console.log(div);

 div.className = "card";
div.innerHTML = `
        <figure>
          <img 
          src="${song.album?.images[1].url}" />


          <div class="play">
            <i class="bi bi-play-fill" id="play-btn"></i>
          </div>

        </figure> 
          <h4>${song.artists[1]?.name}</h4>
          <h4>${song.name}</h4>`;

elements.list.appendChild(div);

});

};

export const renderPlayingInfo = (song) => {
  console.log(song);
 elements.playingInfo.innerHTML=`
 <img
          src="${song.img}"
          id="info-img"
          alt=""
          class=""
        />
        <div>
          <p>${song.name}</p>
          <h3>${song.artname}</h3>
        </div>
 `;
 };

// başlığı günceller
 export const updateTitle = (message) => {
  elements.title.innerText = message;

};



