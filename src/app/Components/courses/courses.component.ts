import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/CourseServic/courses.service';
import { CourseOverviewService } from 'src/app/services/course-overview.service';
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
  itemsPerPage :any = 8;
  pageNumber:any;
  totalPages: any;
  $e: any;
  pageCategories: any;
  catId: any;
  arr:any=[];
  isEmpty: boolean = false;
  constructor(myActive:ActivatedRoute,public CourseService:CoursesService, private Course: CreateCourseService, private OneCourse: CourseOverviewService){}
  ngOnInit(): void { 
    this.getPageNumbers(1,6)
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
    this.pageCategories = pageNumber;
    this.getPageNumbers(pageNumber,pageNumber+5)
    return this.CourseService.getPageCourses(pageNumber).subscribe({
    next:(res)=>{
      this.isLoading = false;
      if(res.allCourses.length === 0) this.isEmpty = true;
      else this.isEmpty = false;

      this.coursePerPage = res.allCourses;
      this.totalItems = res.count;
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    error: (err)=>{}
    });
  } 
  getPageNumbers(s:number,f:number) {
    const totalPages = Math.ceil(100 / this.itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    this.arr=pageNumbers.slice(--s, --f);
    return this.arr;
  }
  prevPage(){
    this.pageCategories--;
    this.getPageNumbers(this.pageCategories,this.pageCategories+5)
    this.LoadPage(this.pageCategories);
    
  }
  nextPage(){
    this.pageCategories++;
    this.getPageNumbers(this.pageCategories,this.pageCategories+5);
        this.LoadPage(this.pageCategories);
  }
  getCategoryCourses(id:number){

    this.CourseService.getCategoryCourses(this.pageCategories, id).subscribe({
      next: (res)=>{
        if(res.allCourses.length === 0) this.isEmpty = true;
        else this.isEmpty = false;

        this.coursePerPage = res.allCourses;
        this.totalItems = res.count;
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      },
      error: (err)=>{

      }
    })
  }
  getAllCourses(){
    this.CourseService.getPageCourses(this.pageCategories).subscribe({
      next:(res)=>{
        if(res.allCourses.length === 0) this.isEmpty = true;
        else this.isEmpty = false;

        this.coursePerPage = res.allCourses;
      },
      error:(err)=>{
  
      }
    })
  }

}
