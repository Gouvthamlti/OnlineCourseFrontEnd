import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserdashboardService {

  constructor(private httpc:HttpClient) { }

  public getAllCourseOfUser(userName:string)
  {
    //get courses of user
    return this.httpc.get("https://localhost:44388/api/UserDashboard?userName="+userName);
  }
  public getAllCourseAssigned(userName:string){
    //get assigned course for user
    return this.httpc.get("https://localhost:44388/api/UserDashboardComplete?userName="+userName)
  }
  public CancelCourse(enroll_Id:number)
  {
    //cancel a course
    return this.httpc.put("https://localhost:44388/api/UserDashboard?enroll_Id="+enroll_Id,'')
  }
  public CompleteCourse(enroll_Id:number)
  {
    //complete course
    return this.httpc.put("https://localhost:44388/api/UserDashboardComplete?enroll_Id="+enroll_Id,'')
  }
  public EnrollCourseStatus(assign_Id:number)
  {
    //enroll course
    return this.httpc.put("https://localhost:44388/api/EnrolledStatus?assign_Id="+assign_Id,'')
  }
  public CompletedStatus(assign_Id:number)
  {
    //complete course
    return this.httpc.put("https://localhost:44388/api/UserDashboardComplete/CourseCompleted?assign_Id="+assign_Id,'')
  }

  public GetCreditsTotal(userName:string)
  {
    //get completed course credits
    return this.httpc.get("https://localhost:44388/api/GetCredits?userName="+userName)
  }
}
