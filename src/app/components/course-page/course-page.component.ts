import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseOverviewService } from 'src/app/services/course-overview.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  courseId:any;
  course:any;

  constructor(private CourseOverviewServ:CourseOverviewService, private ActRoute:ActivatedRoute){

    this.courseId = ActRoute.snapshot.params["courseId"];

    CourseOverviewServ.getCourseInfo(this.courseId).subscribe({
      next: res => {
        this.course = res;
        console.log(this.course);
      },
      error: err => console.log(err)
    });

  }

  ngOnInit(): void {}

  get UserIsPublisher(){
    return this.course.PublisherId == localStorage.getItem("userId");
  }

}
