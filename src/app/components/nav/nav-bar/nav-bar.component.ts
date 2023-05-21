import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CreateCourseComponent } from '../../create-course/create-course.component';
import { ActiveService } from 'src/app/services/RegisterService/active.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/Profile/profile.service';
import { SearchService } from 'src/app/services/SearchService/search.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  title = 'khawarizmi-frontend';

  x:any;
  token:any;
  isAuthentication:any;
  username:any;
  userImage:any;
  searchData:any;
  isLoading = false;
  errorMsg:any;
  searchResults:any;
  constructor(
    public dialog: MatDialog,
    private authService: ActiveService,
    private router: Router,
    public user:ProfileService,
    private searchServ:SearchService
    ) {}
  ngOnInit():void {

  }

  createCourseDialog() {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = false;

        this.x = this.dialog.open(CreateCourseComponent, dialogConfig);
  }

  ngAfterViewChecked(): void {
    this.isAuthentication =localStorage.getItem('ngx-webstorage|token');
  }
  logOut(){
    this.authService.removeToken();
    this.router.navigateByUrl('/signin');
  }
   OnSearch(e:any){
    var inputElement = e.target as HTMLInputElement;
    var query = inputElement.value;
    this.searchServ.searchQuery = query;
    this.router.navigateByUrl('/SearchCourses');
    this.searchServ.onSearch(this.searchServ.searchQuery).subscribe({
      next: (data:any) => {
        this.searchServ.isloading = false;
        this.searchServ.SearchResult = data.allCourses;
        console.log( this.searchServ.SearchResult);
        console.log(data);
        this.searchServ.p =1;
        this.searchServ.searchTotal = data.count;
        console.log(this.searchServ.searchTotal);
      },
      error: (error:any) =>{
        this.searchServ.isloading = false;
        this.errorMsg = error;
        console.log(error.error.message);
      }
    })
   
   }


}
