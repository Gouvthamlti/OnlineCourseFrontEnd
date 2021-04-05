import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { ViewdetailService } from '../services/viewdetail.service';
import { ViewdetailComponent } from '../viewdetail/viewdetail.component';
import { NotificationService } from "../services/notification.service";
@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {

  
  courses:any;
  
  course_Id:any;
  constructor( private toast:NotificationService,private router:Router,private activeroute:ActivatedRoute,private adminService:AdminService,private viewdetailService:ViewdetailService) { 
    this.course_Id=this.activeroute.snapshot.params.Course_Id; //get course id usig snapshot
    this.viewdetailService.ViewCourseDetail(this.course_Id).subscribe((data: any)=>{this.courses=data;}  );//get course details
  }

  ngOnInit(): void {
  }
  onUpdate( courseName:string,   courseDescription:string,   courseAuthor:string,   courseDuration:string,   courseDifficulty:string,   course_CreditScore:number){
    //alert("course Updated")
    //use admin service to update course along with parameters
    this.toast.showSuccess("Course Edited !!", "Online Training Portal")
    this.router.navigateByUrl("admin/dashboard")
    return this.adminService.UpdateCourse(this.course_Id,courseName,courseDescription,courseAuthor,courseDuration,courseDifficulty,course_CreditScore).subscribe((data:any)=>{console.log(data)})
   
  }

}
