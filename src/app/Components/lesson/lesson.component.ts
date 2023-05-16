import { Component, OnInit } from '@angular/core';
import { Lesson } from '../../../../DataTypes/Lesson'
import { LessonService } from '../../Services/lesson.service';


@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit{

  lessonId = 7;
  // lessonInfo: Lesson | null = null;
  videoURL: string | null = null;

  constructor(private http:LessonService)
  {
    this.http.getLesson(this.lessonId).subscribe({
      next: (res: any) => 
      {
        // this.lessonInfo = res;
        this.videoURL = res.videoURL;
        console.log(this.videoURL);
        
      },
      error: (err) => console.log(err)
    })
  }

  ngOnInit(): void {

  }  
}
