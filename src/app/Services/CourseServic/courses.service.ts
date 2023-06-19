import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  headers:any;
  token:any;
  baseUrl = "https://localhost:7249/CoursesPage";

  constructor(private http : HttpClient) {
    this.token = localStorage.getItem("token");
    this.headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.token
    })
  }

  getAllCourses(){
    return this.http.get(`${this.baseUrl}`, {headers : this.headers});
  }

}
