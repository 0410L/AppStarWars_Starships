import { Router } from '@angular/router';
import { SignupComponent } from './../signup/signup.component';
import { UsersService } from './../users.service';
import { StarshipsService } from '../starships.service';
import { Component, OnInit } from '@angular/core';
import { Starships } from '../starships.interface';
import { FormControl } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {


  showModal: any;
  page: any;
  fichaNaves: Starships[]=[];

  get mostrar (){
    return this.starshipsService.mostrar;
  }

  get mostrar2 (){
    return this.starshipsService.mostrar2;
  }

  get mostrar3 (){
    return this.starshipsService.mostrar3;
  }


  verNaves(index: number, arrayNaves: number) {
    console.log('index naves', index);
    this.starshipsService.fichaNaves(index, arrayNaves);
  }

  masNaves() {
    this.starshipsService.verlistaNaves();

  }
  /*
  fichaMovies(index: number, arrayNaves: number) {
    console.log('index de la peli llamada: ', index);
    this.starshipsService.fichaMovies(index, arrayNaves);
  }
  */

  
  /*constructor (private starshipsService: StarshipsService){}

  load: boolean = false;

  ngOnInit(): void {
    
  }*/

  constructor (private starshipsService: StarshipsService, private usersService: UsersService, private router: Router){}

  load: boolean = false;

  ngOnInit(): void {

     this.usersService.checkLoginControl();
     this.usersService.getUserNameLogFromLS('userNameLog');
     if (!this.usersService.loginControl) {
       swal.fire({icon:'error',title:'You cannot enter this area without registering!', text:'Please, go to login or signup', timer: 3500, showConfirmButton: false, background: '#fff url(../../assets/dartV.jpg)'});
       this.router.navigate(['home'])
       //this.signupComponent.signupModal.open(abrirModal);
       return;
     } else {
       this.starshipsService.clean();
       this.masNaves();
     }
  }

}


