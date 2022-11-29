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
 


  constructor(private router: Router, private StarshipsService: StarshipsService, private UsersService: UsersService) {}

  navegarHome(){
    this.router.navigate(['home']);
  }
  
  
  
  navegarStarships(){
    this.router.navigate(['starships']);
    this.StarshipsService.verlistaNaves();
    //window.stop()
  }

  navegarWelcome(){
    this.router.navigate(['home'])
    //this.router.navigate(['welcome'])
  }

  logIn(){
    this.router.navigate(['Login'])
  }

  signUp(){
    this.router.navigate(['register'])

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

