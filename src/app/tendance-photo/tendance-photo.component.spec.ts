import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendancePhotoComponent } from './tendance-photo.component';

describe('TendancePhotoComponent', () => {
  let component: TendancePhotoComponent;
  let fixture: ComponentFixture<TendancePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TendancePhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TendancePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
