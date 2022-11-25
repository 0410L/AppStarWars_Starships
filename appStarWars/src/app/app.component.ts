import { Component } from '@angular/core';

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


}
