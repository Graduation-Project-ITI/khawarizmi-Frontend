import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTopCourseComponent } from './carousel-top-course.component';

describe('CarouselTopCourseComponent', () => {
  let component: CarouselTopCourseComponent;
  let fixture: ComponentFixture<CarouselTopCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselTopCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselTopCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
