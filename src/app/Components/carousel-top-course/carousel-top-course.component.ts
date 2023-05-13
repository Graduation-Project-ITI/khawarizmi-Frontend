import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-top-course',
  templateUrl: './carousel-top-course.component.html',
  styleUrls: ['./carousel-top-course.component.css']
})
export class CarouselTopCourseComponent {
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
