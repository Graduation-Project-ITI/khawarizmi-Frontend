import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  baseURL = 'https://e-learning-api-sc6i.onrender.com/api/Lesson';
  constructor(private http: HttpClient) {}

  CreateLesson(video: File, metadata: any) {
    const formData = new FormData();
    formData.append('metadata', JSON.stringify(metadata));
    formData.append('video', video, video.name);

    return this.http.post(this.baseURL, formData);
  }

  getLesson(id: number) {
    return this.http.get(`${this.baseURL}?id=${id}`);
  }

  // change title
  changeTitle(id: number, title: string) {
    return this.http.put(
      `${this.baseURL}/update-title?id=${id}&title=${title}`,
      null
    );
  }

  // change description
  changeDescription(id: number, description: string) {
    const body = {
      description,
    };

    return this.http.put(`${this.baseURL}/update-description/${id}`, body);
  }

  // change video
  changeVideo(id: number, videoFile: any) {
    const formData = new FormData();
    formData.append('video', videoFile);
    return this.http.put(`${this.baseURL}/update-video/${id}`, formData);
  }
}
