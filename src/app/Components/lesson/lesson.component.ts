import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LessonService } from 'src/app/services//LessonService/lesson.service';
import { EditLessonTitleComponent } from '../edit-lesson-title/edit-lesson-title.component';
import { ChangeLessonVideoComponent } from '../change-lesson-video/change-lesson-video.component';
import { CourseDataService } from 'src/app/services/CourseDataService/course-data.service';
import { ActivatedRoute } from '@angular/router';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
  providers:[ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class LessonComponent implements OnInit {
  userId: number | any; // get from token
  courseOwner: number | any; // as input from course component
  lessonId: number | any; // as input from course component
  course:any;
  lesson: any;
  title: string = '';
  videoURL: string = '';
  description: string = '';
  videoFile: File | null = null;
  descriptionEditMode: boolean = false;

  constructor(private http: LessonService, private dataService: CourseDataService, private dialog: MatDialog, private ActivatedRoute: ActivatedRoute) {

    this.userId = localStorage.getItem("userId");
    this.course = dataService.courseData;
    console.log(this.course);
    this.lessonId = ActivatedRoute.snapshot.params["id"];
    console.log(this.lessonId);

    this.lesson = this.course.lessons.filter((l:any) => l.id === +this.lessonId)[0];
    console.log(this.lesson);

    this.title = this.lesson.title;
    this.videoURL = this.lesson.videoURL;
    this.description = this.lesson.description;
  }
  @ViewChild('exampleRTE')
  componentObject! : RichTextEditorComponent;

  buttonElement! : HTMLElement | null;
  htmlContent! : string;

  ngOnInit(): void {

    console.log("hello", this.lessonId);

    this.http.getLesson(+this.lessonId).subscribe({
      next: (res: any) => {
        this.title = res.title;
        this.videoURL = res.videoURL.split("7249/")[1];
        console.log(this.videoURL);
        this.description = res.description;
        console.log(this.lesson.videoURL);
        
      },
      error: (err) => console.log(err),
    });

  }

  editTitle() {
    const dialogRef = this.dialog.open(EditLessonTitleComponent, {
      data: { title: this.title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('from dialog', result);
      this.title = result;

      // send req with new title
      this.http.changeTitle(this.lessonId, this.title).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => console.log('error from req', err),
      });
    });
  }

  editVideo() {
    const dialogRef = this.dialog.open(ChangeLessonVideoComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.videoFile = result;

      // send req with new videoFile
      this.http.changeVideo(this.lessonId, this.videoFile).subscribe({
        next: (res: any) => {
          console.log(res);
          this.videoURL = res.videoURL;
        },
      });
    });
  }

  editDescription() {
    this.descriptionEditMode = true;
    // send req with new description
  }

  editDescriptionSubmit() {
    this.htmlContent = this.componentObject.getHtml();
    this.description = this.htmlContent;
    console.log(this.htmlContent);
    
    this.descriptionEditMode = false;

    // send req with new description
    this.http.changeDescription(this.lessonId, this.description).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }
}
