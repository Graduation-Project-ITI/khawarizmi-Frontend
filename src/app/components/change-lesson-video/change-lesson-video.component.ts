import { Component } from '@angular/core';

@Component({
  selector: 'app-change-lesson-video',
  templateUrl: './change-lesson-video.component.html',
  styleUrls: ['./change-lesson-video.component.css'],
})
export class ChangeLessonVideoComponent {
  videoFile: File | null = null;

  onVideoChange(event: any) {
    this.videoFile = event.target.files[0];
  }
}
