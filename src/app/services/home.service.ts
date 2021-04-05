import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
export interface ICourse {
  Course_Id:number;
  Course_Name: string;
  CourseDescription: string;
  CourseStartDate:String;
}
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly course1:ICourse[];

  constructor(private http : HttpClient) { }
  public getAllCourse():Observable<any[]>{
    return this.http.get<any[]>("https://localhost:44388/api/home");//get all course from home controller
  }

}
