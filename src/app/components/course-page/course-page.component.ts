import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CourseOverviewService } from 'src/app/services/course-overview.service';
import { EditCourseComponent } from '../edit-course/edit-course.component';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  courseId:any;
  course:any;
  editDialog:any;

  constructor(private CourseOverviewServ:CourseOverviewService, private ActRoute:ActivatedRoute, public dialog: MatDialog){

    this.courseId = ActRoute.snapshot.params["courseId"];

    CourseOverviewServ.getCourseInfo(this.courseId).subscribe({
      next: res => {
        this.course = res;
        console.log(this.course);
      },
      error: err => console.log(err)
    });

  }

  ngOnInit(): void {
  }

  editCourseDialog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;

    this.editDialog = this.dialog.open(EditCourseComponent, dialogConfig);
  }

  get UserIsPublisher(){
    return this.course.publisherId == localStorage.getItem("userId");
  }

}
