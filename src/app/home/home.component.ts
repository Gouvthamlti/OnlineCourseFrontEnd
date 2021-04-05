import { Component, OnInit } from '@angular/core';
import { HomeService,ICourse } from "../services/home.service";
import { ViewdetailService } from '../services/viewdetail.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //courses:any;
  courses:ICourse[];
  searchValue:string;
 
  constructor(private homeservice:HomeService,private viewdetailService:ViewdetailService) {
    this.homeservice.getAllCourse().subscribe((data: any)=>{this.courses=data;}  );//get all courses from db
    
   }

  ngOnInit(): void {
  }

}
