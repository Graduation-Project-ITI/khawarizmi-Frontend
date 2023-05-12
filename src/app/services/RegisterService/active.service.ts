import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

 private BaseURL="https://localhost:7249/api";

  constructor( private myservice:HttpClient ) 
  {
      

   }

   SignUp(Data:any)
   {
     return this.myservice.post(`${this.BaseURL}/signup`,Data);
   }
   Signin(Data:any)
   {
   return this.myservice.post(`${this.BaseURL}/login`,Data);
   }
}
