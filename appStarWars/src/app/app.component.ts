import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';
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
  this.navegacionweb = !this.navegacionweb;
  }
  navegacionweb:boolean = (false); //funció "boolean" / "false" per amagar el contingut de 'pantallaPrincipal'
  
  
  constructor(private router: Router, public UsersService: UsersService) {
    this.router.navigate(['home'])
  }
  
  ngOnInit() {
    this.getUserLogged();
    
  }
  getUserLogged() {
    this.UsersService.getUser().subscribe(user => {
    console.log(user)
    });
  }


}
