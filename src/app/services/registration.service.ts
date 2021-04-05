import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Register } from "../model/register";
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient:HttpClient) { }
  public addUsers(register:Register)
  {
    return this.httpClient.post("https://localhost:44388/api/registration",register);//calling registraion controller passing an register object
  }
}
