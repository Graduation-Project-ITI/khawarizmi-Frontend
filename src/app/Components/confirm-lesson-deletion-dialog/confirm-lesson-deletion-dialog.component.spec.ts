import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmLessonDeletionDialogComponent } from './confirm-lesson-deletion-dialog.component';

describe('ConfirmLessonDeletionDialogComponent', () => {
  let component: ConfirmLessonDeletionDialogComponent;
  let fixture: ComponentFixture<ConfirmLessonDeletionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmLessonDeletionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmLessonDeletionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
