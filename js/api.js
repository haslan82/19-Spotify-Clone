const url = 'https://shazam.p.rapidapi.com/artists/get-top-songs?id=567072&l=tr-TR';
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "eb6c2fff0dmsh61bd7071add4938p106fe0jsn2bd7e1296af8",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
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
    console.log(data);
   
    
   }
//     //* API'den aldığımız şarkıları song dizisine aktartdık
//     this.songs = data.tracks;
 
//     //* Ekrana popüler müzikleri aktaracak fonksiyona songs dizisini parametre olarak gönderdik
//     renderSongs(this.songs);
  
}



