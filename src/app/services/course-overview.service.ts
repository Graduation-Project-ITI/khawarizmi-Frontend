import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseOverviewService {

  constructor(private httpClient : HttpClient) { }

  private baseUrl = "https://localhost:7249/CoursePage";

  getCourseInfo (courseId:any) {
    return this.httpClient.get(`${this.baseUrl}/${courseId}`);
  }

  updateCourseInfo (updatedCourse:any) {
    return this.httpClient.put(`${this.baseUrl}/Edit`, updatedCourse);
  }

  updatehUserCourseVote (data:any) {
    return this.httpClient.patch(`${this.baseUrl}/userVote`,data);
  }

  updatehUserCourseLearn (data:any) {
    return this.httpClient.patch(`${this.baseUrl}/userLearn`,data);
  }

  updatehUserCourseBookmark (data:any) {
    return this.httpClient.patch(`${this.baseUrl}/userBookmark`,data);
  }

  updateCoursePublish (data:any) {
    return this.httpClient.patch(`${this.baseUrl}/Publish`,data);
  }

  addUserCourseFeedback (data:any) {
    return this.httpClient.post(`${this.baseUrl}/Feedback`,data);
  }
  

}
