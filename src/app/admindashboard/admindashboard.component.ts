import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { AdmindashboardService } from '../services/admindashboard.service';
import{HomeService} from '../services/home.service';
import { NotificationService } from "../services/notification.service";
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  courses:any
  users:any
  constructor( private toast:NotificationService,private adminService:AdminService,private admindashboardService:AdmindashboardService,private homeservice:HomeService) {

    this.admindashboardService.GetAllUsers().subscribe((data:any)=>{this.users=data})//Get all the users from db
    this.homeservice.getAllCourse().subscribe((data:any)=>{this.courses=data})//get all courses from db
   }

  ngOnInit(): void {
  }
  
  CourseDelete(course_Id:any){
    //delete function called from the admin service to delete course
    this.adminService.DeleteCourse(course_Id).subscribe((data:any)=>{
     // alert('Course Deleted Successfully')
     this.toast.showSuccess("Course Deleted !!", "Online Training Portal")
      console.log(data)
      location.reload();
    })
  }
}
