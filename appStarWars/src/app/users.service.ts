import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { EmailValidator } from '@angular/forms';
import { Users } from './users.interface';
import swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  contadorID: number = 0;
  loggedUser: any = 'Guest';
  loginControl: boolean = false;

  // Array usuarios de tipo Users
  usersArray: Users[] = [
    {id: 1, userName: 'Oriol', userEmail: 'oriol.busquet@gmail.com', userPass: '404404'},
    {id: 2, userName: 'admin', userEmail: 'admin@admin.admin', userPass: 'admin',},
  ];

  // GUARDAR EN LOCALSTORAGE
  

  loginControlToLS(loginC: boolean) {
    localStorage.setItem('loginC', JSON.stringify(loginC));
  }

  saveToLocalStorage(listUsers: Users[]) {
    localStorage.setItem('listUsers', JSON.stringify(listUsers));
  }


  // GUARDAR NAME/USER LOGGED

  nameToLS(userNameLog: string) {
    localStorage.setItem('userNameLog', userNameLog);
  }



  // IR A GET USERS ARRAY EN LOCAL

  getFromLocalStorage(key: string) {
    this.usersArray = JSON.parse(localStorage.getItem(key)!);
  }




  // IR A GET CONTROL EN LOCAL

  getLoginControlFromLS(key: string) {
    this.loginControl = JSON.parse(localStorage.getItem(key)!);
  }



  // IR A USUARIO LOGEADO EN LOCAL

  getUserNameLogFromLS(key: string) {
    this.loggedUser = localStorage.getItem(key);
  }


  // CHECK ESTADO LOGIN (SERVICIO)

  checkLoginControl() {
    this.getLoginControlFromLS('loginC');
  }




  // USUARIOS

  newUser(userName: string, userEmail: string, userPass: string) {
    console.log('nuevo usuario');

    let id = this.contadorID + 1;
    this.contadorID++;
    this.usersArray.push({ id, userName, userEmail, userPass });
    this.saveToLocalStorage(this.usersArray);
    
    swal.fire({icon:'success',title: 'Account created!',text:'Congratulations', timer: 2000, showConfirmButton: false, background: '#fff url(../../assets/dMando.jpg)'})

    console.log('Array Users', this.usersArray);
  }
  

  checkLogin(email: string, pass: string) {
    console.log('Dentro servicio CHECK LOGIN');

    const user = this.usersArray.find((user) => user.userEmail === email);
    user?.userPass === pass

      ? ((this.loginControl = true),
        swal.fire(`Welcome ${user?.userName}`,),

        this.loginControlToLS(this.loginControl))
      : swal.fire({icon:'warning', title:'Email or Pass no valids', text:'Please try again', timer: 2000, showConfirmButton: false,background: '#fff url(../../assets/dartM.jpg)'});
      
    console.log('Usuario Logueado: ', user);
    console.log('loginControl: ', this.loginControl);

    this.loggedUser = user?.userName;

    this.nameToLS(this.loggedUser);
  }


  logout() {
    
    this.loginControl = false;


    this.loginControlToLS(this.loginControl);
    this.loggedUser = 'Guest';
    this.nameToLS(this.loggedUser);

    swal.fire({icon: 'success', title: 'Logout successfully', text:'See you soon',  timer: 2000, showConfirmButton: false, background: '#fff url(../../assets/dr2D2.jpg)'})
  }



}
