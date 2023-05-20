import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CreateCourseComponent } from '../../create-course/create-course.component';
import { ActiveService } from 'src/app/services/RegisterService/active.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/Profile/profile.service';
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
  userx:{name:string, userImage:string, email:string, gender: number, courses:{}[] }={name: 'abanoub', userImage: 'https://localhost:7249/2023520145955354.png', email: 'abanoub@saleh.com', gender: 0, courses: Array(0)};
  constructor(public dialog: MatDialog,private authService: ActiveService, private router: Router, public user:ProfileService) {

  }
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



}
