import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpc:HttpClient) { }

  public UpdateCourse(course_Id:number, courseName:string,   courseDescription:string,   courseAuthor:string,   courseDuration:string,   courseDifficulty:string,   creditScore:number)
  {
    //httpput to admin webapi controller
    return this.httpc.put("https://localhost:44388/api/Admin?course_Id="+course_Id+"&courseName="+courseName+"&courseDescription="+courseDescription+"&courseAuthor="+courseAuthor+"&courseDuration="+courseDuration+"&courseDifficulty="+courseDifficulty+"&courseCreditScore="+creditScore,'')
  }
  public DeleteCourse(course_Id:number){
    //httpdelete to admin webapi controller
    return this.httpc.delete("https://localhost:44388/api/Admin?course_Id="+course_Id)
  }
}
