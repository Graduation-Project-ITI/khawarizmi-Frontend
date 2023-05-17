import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }
  baseUrl = "https://localhost:7249/CoursesPage";

  getAllCourses(){
    return this.http.get(`${this.baseUrl}`);
  }

}
