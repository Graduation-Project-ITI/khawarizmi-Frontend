import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage/lib/services/localStorage';
import { CourseOverviewService } from 'src/app/services/course-overview.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  course:any;

  constructor(private CourseOverviewServ:CourseOverviewService, ){

    CourseOverviewServ.getCourseInfo(1).subscribe({
      next: res => {
        this.course = res;
        console.log(this.course);
      },
      error: err => console.log(err)
    });
    
  }

  ngOnInit(): void {

  }



}
