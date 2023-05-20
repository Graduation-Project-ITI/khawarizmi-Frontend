import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }
  baseUrl = "https://localhost:7249/CoursesPage";
  secondUrl = "https://localhost:7249/CoursesPerPage";

  getAllCourses(){
    return this.http.get(`${this.baseUrl}`);
  }
  getPageCourses(pNumber:number):Observable<any>{
    return this.http.get(`${this.secondUrl}?PageNumber=${pNumber}`);
  }
 
}
