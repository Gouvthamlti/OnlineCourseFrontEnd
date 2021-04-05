import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignCourse } from '../model/AssignCourse';
import { enroll } from '../model/enroll';
import { ViewdetailService } from "../services/viewdetail.service";
import { NotificationService } from "../services/notification.service";
@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewdetailComponent implements OnInit {

  courses:any;
  
  course_id:any;
  userid:any;
 

  Enrol:enroll
 
  @Input() public isUserLoggedIn: boolean;
  errorMessage:string="";
  uname:any;
  users:any
  constructor(private viewdetailService:ViewdetailService,private activeroute:ActivatedRoute,private router: Router, private toast:NotificationService) { 
   this.Enrol=new enroll();
   this.isUserLoggedIn=JSON.parse(localStorage.getItem('LoggedIn')!);
   //this.uname=localStorage.getItem('userName')
    this.course_id=this.activeroute.snapshot.params.Course_Id; 
    this.userid=this.activeroute.snapshot.params.User_Id
    this.viewdetailService.ViewCourseDetail(this.course_id).subscribe((data: any)=>{this.courses=data;}  );//get course detail based on course id
    this.viewdetailService.GetUserDetail(sessionStorage.getItem("userName")).subscribe((data:any)=>{this.users=data;console.log(data)})//get user detail based on username logged in
    
}

  ngOnInit(): void {
  
  }
  onenroll(user_Id:number,userName:string,course_Id:number,creditScore:number)
  {//enroll course by user
    this.viewdetailService.EnrollCourse(userName,user_Id,course_Id,creditScore,this.Enrol).subscribe();
    //alert("Enrollment successful")
  this.toast.showSuccess("Course Enrolled !!", "Online Training Portal")
    this.router.navigateByUrl('/home')
  }
 
  
}
