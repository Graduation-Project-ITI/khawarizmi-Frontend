import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }
  baseUrl = "https://e-learning-api-sc6i.onrender.com/CoursesPage";
  secondUrl = "https://e-learning-api-sc6i.onrender.com/CoursesPerPage";
  LatestCourseUrl = "https://e-learning-api-sc6i.onrender.com/api/Course/LatestCourses";
  TopVotesUrl = "https://e-learning-api-sc6i.onrender.com/api/Course/TopCourses";
  categoryCoursesUrl = "https://e-learning-api-sc6i.onrender.com/api/Course/CategoryCourses";
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
