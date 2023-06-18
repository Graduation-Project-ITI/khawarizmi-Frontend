import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseOverviewService {

  headers:any;
  token:any;

  constructor(private httpClient : HttpClient) {
    this.token = localStorage.getItem("token");
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
  }

  private baseUrl = "https://e-learning-api-sc6i.onrender.com/CoursePage";
  isLoading = true;
  getCourseInfo (courseId:any) {
    console.log('Bearer ' + this.token);
    return this.httpClient.get(`${this.baseUrl}/${courseId}`, {headers : this.headers});
  }

  updateCourseInfo (updatedCourse:any) {
    return this.httpClient.put(`${this.baseUrl}/Edit`, updatedCourse, {headers : this.headers});
  }

  updatehUserCourseVote (data:any) {
    return this.httpClient.patch(`${this.baseUrl}/userVote`, data, {headers : this.headers});
  }

  updatehUserCourseLearn (data:any) {
    return this.httpClient.patch(`${this.baseUrl}/userLearn`, data, {headers : this.headers});
  }

  updatehUserCourseBookmark (data:any) {
    return this.httpClient.patch(`${this.baseUrl}/userBookmark`, data, {headers : this.headers});
  }

  updateCoursePublish (data:any) {
    return this.httpClient.patch(`${this.baseUrl}/Publish`, data, {headers : this.headers});
  }

  addUserCourseFeedback (data:any) {
    return this.httpClient.post(`${this.baseUrl}/Feedback`, data, {headers : this.headers});
  }

  deleteCourse (courseId:any) {
    return this.httpClient.delete(`${this.baseUrl}/Delete/${courseId}`, {headers : this.headers});
  }


}
