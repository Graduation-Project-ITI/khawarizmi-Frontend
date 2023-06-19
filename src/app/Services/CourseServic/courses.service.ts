import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }
  baseUrl = "https://localhost:7249/CoursesPage";
  secondUrl = "https://localhost:7249/CoursesPerPage";
  LatestCourseUrl = "https://localhost:7249/api/Course/LatestCourses";
  TopVotesUrl = "https://localhost:7249/api/Course/TopCourses";
  categoryCoursesUrl = "https://localhost:7249/api/Course/CategoryCourses";
  page :any = 1;
  params =new HttpParams();
  // params.append('catId', 1);

  getAllCourses(){
    return this.http.get(`${this.baseUrl}`);
  }
  getPageCourses(pNumber:number):Observable<any>{
    return this.http.get(`${this.secondUrl}?PageNumber=${pNumber}`);
  } 
  getLatestCourses(){
    return this.http.get(`${this.LatestCourseUrl}`);
  }
  getTopCourses(){
    return this.http.get(`${this.TopVotesUrl}`);
  }
  getCategoryCourses(pageNumber:number,CatId:number):Observable<any>{
   return this.http.get(`${this.categoryCoursesUrl}?catId=${CatId}&pageNum=${pageNumber}`);
  }
 
}
