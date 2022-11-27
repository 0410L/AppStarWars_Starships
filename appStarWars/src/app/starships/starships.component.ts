import { StarshipsService } from '../starships.service';
import { Component, OnInit } from '@angular/core';
import { Starships } from '../starships.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  get mostrar (){
    return this.starshipsService.mostrar;
    
  }

  get mostrar2 (){
    return this.starshipsService.mostrar2;
  }

  get mostrar3 (){
    return this.starshipsService.mostrar3;
  }

  startFicha() {
    this.navegacionFichaNaves = !this.navegacionFichaNaves;
  }
  navegacionFichaNaves:boolean = (false);



  verNaves(index: number, arrayNaves: number) {
    console.log('index de la nave llamada: ', index);
    this.starshipsService.fichaNaves(index, arrayNaves);
  }

  masNaves() {
    this.starshipsService.verlistaNaves();

  }

  
  constructor (private starshipsService: StarshipsService){}


  ngOnInit(): void {
    
  }

}


