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
  userx:{name:string, userImage:string, email:string, gender: number, courses:{}[] }={name: 'abanoub', userImage: 'https://khawarizmi-frontend-f4bf.vercel.app/2023520145955354.png', email: 'abanoub@saleh.com', gender: 0, courses: Array(0)};

  errorMsg:any;
  isLoading = false;
  searchData:any;
  searchResults:any;

  constructor(
    public dialog: MatDialog,
    private authService: ActiveService,
    private router: Router,
    public user:ProfileService,
    private searchServ:SearchService
    ) {}
  ngOnInit():void {
    console.log('helloyasmeen getuser onginit');
 this.user.getProfileInfo().subscribe((res:any)=>{this.userx=res; this.username=this.userx.name;
  this.userImage=this.userx.userImage} );

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
        this.searchServ.isError = false;
        this.searchServ.SearchResult = data.allCourses;
        console.log( this.searchServ.SearchResult);
        console.log(data);
        this.searchServ.p =1;
        this.searchServ.searchTotal = data.count;
        console.log(this.searchServ.searchTotal);
      },
      error: (error:any) =>{
        this.searchServ.isloading = false;
        this.searchServ.isError = true;
        this.searchServ.errorMsg = error.error.message;
        console.log(this.searchServ.isError);
        console.log( this.searchServ.SearchResult);
        console.log(error.error.message);
      }
    })
   
   }


}
