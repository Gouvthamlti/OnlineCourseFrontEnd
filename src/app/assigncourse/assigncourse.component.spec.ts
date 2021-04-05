import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigncourseComponent } from './assigncourse.component';

describe('AssigncourseComponent', () => {
  let component: AssigncourseComponent;
  let fixture: ComponentFixture<AssigncourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigncourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigncourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
