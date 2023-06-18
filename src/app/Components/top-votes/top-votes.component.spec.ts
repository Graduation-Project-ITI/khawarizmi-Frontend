import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopVotesComponent } from './top-votes.component';

describe('TopVotesComponent', () => {
  let component: TopVotesComponent;
  let fixture: ComponentFixture<TopVotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopVotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
