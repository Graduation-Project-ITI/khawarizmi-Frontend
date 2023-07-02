import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LessonService } from '../../services/LessonService/lesson.service';
import { CourseDataService } from 'src/app/services/CourseDataService/course-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.css'],
})
export class CreateLessonComponent implements OnInit {
  lessonForm: FormGroup;
  videoFile: File | null = null;
  courseId:any;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: LessonService,
    private Course:CourseDataService,
    private ActRoute: ActivatedRoute,
    // public dialogRef: MatDialogRef<CreateLessonComponent>
  ) {
    this.lessonForm = this.formBuilder.group({
      title: ['', Validators.required],
      video: ['', Validators.required],
      description: [''],
    });
  }

  public ngOnInit(): void {
    this.courseId = this.ActRoute.snapshot.params['courseId'];
  }

  submit(isPublish: boolean) {
    this.isLoading = true;

    if (this.videoFile == null) return;

    const title = this.lessonForm.controls['title'].value;
    const description = this.lessonForm.controls['description'].value;

    const metadata = {
      description,
      title,
      isPublish,
      courseId : this.Course.courseData.id
    };

    // upload video
    this.http.CreateLesson(this.videoFile, metadata).subscribe({
      next: (res:any) => {
        console.log(res);
        console.log(this.Course.courseData.id);

        // this.dialogRef.close();
        location.assign(`/coursePage/${this.Course.courseData.id}/courseOverview`);
      },
      error: (err:any) => {
        this.isLoading = false;
        console.log(err)
      }
    });
  }

  getVideo(event: any) {
    this.videoFile = event.target.files[0];
  }

  get isFormValid() {
    return this.lessonForm.valid;
  }
}
