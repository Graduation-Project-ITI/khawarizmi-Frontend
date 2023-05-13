import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.css'],
})
export class CreateLessonComponent implements OnInit {
  lessonForm: FormGroup;
  videoFile: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private http: LessonService
  ) {
    this.lessonForm = this.formBuilder.group({
      title: ['', Validators.required],
      video: ['', Validators.required],
      description: [''],
    });
  }

  public ngOnInit(): void {}

  submit(isPublish: boolean) {
    console.log('submit pressed');
    if (this.videoFile == null) return;

    const title = this.lessonForm.controls['title'].value;
    const description = this.lessonForm.controls['description'].value;

    const metadata = {
      description,
      title,
      isPublish,
      courseId: 3,
    };

    // upload video
    this.http.CreateLesson(this.videoFile, metadata).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }

  getVideo(event: any) {
    this.videoFile = event.target.files[0];
  }

  get isFormValid() {
    return this.lessonForm.valid;
  }
}
