
import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appStarWars';



 //acció que fará el botó 'iniciar' per començar amb els textos.
 iniciar(){
  this.router.navigate(['home']);
  this.navegacionweb = !this.navegacionweb;
 
  }
  navegacionweb:boolean = (false); //funció "boolean" / "false" per amagar el contingut de 'pantallaPrincipal'
  
  
  
  constructor(private router: Router, private usersService : UsersService) {
    //this.router.navigate(['home'])
  }
  
  
  ngOnInit(): void {
    this.usersService.getUserNameLogFromLS('userNameLog');
    this.usersService.checkLoginControl();
 }
}
