import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Starships, Result } from './starships.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  public mostrar!:Starships

  constructor( private http: HttpClient) {
    this.verlistaNaves()
  }



verlistaNaves() {
  this.http.get<Starships>('https://swapi.dev/api/starships/').subscribe( ( p ) => {
    this.mostrar = p;
    console.log(this.mostrar);
  });
  
}

verMasLista(){
alert('hola')}




}