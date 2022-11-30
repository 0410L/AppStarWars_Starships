import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUserNameLogFromLS('userNameLog');
    this.usersService.checkLoginControl();
 }



  /*
   videointro() {
    return ('/../../assets/intro.mp4')
  }
  */
  
  

}