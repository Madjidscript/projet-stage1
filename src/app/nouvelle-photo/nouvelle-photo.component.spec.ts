import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvellePhotoComponent } from './nouvelle-photo.component';

describe('NouvellePhotoComponent', () => {
  let component: NouvellePhotoComponent;
  let fixture: ComponentFixture<NouvellePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvellePhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvellePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
