import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-lesson-title',
  templateUrl: './edit-lesson-title.component.html',
  styleUrls: ['./edit-lesson-title.component.css'],
})
export class EditLessonTitleComponent {
  constructor() {}
  @Input() title: string = "";
}
