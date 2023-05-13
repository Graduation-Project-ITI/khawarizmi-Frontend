import { Component, OnInit } from '@angular/core';
import { CourseOverviewService } from 'src/app/services/course-overview.service';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css']
})
export class CourseOverviewComponent implements OnInit {

  course:any;

  constructor (private CourseOverviewServ:CourseOverviewService) {}

  ngOnInit(): void {
    this.CourseOverviewServ.getCourseInfo("id").subscribe({
      next: res => {
        this.course = res;
        console.log(this.course);
      },
      error: err => console.log(err)
    });
  }


  publish(){
    this.course.IsPublished = true;
  }

  draft(){
    this.course.IsPublished = false;
  }

  bookmark(){}

  learn(){}
}
