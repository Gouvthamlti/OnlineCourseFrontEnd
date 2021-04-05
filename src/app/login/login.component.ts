import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from '../services/user-login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : any={};    
  errorMessage:string="";
  userName:any;
  password:any;
  userlogin:any;
  submitted = false;
  loginForm: FormGroup = new FormGroup({});
  constructor(private router:Router,public fb:FormBuilder,private LoginService:UserLoginService) {
    this.loginForm = fb.group({
      UserName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      Password:['',[Validators.required,Validators.minLength(8)]]});//login form group with validations
   }
   get f() { return this.loginForm.controls; }//form control
  ngOnInit(): void {
  }
  OnLoginByUser(){​​​​
    // this.submitted = true;
    //login service calls login method and checks for username and password 
      this.LoginService.UserLoginValid(this.userName,this.password).subscribe(
      // ta=>this.userlogin=ta
      (data:any) => {    
        console.log(JSON.stringify(data.Message));  
              if(data.Message=="Welcome")    
              { 
                  
                this.router.navigateByUrl("/userdashboard")
                console.log(data);  
                console.log(this.userName);
                console.log(this.password);
                sessionStorage.setItem("userName",this.userName);//setting username in session storage
                localStorage.setItem('LoggedIn', 'true');//setting login value true in local storage
               
              }    
              else{    
                this.errorMessage ="Invalid Username or Password";  
              }    
            },    
            error => {    
              this.errorMessage ="Invalid Username or Password";     
            });  
  }​​​​

}
