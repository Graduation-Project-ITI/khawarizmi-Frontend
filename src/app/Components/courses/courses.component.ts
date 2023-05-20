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
  p:number = 1;
  coursePerPage:any;
  totalItems= 100;
  itemsPerPage = 8;
  pageNumber:any;
  totalPages: any;
  constructor(myActive:ActivatedRoute,private CourseService:CoursesService, private Course: CreateCourseService){}
  ngOnInit(): void { 
    this.Course.getCategories().subscribe({
    next:(res)=>{
      this.categories = res;
      console.log(this.categories);
    },
    error:(err)=>{

    }
    });
    /////////pagination///////////////
    this.LoadPage(this.p);
    }

  LoadPage(pageNumber:number){
    return this.CourseService.getPageCourses(pageNumber).subscribe({
    next:(res)=>{
      this.isLoading = false;
      this.coursePerPage = res.allCourses;
      this.totalItems = res.count;
      console.log(this.coursePerPage);
    },
    error: (err)=>{}
      });
  }
  getPageNumbers() {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }
  // prevPage(){
  //   this.pageNumber--;
  //   this.getPageNumbers();
  // }
  // nextPage(){
  //   this.pageNumber++;
  //   this.getPageNumbers();
  // }
  getCategoryCourses(){
    
  }

}
