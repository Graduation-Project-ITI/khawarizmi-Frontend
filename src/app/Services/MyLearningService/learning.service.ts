
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LearningService {

  URL=environment.baseURL+"api/Learning";
  headers:any;
  token:any;

  constructor(private httpClient : HttpClient) {
    this.token = localStorage.getItem("token");
    this.headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.token
    })
  }

  getAllCourses(userid:string,pagenumber:number,path:string)
  {
      //return this.httpClient.get(`${this.URL}/${path}/${userid}?pagenumber=${pagenumber}`, {headers : this.headers});
      return this.httpClient.get(`${this.URL}/${path}/${userid}`, {headers : this.headers});
  }



}
