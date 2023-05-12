import { TestBed } from '@angular/core/testing';

import { CreateLessonService } from './create-lesson.service';

describe('CreateLessonService', () => {
  let service: CreateLessonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateLessonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
