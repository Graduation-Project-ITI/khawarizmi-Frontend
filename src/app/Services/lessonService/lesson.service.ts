import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LessonService {

  baseURL = 'https://localhost:7249/api/Lesson';
  headers:any;
  token:any;

  constructor(private http : HttpClient) {
    this.token = localStorage.getItem("token");
    this.headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.token
    })
  }

  CreateLesson(video: File, metadata: any) {
    const formData = new FormData();
    formData.append('metadata', JSON.stringify(metadata));
    formData.append('video', video, video.name);

    return this.http.post(this.baseURL, formData, {headers : this.headers});
  }

  getLesson(id: number) {
    return this.http.get(`${this.baseURL}?id=${id}`, {headers : this.headers});
  }

  // change title
  changeTitle(id: number, title: string) {
    return this.http.put(
      `${this.baseURL}/update-title?id=${id}&title=${title}`,
      null, {headers : this.headers}
    );
  }

  // change description
  changeDescription(id: number, description: string) {
    const body = {
      description,
    };

    return this.http.put(`${this.baseURL}/update-description/${id}`, body, {headers : this.headers});
  }

  // change video
  changeVideo(id: number, videoFile: any) {
    const formData = new FormData();
    formData.append('video', videoFile);
    return this.http.put(`${this.baseURL}/update-video/${id}`, formData, {headers : this.headers});
  }

  deleteLesson(lessonId:any, userId:any){
    return this.http.delete(`${this.baseURL}/delete/${lessonId}/${userId}`, {headers : this.headers});
  }
}
