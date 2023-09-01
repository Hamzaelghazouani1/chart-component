import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartZoomComponent } from './chart-zoom.component';

describe('ChartZoomComponent', () => {
  let component: ChartZoomComponent;
  let fixture: ComponentFixture<ChartZoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartZoomComponent]
    });
    fixture = TestBed.createComponent(ChartZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
