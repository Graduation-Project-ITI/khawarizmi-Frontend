import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  headers:any;
  token:any;
  baseUrl = `${environment.baseURL}CoursesPage`;
  secondUrl = `${environment.baseURL}CoursesPerPage`;
  LatestCourseUrl = `${environment.baseURL}api/Course/LatestCourses`;
  TopVotesUrl = `${environment.baseURL}api/Course/TopCourses`;
  categoryCoursesUrl = `${environment.baseURL}api/Course/CategoryCourses`;
  page :any = 1;
  params =new HttpParams();
  // params.append('catId', 1);

  constructor(private http : HttpClient) {
    this.token = localStorage.getItem("token");
    this.headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.token
    })
  } 

  getAllCourses(){
    return this.http.get(`${this.baseUrl}`, {headers : this.headers});
  }
  getPageCourses(pNumber:number):Observable<any>{
    return this.http.get(`${this.secondUrl}?PageNumber=${pNumber}`, {headers : this.headers});
  } 
  getLatestCourses(){
    return this.http.get(`${this.LatestCourseUrl}`, {headers : this.headers});
  }
  getTopCourses(){
    return this.http.get(`${this.TopVotesUrl}`, {headers : this.headers});
  }
  getCategoryCourses(pageNumber:number,CatId:number):Observable<any>{
    console.log('inside service of get category courses');
    
   return this.http.get(`${this.categoryCoursesUrl}?catId=${CatId}&pageNum=${pageNumber}`, {headers : this.headers});
  }

}
