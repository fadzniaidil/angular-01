import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FldetailsComponent } from './fldetails.component';

describe('FldetailsComponent', () => {
  let component: FldetailsComponent;
  let fixture: ComponentFixture<FldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
