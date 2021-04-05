import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewdetailService } from "../services/viewdetail.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public isUserLoggedIn: boolean;
  loggedIn:boolean;
  Users:any
  constructor(private router:Router, private viewdetailService:ViewdetailService) { 
    this.loggedIn=false;//login detemined as false
    this.isUserLoggedIn=JSON.parse(localStorage.getItem('LoggedIn')!);//checking user logged in value
    this.viewdetailService.GetUserDetail(sessionStorage.getItem("userName")).subscribe((data:any)=>{this.Users=data;console.log(data)})//get user detail with respect to username
  }
  
  ngOnInit(): void {
  }
  loginClicked(){
    var local= localStorage.getItem("currentuser");
    if(!local)
      this.loggedIn=false;
    else
      this.loggedIn=true;

      // console.log("LOGGED IN: "+this.loggedIn);
  }
  logoutClicked(){
    //when logout is clicked local storage and session storage items are removed
    this.isUserLoggedIn=false;
    localStorage.removeItem('currentuser');
    sessionStorage.removeItem('userName');
    localStorage.setItem('LoggedIn', 'false');

    this.router.navigate(['home']);
  }
  logout(){​​

    localStorage.removeItem('currentuser');
    this.router.navigate(['/home']);

  }​​
}
