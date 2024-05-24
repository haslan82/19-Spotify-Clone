import { renderSongs } from "./ui.js";

// const url = 'https://genius-song-lyrics1.p.rapidapi.com/chart/songs/?chart_genre=all&per_page=30&page=1';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '4881877b7fmsh063d77fae5a42d9p1be6e9jsn8d4ae58e7971',
// 		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
// 	}
// };
//*API isteklerini yönettiğimiz class yapısı
export class API {
  constructor() {
    this.songs = [];
  }
  //*Popüler müzikleri getirir.
   async getPopular () {
    const res = await fetch(url, options);
    const data = await res.json();
    
   //* API'den aldığımız şarkıları song dizisine aktardık
    this.songs = data.chart_items;
    
//* Ekrana popüler müzikleri aktaracak fonksiyona songs dizisini parametre olarak gönderdik
    
renderSongs(this.songs);


   }
}



