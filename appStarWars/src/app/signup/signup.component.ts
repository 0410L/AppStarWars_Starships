import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  p:any
  submit:boolean = false;


  signupForm: FormGroup = this.fb.group({
    nameForm: ['', [Validators.required, Validators.minLength(3)]],
    emailForm: ['', [Validators.required, Validators.email]],
    passForm: ['', [Validators.required, Validators.minLength(4)]],
    termsForm: ['', [Validators.requiredTrue]]
  });

  constructor(public signupModal: NgbModal, 
    private fb: FormBuilder,
    private usersService: UsersService) {}

  validacionOK(campo: string) {
    return this.signupForm.controls[campo].errors;
  }

  submitSignup() {
    this.submit = false;
    if (
      this.signupForm.status !== 'VALID') 
      {
      this.submit = true;
      swal.fire({icon:'error', title:'Error inputs', text:'Please, check the data', timer: 2500, showConfirmButton: false, background: '#fff url(../../assets/dartV.jpg)'});
      //alert('Please, check the entered data');
    } else {
    this.usersService.newUser(this.signupForm.value.nameForm, 
      this.signupForm.value.emailForm, 
      this.signupForm.value.passForm);
      this.signupModal.dismissAll()}
    }




  ngOnInit(): void {
    
  }
}
