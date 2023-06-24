import { Component, OnInit } from '@angular/core';
import { ActiveService } from 'src/app/services/RegisterService/active.service';
import { CreateCourseService } from 'src/app/services/create-course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuthenticated : any;
  categories: any[] | null = null;
  constructor(private actServ: ActiveService, private course: CreateCourseService) {

  }

  ngOnInit(): void {
    this.isAuthenticated = this.actServ.isLoggedIn();
  }

  getCagegories(){
    this.course.getCategories().subscribe({
      next: res => console.log(res)
    })
  }
}
