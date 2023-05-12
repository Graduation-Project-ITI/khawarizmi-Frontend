import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreateLessonService {
  baseURL = 'http://localhost:5223/api/CreateLesson';
  constructor(private http: HttpClient) {}

  CreateLesson(video: File, metadata: any) {
    const formData = new FormData();

    // const metadata = { title, description ,isPublish};

    formData.append('metadata', JSON.stringify(metadata));
    formData.append('video', video, video.name);

    return this.http.post(this.baseURL, formData);
  }
}
