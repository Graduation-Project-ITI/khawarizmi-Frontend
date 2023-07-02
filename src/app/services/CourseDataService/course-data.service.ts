import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  constructor() { }

  courseData: any;
  userIsPublisher: boolean | null = null;
}
