import { UsersService } from './../users.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;
  error!: any

  constructor(public UsersService: UsersService, public router: Router) {}

  login() {
    const user = {email: this.email, password: this.password};
    this.UsersService.login(user).subscribe( data => {
    this.UsersService.setToken(data.token);
    this.router.navigateByUrl('/');
      //console.log(data);
    },

    /*
    error => {
      console.log(error)
    }*/

    );
    
    //console.log(this.email);
    //console.log(this.password);
  }

  

}
