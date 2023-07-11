import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSourcesComponent } from './image-sources.component';

describe('ImageSourcesComponent', () => {
  let component: ImageSourcesComponent;
  let fixture: ComponentFixture<ImageSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
