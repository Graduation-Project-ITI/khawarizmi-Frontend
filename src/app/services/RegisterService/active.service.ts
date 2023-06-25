import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorage } from 'ngx-webstorage';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

 private BaseURL=`${environment.baseURL}api`;

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
