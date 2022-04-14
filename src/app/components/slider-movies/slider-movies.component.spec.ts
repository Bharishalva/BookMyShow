import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMoviesComponent } from './slider-movies.component';

describe('SliderMoviesComponent', () => {
  let component: SliderMoviesComponent;
  let fixture: ComponentFixture<SliderMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
