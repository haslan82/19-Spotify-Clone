import { renderSongs } from "./ui.js";

const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=42&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4881877b7fmsh063d77fae5a42d9p1be6e9jsn8d4ae58e7971',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};
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
    this.songs = data.tracks;
   // console.log(this.songs);
//* Ekrana popüler müzikleri aktaracak fonksiyona songs dizisini parametre olarak gönderdik
    
renderSongs(this.songs);


   }
}



