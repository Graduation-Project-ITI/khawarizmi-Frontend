import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateCourseService {

  constructor(private httpClient : HttpClient) { }

  private baseUrl = "https://localhost:7249/CreateCourse";

  getCategories(){
    return this.httpClient.get(`${this.baseUrl}/categories`);
  }

  getTagsByCategory(categoryId:any){
    return this.httpClient.get(`${this.baseUrl}/${categoryId}/tags`);
  }

  postCourseData(userId:any, newCourse:any){
    return this.httpClient.post(`${this.baseUrl}/${userId}`, newCourse);
  }
}
