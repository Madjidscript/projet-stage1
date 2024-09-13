import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendanceVideoComponent } from './tendance-video.component';

describe('TendanceVideoComponent', () => {
  let component: TendanceVideoComponent;
  let fixture: ComponentFixture<TendanceVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TendanceVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TendanceVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
