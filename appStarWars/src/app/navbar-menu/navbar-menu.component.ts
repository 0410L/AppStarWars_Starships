import { StarshipsComponent } from './../starships/starships.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {
  [x: string]: any;

  constructor(private router: Router) {}

  navegarHome(){
    this.router.navigate(['home']);
  }
  
  
  navegarStarships(){
    this.router.navigate(['starships']);
    //window.stop()
  }

  navegarWelcome(){
    this.router.navigate(['home'])
    //this.router.navigate(['welcome'])
  }


  ngOnInit(): void {
  }

}

