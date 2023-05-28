import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibittonComponent } from './exhibitton.component';

describe('ExhibittonComponent', () => {
  let component: ExhibittonComponent;
  let fixture: ComponentFixture<ExhibittonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibittonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhibittonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
