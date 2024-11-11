import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNoteComponent } from './view-note.component';

describe('ViewNoteComponent', () => {
  let component: ViewNoteComponent;
  let fixture: ComponentFixture<ViewNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
