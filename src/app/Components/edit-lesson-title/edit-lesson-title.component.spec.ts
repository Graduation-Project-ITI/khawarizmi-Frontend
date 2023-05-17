import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLessonTitleComponent } from './edit-lesson-title.component';

describe('EditLessonTitleComponent', () => {
  let component: EditLessonTitleComponent;
  let fixture: ComponentFixture<EditLessonTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLessonTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLessonTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
