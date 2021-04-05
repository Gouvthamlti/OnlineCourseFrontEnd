import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdashboardService } from "../services/userdashboard.service";
import { NotificationService } from "../services/notification.service";
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  details: any;
  assigns: any;
  enrollid: number
  uid:number
  totals:any
  constructor(private userdashboardservice: UserdashboardService, private activeroute: ActivatedRoute, private router: Router,private toast:NotificationService) {
    //this.enrollid = this.activeroute.snapshot.params.Enroll_id;
    this.userdashboardservice.getAllCourseOfUser(sessionStorage.getItem("userName")).subscribe((data: any) => { this.details = data });//get enrolled courses
    this.userdashboardservice.getAllCourseAssigned(sessionStorage.getItem("userName")).subscribe((data: any) => { this.assigns = data });//get assigned courses
    this.userdashboardservice.GetCreditsTotal(sessionStorage.getItem("userName")).subscribe((data:any)=>{this.totals=data; console.log(data)})//get credits
  }

  ngOnInit(): void {
  }
  
  onCancel(enroll_Id: number) {

      //cancel course
    return this.userdashboardservice.CancelCourse(enroll_Id).subscribe(

      (data: any) => {
        console.log(data)
        if (data == "Course Cancelled") {

          //alert("Course Cancelled");
          this.toast.showSuccess("Course Cancelled !!", "Online Training Portal")

          location.reload();
          console.log(data)

        }
        else {
          alert("Course must be Cancelled before Course Start Date")
          console.log(data)
        }
      },
      error => {
        alert("Course must be Cancelled before Course Start Date")
      });

  }
  onComplete(enroll_Id: number) {
    //complete course enroll
    return this.userdashboardservice.CompleteCourse(enroll_Id).subscribe(
      (data: any) => {

        console.log(data);

        if (data == "Course Completed") {

          //alert("Course Completed");
          this.toast.showSuccess("Course Completed !!", "Online Training Portal")

          location.reload();
          console.log(data)

        }
        else {
          alert("Course cannot be completed")
          console.log(data)
        }
      },
      error => {
        alert("Course cannot be completed")
      });

  }
  onEnroll(assign_Id: number) {
    //already enrolled status
    this.userdashboardservice.EnrollCourseStatus(assign_Id).subscribe(data => {  this.toast.showSuccess("Course Cancelled !!", "Online Training Portal"); console.log(data); location.reload(); });
  }
  onCompletedStatus(assign_Id: number) {
    //complete status for assigned course
    this.userdashboardservice.CompletedStatus(assign_Id).subscribe(data => {  this.toast.showSuccess("Course Completed !!", "Online Training Portal"); console.log(data); location.reload(); })
  }

}
