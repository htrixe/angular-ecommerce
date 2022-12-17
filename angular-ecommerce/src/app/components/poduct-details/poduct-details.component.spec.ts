import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductDetailsComponent } from './poduct-details.component';

describe('PoductDetailsComponent', () => {
  let component: PoductDetailsComponent;
  let fixture: ComponentFixture<PoductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
