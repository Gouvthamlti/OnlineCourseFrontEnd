import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http'; 
import {​​​​map}​​​​ from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
 
  constructor(private userHttp : HttpClient, private http : HttpClient) {
   
   }

   
   public AdminLogin(userName:string,password:string){​​​​
    //admin login mmethod
    return this.userHttp.get("https://localhost:44388/api/Admin?userName="+userName+"&password="+password)

    .pipe(

        map(user=>{​​​​

            localStorage.setItem("admin",JSON.stringify(user))
            console.log(user)
            return user;
         

        }​​​​)

    );

}​​​​


   public UserLoginValid(userName:string,password:string){​​​​
    //user login method
    return this.userHttp.get("https://localhost:44388/api/userlogin?userName="+userName+"&password="+password)

    .pipe(

        map(user=>{​​​​

            localStorage.setItem("currentuser",JSON.stringify(user))
            console.log(user)
            return user;
         

        }​​​​)

    );

}​​​​
}
