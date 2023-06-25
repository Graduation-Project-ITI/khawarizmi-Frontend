import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CreateCourseService {

  headers:any;
  token:any;

  constructor(private httpClient : HttpClient) {
    this.token = localStorage.getItem("token");
    this.headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.token
    })
  }

  private baseUrl = `${environment.baseURL}CreateCourse`;

  getCategories(){
    console.log(this.headers);

    return this.httpClient.get(`${this.baseUrl}/categories`, {headers: this.headers});
  }

  getTagsByCategory(categoryId:any){
    return this.httpClient.get(`${this.baseUrl}/${categoryId}/tags`, {headers: this.headers});
  }

  postCourseData(userId:any, newCourse:any){
    return this.httpClient.post(`${this.baseUrl}/${userId}`, newCourse, {headers : this.headers});
  }
}
