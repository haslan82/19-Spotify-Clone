import { renderSongs } from "./ui.js";

const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7e33eaab09msh5f077d37779af85p192077jsncf6b77f665e2',
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


   // arama metodu
async searchMusic(query){
 const res = await fetch(`
 https://spotify23.p.rapidapi.com/search/?q=${query} &type=multi&offset=30&limit=30&numberOfTopResults=10`, options
);
const data = await res.json();
console.log(data)


let newData = data.albums.items;
console.log(newData)

newData = newData.map((song) => ({ ...song.albums }));
this.songs = newData;
//console.log(this.songs);
// aratılan şarkıları ekrana basma
renderSongs(this.songs);
}
}