import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Starships, Result } from './starships.interface';
import { Film } from './starships.interface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {


  public page: number = 1;
  public movie: number = 1;
  public mostrar: Result []=[];
  public mostrar2: Result []=[];
  public mostrar3: Result []=[];
  public navesDirect: any;
  public idDeNaves: number = 0;
  public urlImage: string = "";
  public urlImagePilots: string = "";
  public idDeMovies: number = 0;
  public urlImageMovies: string ="";
  public idDePilot: number = 0;
  public img!: string;

  constructor( private http: HttpClient) {
    /*this.verlistaNaves();*/
  }


  /*lanzar listado de naves*/

verlistaNaves() {
  this.http.get<Starships>(`https://swapi.dev/api/starships/?page=${this.page}`).subscribe((p) => {
    /*this.mostrar = p;*/
    if (this.page === 1) this.mostrar = p.results;
        else if (this.page === 2) this.mostrar2 = p.results;
        else this.mostrar3 = p.results;
       
        this.page += this.page;
        console.log('mostrar , ', this.mostrar);
        console.log('mostrar 2, ', this.mostrar2);
        console.log('mostrar 3, ', this.mostrar3);
    /*console.log(this.mostrar);*/
  });
}
 
/*lanzar listado y obtener id de la nave*/

fichaNaves(index: number, arrayNaves: number){
  if (arrayNaves===2) this.navesDirect = this.mostrar2[index];
  else if (arrayNaves===3) this.navesDirect = this.mostrar3[index];
  else this.navesDirect = this.mostrar[index];
  console.log('Nave desde el service', this.navesDirect);
  //Obtención id nave a través del parámetro url del objeto
  this.idDeNaves = this.navesDirect.url.replace(/[^0-9]+/g, '');
  this.idDeMovies = this.navesDirect.url.replace(/[^0-9]+/g, '');
  this.idDePilot = this.navesDirect.url.replace(/[^0-9]+/g, '');
  console.log('ID de nave: ', this.idDeNaves, this.idDeMovies, this.idDePilot);
  //console.log('ID nave llamada: ', this.idDeNaves);
}

clean() {
  this.page = 1;
  this.mostrar = []
  this.page = 1;
}

/*
verlistaMovies(id : string): Observable<Film> {
  return this.http.get<Film>(`https://swapi.dev/api/films/${id}`);
}




fichaMovies(){
}
*/
}






