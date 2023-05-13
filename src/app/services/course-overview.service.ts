import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseOverviewService {

  constructor(private httpClient : HttpClient) { }

  private baseUrl = "https://localhost:7249/CourseOverview";

  getCourseInfo (courseId:any) {
    return this.httpClient.get(`${this.baseUrl}/${courseId}`);
  }

  updateCourseInfo (courseId:any, updatedCourse:any) {
    return this.httpClient.put(`${this.baseUrl}/${courseId}`, updatedCourse);
  }


}
