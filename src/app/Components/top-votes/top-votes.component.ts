import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CoursesService } from 'src/app/services/CourseServic/courses.service';

@Component({
  selector: 'app-top-votes',
  templateUrl: './top-votes.component.html',
  styleUrls: ['./top-votes.component.css']
})
export class TopVotesComponent implements OnInit{
  TopVoteCourses: any;
  isloading=true;
  constructor(private courseService: CoursesService) { }
  ngOnInit(): void {
    this.courseService.getTopCourses().subscribe({
      next: (res: any) => {
        this.isloading=false;
        this.TopVoteCourses =res;
        console.log("top votes")
        console.log(this.TopVoteCourses);
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
