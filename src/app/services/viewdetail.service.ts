import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { enroll } from "../model/enroll";
import { AssignCourse } from "../model/AssignCourse";
@Injectable({
  providedIn: 'root'
})
export class ViewdetailService {

  constructor(private httpc:HttpClient) { }

  public ViewCourseDetail(course_Id:number){
    //view all details of course
    return this.httpc.get("https://localhost:44388/api/Viewdetail?course_Id="+course_Id)
  }
  public GetUserDetail(userName:string)
  {
    //gte user detail with username
    return this.httpc.get("https://localhost:44388/api/Enroll?userName="+userName)
  }
 
  public EnrollCourse(userName:string,user_Id:number,course_Id:number,creditScore:number,Enrol:enroll){
    //user enroll for  course
    return this.httpc.post("https://localhost:44388/api/Enroll?userName="+userName+"&user_Id="+user_Id+"&course_Id="+course_Id+"&course_CreditScore="+creditScore,Enrol)
  }
 
}
