import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLessonVideoComponent } from './change-lesson-video.component';

describe('ChangeLessonVideoComponent', () => {
  let component: ChangeLessonVideoComponent;
  let fixture: ComponentFixture<ChangeLessonVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeLessonVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeLessonVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
