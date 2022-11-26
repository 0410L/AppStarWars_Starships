import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Starships, Result } from './starships.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  public page: number = 1;
  public mostrar: Result []=[];
  public mostrar2: Result []=[];
  public mostrar3: Result []=[];
  public navesDirect: any;
  public idNave: number = 0;
  public urlImagen: string = "";

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
  console.log('Nave desde Servicio', this.navesDirect);
  //Obtención id nave a través del parámetro url del objeto
  this.idNave = this.navesDirect.url.replace(/[^0-9]+/g, '');
  console.log('ID nave llamada: ', this.idNave);
}




}