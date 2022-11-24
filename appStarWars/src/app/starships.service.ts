import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Starships, Result } from './starships.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  public mostrar: Result []=[];

  constructor( private http: HttpClient) {}



verlistaNaves() {
  this.http.get<Starships>('https://swapi.dev/api/starships/').subscribe( ( p ) => {this.mostrar = p.results});
}

}
