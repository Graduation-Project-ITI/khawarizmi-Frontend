import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CreateCourseComponent } from '../../create-course/create-course.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  title = 'khawarizmi-frontend';

  x:any;

  constructor(public dialog: MatDialog) {}

  createCourseDialog() {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = false;

        this.x = this.dialog.open(CreateCourseComponent, dialogConfig);
  }
}
