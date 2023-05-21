import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/SearchService/search.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-search-courses',
  templateUrl: './search-courses.component.html',
  styleUrls: ['./search-courses.component.css']
})
export class SearchCoursesComponent implements OnInit {


  perPage :any=2;
  totalItem :any;
  constructor(public searchService:SearchService, private router: Router){
  }
  
  ngOnInit(): void {
    this.totalItem = this.searchService.searchTotal;
  }

}
