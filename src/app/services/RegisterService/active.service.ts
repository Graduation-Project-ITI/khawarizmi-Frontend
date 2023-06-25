import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorage } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

 private BaseURL="https://e-learning-api-sc6i.onrender.com/api";

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
    localStorage.clear();
   }
}
