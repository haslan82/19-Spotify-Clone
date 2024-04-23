import { renderSongs } from "./ui.js";

const url =
  "https://shazam.p.rapidapi.com/charts/track?locale=tr-TR&listId=ip-country-chart-TR";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "17bfa31bbbmsh1355592a7405f9bp1dd229jsnd7e87c1e1260",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};
//* API isteklerini yönettiğimiz class yapısı
export class API {
  constructor() {
    this.songs = [];
  }
  //* Popüler müzikleri getirir
  async getPopular() {
    const res = await fetch( url , options);
    console.log(res);
    const data = await res.json();
    console.log(data);
    //* API'den aldığımız şarkıları song dizisine aktartdık
    this.songs = data.tracks;
 
    //* Ekrana popüler müzikleri aktaracak fonksiyona songs dizisini parametre olarak gönderdik
    renderSongs(this.songs);
  }
  
}
