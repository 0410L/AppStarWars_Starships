import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appStarWars';


 //acció que fará el botó 'iniciar' per començar amb els textos.
 iniciar(){
  this.navegacionweb = !this.navegacionweb;
  }
  navegacionweb:boolean = (false); //funció "boolean" / "false" per amagar el contingut de 'pantallaPrincipal'
  
  
  constructor(private router: Router) {
    this.router.navigate(['home'])
  }
  



}
