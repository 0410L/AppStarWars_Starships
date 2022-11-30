import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email!: string;
  password!: string;
  confirmPassword!: string;
  passwordError!: boolean;

  constructor(public UsersService: UsersService) {}
  /*
  register() {
    const user = { email: this.email, password: this.password };
    this.UsersService.register(user).subscribe(data => {
    this.UsersService.setToken(data.token);
      //console.log(data);
    });
    //console.log(this.email);
    //console.log(this.password);
    
  }*/

}
