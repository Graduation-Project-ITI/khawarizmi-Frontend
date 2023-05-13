import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  baseURL = 'http://localhost:5223';
  constructor(private http: HttpClient) {}

  CreateLesson(video: File, metadata: any) {
    const formData = new FormData();
    formData.append('metadata', JSON.stringify(metadata));
    formData.append('video', video, video.name);

    return this.http.post(this.baseURL+'/api/Lesson', formData);
  }

  getLesson(id: number) {
    return this.http.get(`${this.baseURL}/api/Lesson?id=${id}`);
  }
}
