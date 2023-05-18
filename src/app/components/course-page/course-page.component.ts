import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CourseOverviewService } from 'src/app/services/course-overview.service';
import { EditCourseComponent } from '../edit-course/edit-course.component';
import { CreateLessonComponent } from '../create-lesson/create-lesson.component';
import { ConfirmDeletionDialogComponent } from '../confirm-deletion-dialog/confirm-deletion-dialog.component';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  courseId:any;
  course:any;
  editDialog:any;

  constructor(private CourseOverviewServ:CourseOverviewService, private ActRoute:ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.courseId = this.ActRoute.snapshot.params["courseId"];

    this.CourseOverviewServ.getCourseInfo(this.courseId).subscribe({
      next: res => {
        this.course = res;
        console.log(this.course);
      },
      error: err => console.log(err)
    });
  }

  editCourseDialog(){
    if(this.UserIsPublisher){
      this.dialog.open(EditCourseComponent);
    }
  }

  deleteCourse(){
    if(this.UserIsPublisher){
      this.dialog.open(ConfirmDeletionDialogComponent, {data:this.courseId});
    }
  }

  get UserIsPublisher(){
    return this.course.publisherId == localStorage.getItem("userId");
  }

  CreateLesson(){
    if(this.UserIsPublisher){
      this.dialog.open(CreateLessonComponent);
    }
  }
}
