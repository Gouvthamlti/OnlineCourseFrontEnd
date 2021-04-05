import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from "../services/user-login.service";
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  errormessage:string
  userName:any
  password:any
  adminloginForm: FormGroup = new FormGroup({});
  constructor(private router:Router,public fb:FormBuilder,private LoginService:UserLoginService) { 
    this.adminloginForm = fb.group({
      UserName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      Password:['',[Validators.required,Validators.minLength(8)]]});//admin login form group with validation
  }

  ngOnInit(): void {
  }
  get f() { return this.adminloginForm.controls; }
  //login function too check username and password
  OnLoginbyAdmin(){    
   
    this.LoginService.AdminLogin(this.userName,this.password).subscribe(    
      (data:any) => {    
            
        if(data.Message=="Welcome")    
        {
           this.router.navigateByUrl('admin/dashboard');
          //this.router.navigate(['/Dasboard']);  
          console.log(data.Message);  
          sessionStorage.setItem("adminUsername",this.userName);//set session storage item as admin username
          localStorage.setItem('AdminLoggedIn', 'true');//set localstorage admin login item as true
          console.log(sessionStorage.getItem("adminUsername"))
        }    
        else{    
          this.errormessage ="Invalid Username or Password";  
        }    
      },    
      error => {    
        this.errormessage ="Invalid Username or Password";     
      });  
       
  }; 
}
