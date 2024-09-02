import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingUnitsDetailsComponent } from './pending-units-details.component';

describe('PendingUnitsDetailsComponent', () => {
  let component: PendingUnitsDetailsComponent;
  let fixture: ComponentFixture<PendingUnitsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingUnitsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingUnitsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
