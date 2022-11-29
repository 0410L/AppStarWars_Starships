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
 
  showModal : any;

  constructor(private router: Router, private StarshipsService: StarshipsService) {}

  navegarHome(){
    this.router.navigate(['home']);
  }
  
  ngOnInit(): void {
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
  load: boolean = false;


}

