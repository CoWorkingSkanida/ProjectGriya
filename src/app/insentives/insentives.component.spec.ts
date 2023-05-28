import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsentivesComponent } from './insentives.component';

describe('InsentivesComponent', () => {
  let component: InsentivesComponent;
  let fixture: ComponentFixture<InsentivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsentivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsentivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
