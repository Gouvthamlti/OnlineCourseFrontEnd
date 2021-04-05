import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {
  isAdminLoggedIn:boolean;
  constructor() { 
    this.isAdminLoggedIn=JSON.parse(localStorage.getItem('AdminLoggedIn')!)//to get admin log in whether true or false
  }

  ngOnInit(): void {
  }
  logoutClicked(){
    localStorage.setItem('AdminLoggedIn', 'false');//set  adminlogin item false when logout clicked
  }
}
