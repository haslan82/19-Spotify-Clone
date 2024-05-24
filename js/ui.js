import { elements } from "./helpers.js";

export const renderSongs = (songs) => {
    elements.list.innerHTML = "";
    songs.forEach((song)=> {
//console.log(song);


//* Kart datasına kart elemanına bazı verileri ekleme

const div = document.createElement("div")
div.dataset.title = song.item.title;
div.dataset.url = song.item.url;
div.dataset.img = song.item.header_image_thumbnail_url;

div.className = "card";
//console.log(div);

div.innerHTML=`
<figure>
          <img src="${song.item.header_image_thumbnail_url}">


          <div class="play">
            <i class="bi bi-play-fill" id="play-btn"></i>
          </div>
        </figure> 
          <h4>${song.item.artist_names}</h4>
          <h4>${song.item.title}</h4>

`

//console.log(elements.list);
    elements.list.appendChild(div);

    });

    
};

const renderPlayingInfo = () => {
  
};



