import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySettingsComponent } from './category-settings.component';

describe('CategorySettingsComponent', () => {
  let component: CategorySettingsComponent;
  let fixture: ComponentFixture<CategorySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorySettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
