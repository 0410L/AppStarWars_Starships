import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ThisReceiver} from '@angular/compiler'
import swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submit: boolean = false;
  email!: string;
  password!: string;
  error!: any

  loginForm: FormGroup = this.fb.group({
    emailForm: ['', [Validators.required, Validators.email]],
    passForm: ['', [Validators.required, Validators.minLength(4)]],
  });

  validacionOK(campo: string) {
    return this.loginForm.controls[campo].errors;
  }

  constructor(public loginModal: NgbModal, private fb: FormBuilder,private usersService: UsersService) {}

  login() {
    this.submit = false;
    if (this.loginForm.status !== 'VALID') {this.submit = true; swal.fire({icon:'error', title:'Error inputs', text:'Please, check the data', timer: 2500, showConfirmButton: false, background: '#fff url(../../assets/dartV.jpg)'});
    } else {
      this.usersService.checkLogin(this.loginForm.value.emailForm, this.loginForm.value.passForm);this.loginModal.dismissAll();
    }



    /*
    error => {
      console.log(error)
    }*/
    
  
    
    //console.log(this.email);
    //console.log(this.password);
  }
ngOnInit(): void {
  
}
  

}
