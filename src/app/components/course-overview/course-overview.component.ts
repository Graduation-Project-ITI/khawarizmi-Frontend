import { Component, Input, OnInit } from '@angular/core';
import { CourseOverviewService } from 'src/app/services/course-overview.service';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css']
})
export class CourseOverviewComponent implements OnInit {

  course:any = null;

  @Input() courseFromCoursePage:any = "";
  @Input() UserIsPublisher:any = "";
  
  constructor (private CourseOverviewServ:CourseOverviewService) {
    // this.CourseOverviewServ.getCourseInfo(4).subscribe({
    //   next: res => {
    //     this.course = res;
    //     console.log(this.course);
    //   },
    //   error: err => console.log(err)
    // });
  }

  ngOnInit(): void {
    this.course = this.courseFromCoursePage;
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
