import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/services/CourseServic/courses.service';
import { CourseOverviewService } from 'src/app/services/course-overview.service';
import { CreateCourseService } from 'src/app/services/create-course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: any;
  isLoading = true;
  categories: any;
  p: number = 1;
  coursePerPage: any;
  totalItems = 100;
  itemsPerPage: any = 8;
  pageNumber: any;
  totalPages: any;
  $e: any;
  pageCategories: any = 1;
  catId: any;
  arr: any = [];
  isEmpty: boolean = true;
  isCategoryEmpty: boolean = false;
  selectedOption!: any;
  constructor(
    private route: ActivatedRoute,
    public CourseService: CoursesService,
    private Course: CreateCourseService,
    private OneCourse: CourseOverviewService
  ) {}
  async ngOnInit() {
    this.getPageNumbers(1, 6);

    // when routing from categories in home to courses to show the specific category courses
    const categoryId = this.route.snapshot.params['categoryId'];
    console.log(categoryId);

    this.Course.getCategories().subscribe({
      next: (res) => {
        this.categories = res;
        console.log('categories', this.categories);

        if (categoryId) {
          this.selectedOption = this.categories.find(
            (category: any) => category.id == categoryId
          ).catName;
          console.log(this.selectedOption);

          this.getCategoryCourses(categoryId);
        } else this.LoadPage(this.p);
      },
      error: (err) => {
        console.log(err);
        
      },
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  LoadPage(pageNumber: number) {
    this.pageCategories = pageNumber;
    this.getPageNumbers(pageNumber, pageNumber + 5);
    return this.CourseService.getPageCourses(pageNumber).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.allCourses.length === 0) this.isEmpty = true;
        else this.isEmpty = false;

        console.log(res.allCourses);
        
        this.coursePerPage = res.allCourses;
        this.totalItems = res.count;
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
      error: (err) => {
        this.isLoading = false;
      },
    });
  }
  getPageNumbers(s: number, f: number) {
    const totalPages = Math.ceil(100 / this.itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    this.arr = pageNumbers.slice(--s, --f);
    return this.arr;
  }
  prevPage() {
    this.pageCategories--;
    this.getPageNumbers(this.pageCategories, this.pageCategories + 5);
    this.LoadPage(this.pageCategories);
  }
  nextPage() {
    this.pageCategories++;
    this.getPageNumbers(this.pageCategories, this.pageCategories + 5);
    this.LoadPage(this.pageCategories);
  }
  getCategoryCourses(id: number) {
    this.pageCategories = 1;
    this.CourseService.getCategoryCourses(this.pageCategories, id).subscribe({
      next: (res) => {
        if (res.allCourses.length === 0)
        {
          this.isEmpty = true;
          this.isCategoryEmpty = true;
        }
        else
        {
          this.isEmpty = false;
          this.isCategoryEmpty = true;
        }
        console.log("called");
        this.isLoading = false;
        this.coursePerPage = res.allCourses;
        this.totalItems = res.count;
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
    });
  }
  getAllCourses() {
    this.pageCategories = 1;
    this.CourseService.getPageCourses(this.pageCategories).subscribe({
      next: (res) => {
        if (res.allCourses.length === 0) this.isEmpty = true;
        else this.isEmpty = false;

        this.coursePerPage = res.allCourses;
        console.log(this.coursePerPage);
        
      },
      error: (err) => {
        console.log(err);
        
      },
    });
  }

  onOptionSelected(){
    if(this.selectedOption == "All Categories"){
      this.getAllCourses();
    }else {
      this.getCategoryCourses(this.categories.find((c:any) => c.catName == this.selectedOption).id)
    }
  }
}
