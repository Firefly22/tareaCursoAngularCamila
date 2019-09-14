import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string = "48768c3f4fde5692233da0f0554d8e7f";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor(private jsonp: HttpClientJsonpModule, private http:HttpClient ) { }

  getPopulars() { //funcion de ejemplo para que vean la estructura json que devuelve en el navegador y vean sus atributos y los manejen
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback').pipe(map((data:any)=>{
      data.results = data.results.splice(0,9);
      return data;
    })); //jsonp para asegurar la petición a otros dominios
  }

  getPeliTeatro(){
let url  = `${this.urlMoviedb}/discover/movie?api_key=${this.apikey}&language=es&sort_by=popularity.desc&primary_release_date.gte=2019-08-07&primary_release_date.lte=2019-09-07`;
return this.http.jsonp(url, 'callback').pipe(map((data:any)=>{
  data.results = data.results.splice(0,9);
  return data;
}));
  }

  getKid(){
    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apikey}&language=es&sort_by=popularity.desc&certification=G&include_adult=false&include_video=false&page=1&primary_release_year=2019&with_genres=10751`;
    return this.http.jsonp(url, 'callback').pipe(map((data:any)=>{
      data.results = data.results.splice(0,9);
      return data;
    }));
  }

  getAnio(datoanio){
    let url= `${this.urlMoviedb}/discover/movie?api_key=${this.apikey}&language=es&sort_by=popularity.desc&include_video=false&year=${datoanio}`;
    return this.http.jsonp(url, 'callback').pipe(map((data:any)=>{
      data.results = data.results.splice(0,9);
      return data;
    }));
  }

  getUno(id){
    let url= `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback')
  }

  getxName(cajita){
    let url = `${this.urlMoviedb}/search/movie?api_key=${this.apikey}&language=es&query=${cajita}`;
    return this.http.jsonp(url, 'callback').pipe(map((data:any)=>{
      data.results = data.results.splice(0,9);
      return data;
    }));
    }
  }
