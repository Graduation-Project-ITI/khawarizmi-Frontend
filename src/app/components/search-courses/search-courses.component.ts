import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/SearchService/search.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActiveService } from 'src/app/services/RegisterService/active.service';
@Component({
  selector: 'app-search-courses',
  templateUrl: './search-courses.component.html',
  styleUrls: ['./search-courses.component.css']
})
export class SearchCoursesComponent implements OnInit {

  isAuthenticated : any;
  perPage :any=8;
  totalItem :any;
  constructor(public searchService:SearchService, private router: Router, private actServ: ActiveService){
  }

  ngOnInit(): void {
    this.isAuthenticated = this.actServ.isLoggedIn();
    this.totalItem = this.searchService.searchTotal;
    console.log(this.totalItem);

  }

}
