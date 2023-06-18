import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourseOverviewService } from 'src/app/services/course-overview.service';
import { DialogData } from '../feedback-dialog/feedback-dialog.component';

@Component({
  selector: 'app-confirm-deletion-dialog',
  templateUrl: './confirm-deletion-dialog.component.html',
  styleUrls: ['./confirm-deletion-dialog.component.css']
})
export class ConfirmDeletionDialogComponent {

  constructor(private CourseOverviewServ:CourseOverviewService,
              private dialogRef:MatDialogRef<ConfirmDeletionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: DialogData){}

  no(){
    this.dialogRef.close();
  }

  yes(){
    this.CourseOverviewServ.deleteCourse(this.data).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    });
    location.assign("/profile");
  }
}
