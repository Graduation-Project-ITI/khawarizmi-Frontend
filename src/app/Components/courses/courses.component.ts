import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/CourseServic/courses.service';
import { CreateCourseService } from 'src/app/services/create-course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
  courses: any;
  isLoading = true;
  categories:any;
  
  constructor(myActive:ActivatedRoute,private CourseService:CoursesService, private Course: CreateCourseService){}
  ngOnInit(): void {
    this.CourseService.getAllCourses().subscribe({
      next:(res)=>{
        this.isLoading = false;
       this.courses = res;
       console.log(this.courses);
      },
      error(err){

      },
    });
    this.Course.getCategories().subscribe({
    next:(res)=>{
      this.categories = res;
      console.log(this.categories);
    },
    error:(err)=>{

    }
    });

  }

}
