import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignCourse } from '../model/AssignCourse';
import { AdmindashboardService } from '../services/admindashboard.service';
import { HomeService } from '../services/home.service';
import { ViewdetailService } from '../services/viewdetail.service';
import { NotificationService } from "../services/notification.service";
@Component({
  selector: 'app-assigncourse',
  templateUrl: './assigncourse.component.html',
  styleUrls: ['./assigncourse.component.css']
})
export class AssigncourseComponent implements OnInit {

  adminUsername:string
  courses:any
  users:any
  enrolls:any
  user_Id:any
  assign:AssignCourse
  @Input() public  isAdminLoggedin:boolean;
  constructor( private toast:NotificationService,private admindashboardservice:AdmindashboardService,private homerService:HomeService,private activeroute:ActivatedRoute,private router:Router) {
    this.isAdminLoggedin=JSON.parse(localStorage.getItem('AdminLoggedIn')!);//gte value of admin loggedin
    this.homerService.getAllCourse().subscribe((data: any)=>{this.courses=data;}  );//get all the courses
    this.user_Id=this.activeroute.snapshot.params.User_Id;//get user id alone
    this.admindashboardservice.GetUserById(this.user_Id).subscribe((data:any)=>{this.users=data});//get particular user by id
    this.admindashboardservice.GetUserEnrolledCourses(this.user_Id).subscribe((data:any)=>{this.enrolls=data})//get enrolled course
    console.log(sessionStorage.getItem('adminUsername'))
    console.log(this.isAdminLoggedin)
    console.log(this.user_Id)
   }

  ngOnInit(): void {
  }
  onassign(userName:string,user_Id:number,course_Id:number,course_CreditScore:number){
    //using admin dashboard service to call assign vourse function
    this.admindashboardservice.AssignCourse(userName,user_Id,course_Id,sessionStorage.getItem('adminUsername'),course_CreditScore,this.assign).subscribe((data:any)=>(console.log(data)))
    //alert("Assigned succesfully")
    this.toast.showSuccess("Course Assigned !!", "Online Training Portal")//toast message
     //this.router.navigateByUrl('admin/dashboard')
  }
}
