import {Component, Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { CourseOverviewService } from 'src/app/services/course-overview.service';

export interface DialogData {
  courseId:any
}

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.css']
})
export class FeedbackDialogComponent {

  constructor(private CourseOverviewServ:CourseOverviewService,
    public dialogRef: MatDialogRef<FeedbackDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData){

  }

  close(){
    this.data.courseId
    this.dialogRef.close()
  }

  submit(feedback:any){
      var data = {CourseId:this.data.courseId , UserId:localStorage.getItem("userId"), Feedback:feedback}
      this.CourseOverviewServ.addUserCourseFeedback(data).subscribe();
      location.reload();
  }
}
