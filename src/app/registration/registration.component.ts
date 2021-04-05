import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { Register } from '../model/register';
import { NotificationService } from "../services/notification.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  register: Register;
  constructor(private registerService: RegistrationService, private route: Router, private fb: FormBuilder, private toast:NotificationService) {
    this.register = new Register();

    this.registerForm = fb.group({
      // Mobile_Number:['', [Validators.required,Validators.minLength(10),Validators.pattern("[0-9]*​")]], //Validators.minLength(10),
      UserName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      Mobile_Number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]*")]],
      Name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
      Gender: ['', [Validators.required]],
      Age: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      Email: ['', [Validators.required, Validators.email]],
      Address1: ['', [Validators.required]],
      Address2: ['', [Validators.required]],
      District: ['', [Validators.required]],
      State: ['', [Validators.required]]
    });
  }//register form group with validations

  ngOnInit(): void {
  }
  get f() {
    return this.registerForm.controls;
  }//form control

  errorMessage: string = "";
  InsertUser() {
    // method uses register service to call add user method
    this.registerService.addUsers(this.registerForm.value).subscribe(
      (data: any) => {
        console.log(JSON.stringify(data.Message));
        if (data.Message == "Welcome") {
          this.toast.showSuccess("User Registered successfully !!", "Notification")
          this.route.navigateByUrl('/login')
        }
        else {
          console.log(data);
          this.errorMessage = "Not Found";
        }
      },
      error => {
        this.errorMessage = "Not Found";
      });


    // console.log(this.registerForm.value);

  }
}
