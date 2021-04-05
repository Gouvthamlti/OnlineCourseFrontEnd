import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssignCourse } from '../model/AssignCourse';

@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {

  constructor(private httpc:HttpClient) { }
  public GetAllUsers(){
    return this.httpc.get("https://localhost:44388/api/Admindashboard/GetUser")//get all users from admindashboard controller
  }
  public GetUserById(user_id:number)
  {
    //get  user based on user id from admindashboard controller
    return this.httpc.get("https://localhost:44388/api/Admindashboard/GetUserbyId?user_Id="+user_id)
  }
  public GetAllCourse(){
    //get all course from admin dashboard
    return this.httpc.get("https://localhost:44388/api/Admindashboard/GetCourse")
  }
  
  public AssignCourse(userName:string,user_Id:number,course_Id:number,adminName:string,creditScore:number,assign:AssignCourse)
  {
    //Post assign course by admin
    return this.httpc.post("https://localhost:44388/api/Admindashboard/PostAssign?userName="+userName+"&user_Id="+user_Id+"&course_Id="+course_Id+"&adminName="+adminName+"&creditScore="+creditScore,assign)
  }
  public GetUserEnrolledCourses(user_id:number)
  {
    return this.httpc.get("https://localhost:44388/api/GetUserEnrolledCourses?uid="+user_id)
  }
}
