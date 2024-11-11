import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCardComponent } from './subject-cards.component';

describe('SubjectCardComponent', () => {
  let component: SubjectCardComponent;
  let fixture: ComponentFixture<SubjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
