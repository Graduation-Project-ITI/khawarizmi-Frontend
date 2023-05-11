import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateLessonComponent } from './components/create-lesson/create-lesson.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'khawarizmi-frontend';

  constructor(public dialog: MatDialog) {}
  
  openLessonDialog() {
    const LessonDialogRef = this.dialog.open(CreateLessonComponent);
    LessonDialogRef.afterClosed().subscribe((result) => {
      console.log('the dialog was closed');
      console.log(result);
    });
  }
}
