import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

 private BaseURL="https://localhost:7249/api";

  constructor( private http:HttpClient )
  {


   }

   SignUp(Data:any)
   {
     return this.http.post(`${this.BaseURL}/signup`,Data);
   }
   Signin(Data:any)
   {
   return this.http.post(`${this.BaseURL}/login`,Data);
   }

   isLoggedIn():any {
    return localStorage.getItem('token');
  }

   removeToken(){
    localStorage.removeItem('token');
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
   }
}
