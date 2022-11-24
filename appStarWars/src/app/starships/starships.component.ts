import { StarshipsService } from '../starships.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  
  constructor (private StarshipsService: StarshipsService){}

  items: any[]=[]


  get mostrar (){
    
    this.StarshipsService.verlistaNaves();
    return this.StarshipsService.mostrar;
  }


  ngOnInit(): void {
    
  }

}


