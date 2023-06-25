import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CoursesService } from 'src/app/services/CourseServic/courses.service';
import { ActiveService } from 'src/app/services/RegisterService/active.service';
 
@Component({
  selector: 'app-carousel-top-course',
  templateUrl: './carousel-top-course.component.html',
  styleUrls: ['./carousel-top-course.component.css']
})
export class CarouselTopCourseComponent implements OnInit{
  isAuthenticated : any;
  newestCourses: any;
  // courseName:any;
  // courseDescription:any;
  // courseImage:any;
  // courseDate:any;
  isloading =true;
  constructor(private courseService: CoursesService, private actServ: ActiveService) { }
  ngOnInit(): void {
    this.isAuthenticated = this.actServ.isLoggedIn();
    this.courseService.getLatestCourses().subscribe({
      next: (res: any) => {
        this.isloading = false;
        this.newestCourses =res;
        // this.courseName = res.name;
        // this.courseDescription = res.description;
        // this.courseDate = res.date;
        // this.courseImage = res.courseImage;
        console.log(this.newestCourses);
      },
      error: (error: any) =>{}
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    smartSpeed: 1200,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    navText: [
      '<i class="fa fa-caret-left"></i>',
      '<i class="fa fa-caret-right"></i>',
    ], 
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
    nav: true
  }

}
