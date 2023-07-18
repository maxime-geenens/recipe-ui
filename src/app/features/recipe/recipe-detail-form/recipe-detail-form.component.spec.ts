import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailFormComponent } from './recipe-detail-form.component';

describe('RecipeDetailFormComponent', () => {
  let component: RecipeDetailFormComponent;
  let fixture: ComponentFixture<RecipeDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
