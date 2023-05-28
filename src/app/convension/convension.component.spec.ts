import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvensionComponent } from './convension.component';

describe('ConvensionComponent', () => {
  let component: ConvensionComponent;
  let fixture: ComponentFixture<ConvensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
