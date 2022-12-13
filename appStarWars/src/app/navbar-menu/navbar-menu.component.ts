import { LoginComponent } from './../login/login.component';
import { UsersService } from './../users.service';
import { StarshipsService } from './../starships.service';
import { StarshipsComponent } from './../starships/starships.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {
 


  constructor(private router: Router, private starshipsService: StarshipsService, private usersService: UsersService) {}

  navegarHome(){
    this.router.navigate(['home']);
  }
  
  
  navegarStarships(){
    this.router.navigate(['starships']);
    this.starshipsService.verlistaNaves();
    //window.stop()
  }

  navegarWelcome(){
    this.router.navigate(['home']);
    //this.router.navigate(['welcome'])
  }

  logIn(){
    return this.usersService.loginControl;
  }

  signUp(){
    this.router.navigate(['login'])

  }

  get userLogged() {
    return this.usersService.loggedUser;
   }
 
   get loginControl() {
     return this.usersService.loginControl;
}

listadoNaves() {
  this.starshipsService.verlistaNaves();
}

logout() {
  this.usersService.logout();
}

  ngOnInit():void {
  }

  /*getUserLogged() {
    this.UsersService.getUser().subscribe(user => {
    console.log(user)
    });
  }*/



}

