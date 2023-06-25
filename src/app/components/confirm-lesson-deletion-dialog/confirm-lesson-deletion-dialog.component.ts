import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LessonService } from 'src/app/services/LessonService/lesson.service';
import { DialogData } from '../feedback-dialog/feedback-dialog.component';

@Component({
  selector: 'app-confirm-lesson-deletion-dialog',
  templateUrl: './confirm-lesson-deletion-dialog.component.html',
  styleUrls: ['./confirm-lesson-deletion-dialog.component.css']
})
export class ConfirmLessonDeletionDialogComponent {

  x:any = this.data;
  lessonId:any = this.x.lessonId;
  courseId:any = this.x.courseId;
  flag = true;

  constructor(private LServ: LessonService,
    private dialogRef: MatDialogRef<ConfirmLessonDeletionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData) { }

  no() {
    this.dialogRef.close();
  }

  yes() {
    this.LServ.deleteLesson(this.lessonId, localStorage.getItem("userId")).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    });
  }
}
