import { Starships } from './../starships.interface';
import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../starships.service';

@Component({
  selector: 'app-card-starships',
  templateUrl: './card-starships.component.html',
  styleUrls: ['./card-starships.component.css']
})
export class CardStarshipsComponent implements OnInit {

  constructor (private starshipsService: StarshipsService){}
  //public urlImage: string = 'https://starwars-visualguide.com/assets/img/starships/';
  //public urlImage: string = '/../../starships/starships.json/';
  public urlImage: string = '/../../assets/starships/';
  public urlImageMovies: string = 'https://starwars-visualguide.com/assets/img/films/';
  public urlImagePilots: string = '/../../assets/pilots/';

  get cardNave () {
    //console.log(this.cardNave)
    return this.starshipsService.navesDirect;
  }

  get idDeNaves () {
    //console.log(this.idDeNaves)
    return this.starshipsService.idDeNaves
  }

  get idDeMovies () {
    //console.log(this.idDeNaves)
    return this.starshipsService.idDeMovies
  }

  get idDePilot () {
    //console.log(this.idDeNaves)
    return this.starshipsService.idDeMovies
  }


  ngOnInit(): void {
    
  }

}
