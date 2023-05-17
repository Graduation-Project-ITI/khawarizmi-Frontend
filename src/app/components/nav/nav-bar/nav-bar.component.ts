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
  userData:any;
  userImage:any;
  constructor(public dialog: MatDialog,private authService: ActiveService, private router: Router, private user:ProfileService) {


  }
  ngOnInit():void {
    console.log('helloyasmeen getuser onginit');

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
