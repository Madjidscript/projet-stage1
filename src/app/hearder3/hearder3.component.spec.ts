import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hearder3Component } from './hearder3.component';

describe('Hearder3Component', () => {
  let component: Hearder3Component;
  let fixture: ComponentFixture<Hearder3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hearder3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hearder3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
