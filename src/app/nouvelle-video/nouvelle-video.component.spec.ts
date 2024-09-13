import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleVideoComponent } from './nouvelle-video.component';

describe('NouvelleVideoComponent', () => {
  let component: NouvelleVideoComponent;
  let fixture: ComponentFixture<NouvelleVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvelleVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
