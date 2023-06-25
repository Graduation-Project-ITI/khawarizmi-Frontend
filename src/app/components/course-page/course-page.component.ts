import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CourseOverviewService } from 'src/app/services/course-overview.service';
import { EditCourseComponent } from '../edit-course/edit-course.component';
import { CreateLessonComponent } from '../create-lesson/create-lesson.component';
import { ConfirmDeletionDialogComponent } from '../confirm-deletion-dialog/confirm-deletion-dialog.component';
import { CourseDataService } from 'src/app/services/CourseDataService/course-data.service';
import { ConfirmLessonDeletionDialogComponent } from '../confirm-lesson-deletion-dialog/confirm-lesson-deletion-dialog.component';


@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css'],
})
export class CoursePageComponent implements OnInit {
  courseId: any;
  course: any;
  lessons: any[] = [];
  editDialog: any;
  isLoading = true;

  constructor(
    private CourseOverviewServ: CourseOverviewService,
    private ActRoute: ActivatedRoute,
    private dialog: MatDialog,
    private dataService: CourseDataService
  ) {}

  ngOnInit(): void {
    console.log("course page");

    this.courseId = this.ActRoute.snapshot.params['courseId'];

    this.CourseOverviewServ.getCourseInfo(this.courseId).subscribe({
      next: (res) => {
        console.log("next");

        this.isLoading = false;
        this.course = res;
        this.lessons = this.course.lessons;
        this.CourseOverviewServ.isLoading = false;
        // we can't pass data using router-outlet. So, we use service to share data between the 2 components
        this.dataService.courseData = res;
        this.dataService.userIsPublisher = this.UserIsPublisher

        console.log('data from service', this.dataService.courseData);

        console.log('course data', this.course);
      },
      error: (err) => {
        if(err.status == 404){
          //console.log("wrong course id");
          location.assign("/error");
        }
      },
    });
  }

  editCourseDialog(){
    if(this.UserIsPublisher){
      this.dialog.open(EditCourseComponent, {data:this.course});
    }
  }

  deleteCourse(){
    if(this.UserIsPublisher){
      this.dialog.open(ConfirmDeletionDialogComponent, {data:this.courseId});
    }
  }

  deleteLesson(lessonId:any){
    if(this.UserIsPublisher){
      const dialogRef = this.dialog.open(ConfirmLessonDeletionDialogComponent, {data: {lessonId:lessonId, courseId:this.courseId}});
      dialogRef.afterClosed().subscribe({
        next: flag => {
          console.log(flag);
          if(flag){
            let lessonToRemove;
            this.lessons.forEach(l => {
              if(l.id == lessonId) lessonToRemove = l;
            });
            let i = this.lessons.indexOf(lessonToRemove)
            console.log(i);
            this.lessons.splice(i,1);
          }
        },
        error: err => console.log(err)
      })
    }
  }

  get UserIsPublisher() {
    return this.course.publisherId == localStorage.getItem('userId');
  }

  CreateLesson(){
    if(this.UserIsPublisher){
      this.dialog.open(CreateLessonComponent);
    }
  }

  getLesson(id:any){
    console.log("new method");

  }

}
