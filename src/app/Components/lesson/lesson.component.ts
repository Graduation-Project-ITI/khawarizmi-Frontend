import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeLessonVideoComponent } from '../change-lesson-video/change-lesson-video.component';
import { EditLessonTitleComponent } from '../edit-lesson-title/edit-lesson-title.component';
import { LessonService } from 'src/app/services/lessonService/lesson.service';
@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
})
export class LessonComponent implements OnInit {
  userId: number | null = 2; // get from token
  courseOwner: number | null = 2; // as input from course component
  lessonId = 6; // as input from course component

  title: string = '';
  videoURL: string = '';
  description: string = '';

  videoFile: File | null = null;
  descriptionEditMode: boolean = false;

  constructor(private http: LessonService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.http.getLesson(this.lessonId).subscribe({
      next: (res: any) => {
        this.title = res.title;
        this.videoURL = res.videoURL;
        this.description = res.description;
      },
      error: (err) => console.log(err),
    });
  }

  editTitle() {
    const dialogRef = this.dialog.open(EditLessonTitleComponent, {
      data: { title: this.title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('from dialog', result);
      this.title = result;

      // send req with new title
      this.http.changeTitle(this.lessonId, this.title).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => console.log('error from req', err),
      });
    });
  }

  editVideo() {
    const dialogRef = this.dialog.open(ChangeLessonVideoComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.videoFile = result;

      // send req with new videoFile
      this.http.changeVideo(this.lessonId, this.videoFile).subscribe({
        next: (res: any) => {
          console.log(res);
          this.videoURL = res.videoURL;
        },
      });
    });
  }

  editDescription() {
    this.descriptionEditMode = true;
    // send req with new description
  }
  editDescriptionSubmit() {
    console.log(this.description);
    this.descriptionEditMode = false;

    // send req with new description
    this.http.changeDescription(this.lessonId, this.description).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }

  // toolbar config
  quillConfiguration = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      ['link'],
      ['clean'],
    ],
  };
}
